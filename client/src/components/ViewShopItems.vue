<template>
  <div>
    <div class="columns">
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
        integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
        crossorigin="anonymous"
      >
      <div class="column is-narrow filter">
        <ShopPageFilterBox
          :existingBrands = "brands"
          @priceFilter="onPriceFilter"
          @deliveryFilter="onDeliveryFilter"
          @brandFilter="onBrandFilter"
          @categoryFilter="onCategoryFilter"
          v-if="hasItems()"
        />
      </div>
      <div class="column">
        <div id="wrap">
          <div id="columns" class="columns_4" v-if="hasItems()">
            <figure
              class="has-ribbon"
              v-for="(item, index) in deliveryRefinedItems"
              v-bind:key="index"
            >
              <!-- change indexof to whatever category you want to show the ribbon on -->
              <div class="ribbon is-danger" v-if="item.saleprice">{{ saleText }}</div>
              <router-link :to="{ name: 'itempage', params: { itemid: item.id } }">
                <div class="imagediv">
                  <img :src="item.image" class="image">
                </div>
              </router-link>
              <figcaption>{{item.name}}</figcaption>
              <span class="price" v-if="item.saleprice">
                Original price:
                <del>${{item.price}}</del>
              </span>
              <br>
              <span class="price" v-if="!item.saleprice">${{item.price}}</span>
              <span class="price" v-if="item.saleprice">
                <b>Sale: ${{item.saleprice}}</b>
              </span>
              <div
                class="buttonadd button is-rounded is-info is-focused"
                v-on:click="toast(item)"
              >add to cart</div>
            </figure>
          </div>
        </div>
      </div>
    </div>

    <div v-if="!hasItems()">
      <center>
        <h1>the store has no items :(</h1>
        <br>
        <img
          src="https://media1.tenor.com/images/077ec9cadfa41dc224276e4026175f4c/tenor.gif?itemid=5510092"
        >
      </center>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { iShopItem } from "../models/shopitem.interface";
import axios, { AxiosResponse, AxiosError } from "axios";
import { APIConfig } from "../utils/api.utils";
import ShopPageFilterBox from "@/components/ShopPageFilterBox.vue";
import { iBrand } from "../models/brand.interface";
import { exists } from "fs";
import { Category } from "../../../api/entity";


@Component({
  components: {
    ShopPageFilterBox
  }
})
export default class ViewShopItems extends Vue {
  @Prop() sortVal: String = "";
  error: string | boolean = false;
  items: iShopItem[] = [];
  saleText: string = "SALE";
  priceFilter: String = "all";
  deliveryFilter: String = "all";
  brandselect: String = "all";
  brands: iBrand[] = [];
  category_Ids: number[] = [];

  toast(item: iShopItem) {
    if (this.addToCart(item) == true) {
      this.$toast.open({
        queue: false,
        duration: 2000,
        message: `item added to cart successfully`,
        position: "is-bottom",
        type: "is-primary"
      });
    } else {
      this.$toast.open({
        queue: false,
        duration: 2000,
        message: `max quantity already added to cart`,
        position: "is-bottom",
        type: "is-danger"
      });
    }
  }

  hasItems() {
    return this.items.length > 0;
  }

  addToCart(item: iShopItem) {
    var items: iShopItem[] = this.$store.state.items;
    var quan = 0;
    for (var i in items) {
      if (items[i].id == item.id) {
        quan++;
      }
    }

    var totalquan = +1 + +quan;
    console.log(totalquan);
    if (totalquan > item.quantity) {
      console.log("out of stock" + totalquan);
      return false;
    } else {
      this.$store.commit("cart", item);
      console.log(
        "[ViewShopItems.vue]" + JSON.stringify(this.$store.state.items)
      );
      return true;
    }
  }

  created() {
    this.getAllItems();
  }

  // get items => get their brandIds => use brandIds to get corresponding Brand objects => send to filterbox as prop
  getAllItems() {
    this.error = false;
    var existingBrandIds: number[] = [];
    axios
      .get(APIConfig.buildUrl("/shopitems"))
      .then((response: AxiosResponse) => {
        var allItems: iShopItem[] = response.data;
        for (var item in allItems) {
          if (allItems[item].quantity > 0) {
            this.items.push(allItems[item]);
            // retrieve non-duplicate brandIds.
            if(existingBrandIds.indexOf(allItems[item].brand) == -1)
              existingBrandIds.push(allItems[item].brand);
          }
        }
        console.log("brandIds: " + JSON.stringify(existingBrandIds));
        
        var i;
        for(i = 0; i< existingBrandIds.length; i++){
          var brandId = existingBrandIds[i];
          axios
            .get(APIConfig.buildUrl("/brands/" + brandId))
            .then((response: AxiosResponse) => {
              this.brands.push(response.data);
              console.log("retrieved brand: " + JSON.stringify(response.data));
  
                
              //console.log("brands so far: " + JSON.stringify(this.brands));
              this.$emit("success");
            })
            .catch((res: AxiosError) => {
              console.log("[AdminEditProduct.vue] Error@@");
            });
          
        }

        this.$emit("success");
      })
      .catch((res: AxiosError) => {
        this.error = res.response && res.response.data.error;
        console.log("[ViewShopItems.vue]" + this.error);
      });
  }

  get categoryRefinedItems() {
    console.log("categoryIds: " + this.category_Ids);
    var catIds :number[] = this.category_Ids;
    console.log("typeof catIds: " + typeof(catIds));
    console.log("catIds: " + catIds);
    if (catIds.length == 0) {
      console.log("all selected");
      return this.sortedItems;
    } 
    else {
      return this.sortedItems.filter(function(s) {
        return catIds.includes(s.categoryId);
      });
    }
  }

  get brandRefinedItems() {
    if (this.brandselect == "all") {
      return this.categoryRefinedItems;
    } else {
      const brandId = Number(this.brandselect);
      return this.categoryRefinedItems.filter(function(s) {
        return s.brand == brandId;
      });
    }
  }

  get priceRefinedItems() {
    const p = this.priceFilter;
    var priceArr_S: string[] = [];
    if (p == "all") {
      return this.brandRefinedItems;
    } else {
      priceArr_S = p.split("-");
      console.log(priceArr_S);
      if (priceArr_S.length == 1) {
        const price = Number(priceArr_S[0]);
        console.log("price:" + priceArr_S[0]);
        return this.brandRefinedItems.filter(function(s) {
          return s.price >= price;
        });
      } else {
        const low = Number(priceArr_S[0]);
        const high = Number(priceArr_S[1]);
        return this.brandRefinedItems.filter(function(s) {
          return s.price >= low && s.price < high;
        });
      }
    }
  }

  get deliveryRefinedItems() {
    const d = this.deliveryFilter;
    if (d == "all") {
      return this.priceRefinedItems;
    } else {
      var deliveryBoolean = d == "true";
      return this.priceRefinedItems.filter(function(s) {
        return s.delivery == deliveryBoolean;
      });
    }
  }

  get sortedItems() {
    console.log("sorting: " + this.sortVal);
    function compareName(a, b) {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      return 0;
    }
    function comparePrice(a, b) {
      var a_price;
      var b_price;
      if (a.saleprice > 0) {
        a_price = a.saleprice;
      } else {
        a_price = a.price;
      }

      if (b.saleprice > 0) {
        b_price = b.saleprice;
      } else {
        b_price = b.price;
      }

      if (a_price < b_price) return -1;
      if (a_price > b_price) return 1;
      return 0;
    }

    if (this.sortVal == "1") return this.items.sort(compareName);
    return this.items.sort(comparePrice);
  }

  onPriceFilter(newFilter) {
    this.priceFilter = newFilter;
    console.log("price filter: " + newFilter);
  }

  onDeliveryFilter(newFilter) {
    this.deliveryFilter = newFilter;
    console.log("delivery filter: " + newFilter);
  }

  onBrandFilter(newFilter) {
    this.brandselect = newFilter;
  }

  onCategoryFilter(newFilter) {
    this.category_Ids = newFilter;
  }

  goToItemPage() {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.ribbon {
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.3);
  border-radius: 1px;
}

#wrap {
  margin: auto;
  max-width: 1100px;
  padding-bottom: 50px;
}

.columns_4 figure {
  width: 24%;
  margin-right: 1%;
  object-fit: cover;
}
.columns_4 figure:nth-child(4) {
  margin-right: 0;
}

#columns figure:hover {
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  transform: scale(1);
}

div#columns figure {
  display: inline-block;
  background: #fefefe;
  border-radius: 5px;
  border: 0px solid #fafafa;
  box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
  margin-bottom: 10px;
  -webkit-column-break-inside: avoid;
  -moz-column-break-inside: avoid;
  padding: 15px;
  padding-bottom: 15px;
  background: -webkit-linear-gradient(45deg, #fff, #f9f9f9);
  opacity: 1;
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

div#columns figure img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-bottom: 1px solid #ccc;
  padding-bottom: 15px;
  margin-bottom: 5px;
}

div#columns figure figcaption {
  font-size: 0.9rem;
  color: #444;
  line-height: 1.5;
  height: 40px;
  font-weight: 600;
  text-overflow: ellipsis;
}

.buttonadd {
  margin: px;
  display: block;
  text-align: center;
  margin-top: 5px;
  transition: 0.3s;
}
.buttonadd:hover {
  background: #00d0b2;
  color: #f1f2f3;
}
@media screen and (max-width: 960px) {
  #columns figure {
    min-width: 24%;
  }
}
@media screen and (max-width: 767px) {
  #columns figure {
    min-width: 32%;
  }
}
@media screen and (max-width: 600px) {
  #columns figure {
    min-width: 49%;
  }
}
@media screen and (max-width: 500px) {
  #columns figure {
    min-width: 100%;
  }
}

.imagediv {
  height: 150px;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.filter {
  height: 100%;
  margin-left: 20px;
}
</style>
