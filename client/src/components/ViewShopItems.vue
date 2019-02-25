<template>
  <div>
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
      integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
      crossorigin="anonymous"
    >
    <ShopPageFilterBox v-if="hasItems()"/>

    <div id="wrap" v-if="hasItems()">
      <div id="columns" class="columns_4">
        <figure class="has-ribbon" v-for="(item, index) in sortedItems" v-bind:key="index">
          <!-- change indexof to whatever category you want to show the ribbon on -->
          <div
            class="ribbon is-danger"
            v-if="item.saleprice"
          >{{ saleText }}</div>
          <router-link :to="{ name: 'itempage', params: { itemid: item.id } }">
            <div class="imagediv">
              <img :src="item.image" class="image">
            </div>
          </router-link>
          <figcaption>{{item.name}}</figcaption>
          <span class="price" v-if="item.saleprice">Original price: <del>${{item.price}}</del></span>
          <br>
          <span class="price" v-if="!item.saleprice">${{item.price}}</span>
          <span class="price" v-if="item.saleprice"><b>Sale: ${{item.saleprice}}</b></span>
          <div class="buttonadd button is-rounded is-info is-focused" v-on:click="toast(item)">add to cart</div>
        </figure>
      </div>
    </div>
    <div v-if="!hasItems()">
      <h1>the store has no items :(</h1>
      <br>
      <center>
        <img
          src="https://media1.tenor.com/images/077ec9cadfa41dc224276e4026175f4c/tenor.gif?itemid=5510092"
        >
      </center>
    </div>
    <div id="toast">
      <div id="img">
        <font-awesome-icon icon="shopping-cart"/>
      </div>
      <div id="desc">successfully added to your cart</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { iShopItem } from "../models/shopitem.interface";
import axios, { AxiosResponse, AxiosError } from "axios";
import { APIConfig } from "../utils/api.utils";
import ShopPageFilterBox from "@/components/ShopPageFilterBox.vue";

@Component({
  components: {
    ShopPageFilterBox
  }
})
export default class ViewShopItems extends Vue {
  @Prop() sortVal: String;
  error: string | boolean = false;
  items: iShopItem[] = [];
  saleText: string = "SALE";
  toast(item: iShopItem) {
    const ele = document.getElementById("toast");
    if (ele) {
      ele.className = "show";
      setTimeout(function() {
        ele.className = ele.className.replace("show", "");
      }, 3000);
    }
    this.addToCart(item);
  }

  hasItems() {
    return this.items.length > 0;
  }

  addToCart(item: iShopItem) {
    this.$store.commit("cart", item);
    console.log(
      "[ViewShopItems.vue]" + JSON.stringify(this.$store.state.items)
    );
  }

  created() {
    this.getAllItems();
  }

  getAllItems() {
    this.error = false;
    axios
      .get(APIConfig.buildUrl("/shopitems"))
      .then((response: AxiosResponse) => {
        this.items = response.data;
        this.$emit("success");
      })
      .catch((res: AxiosError) => {
        this.error = res.response && res.response.data.error;
        console.log("[ViewShopItems.vue]" + this.error);
      });
  }

  get sortedItems() {
    console.log("sorting: " + this.sortVal);
    function compareName(a, b) {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      return 0;
    }
    function comparePrice(a, b) {
      if (a.price < b.price) return -1;
      if (a.price > b.price) return 1;
      return 0;
    }

    if (this.sortVal == "1") return this.items.sort(compareName);
    return this.items.sort(comparePrice);
  }

  goToItemPage() {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#toast {
  visibility: hidden;
  max-width: 50px;
  height: 55px;
  margin: auto;
  background-color: #00D0B2;
  color: #fff;
  text-align: center;
  border-radius: 5px;

  position: fixed;
  z-index: 1;
  left: 0;
  right: 0;
  bottom: 30px;
  font-size: 17px;
  white-space: nowrap;
}
#toast #img {
  width: 55px;
  height: 55px;

  float: left;

  padding-top: 16px;
  padding-bottom: 16px;

  box-sizing: border-box;
  border-radius: 5px;

  background-color: rgb(0, 194, 165);
  color: #fff;
}
#toast #desc {
  color: #fff;

  padding: 16px;

  overflow: hidden;
  white-space: nowrap;
}

.ribbon {
    box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.3);
    border-radius: 1px

}
#toast.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, expand 0.5s 0.5s, stay 3s 1s, shrink 0.5s 2s,
    fadeout 0.5s 2s;
  animation: fadein 0.5s, expand 0.5s 0.5s, stay 3s 1s, shrink 0.5s 4s,
    fadeout 0.5s 2.5s;
}

@-webkit-keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@-webkit-keyframes expand {
  from {
    min-width: 50px;
  }
  to {
    min-width: 350px;
  }
}

@keyframes expand {
  from {
    min-width: 50px;
  }
  to {
    min-width: 350px;
  }
}
@-webkit-keyframes stay {
  from {
    min-width: 350px;
  }
  to {
    min-width: 350px;
  }
}

@keyframes stay {
  from {
    min-width: 350px;
  }
  to {
    min-width: 350px;
  }
}
@-webkit-keyframes shrink {
  from {
    min-width: 350px;
  }
  to {
    min-width: 50px;
  }
}

@keyframes shrink {
  from {
    min-width: 350px;
  }
  to {
    min-width: 50px;
  }
}

@-webkit-keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 60px;
    opacity: 0;
  }
}

@keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 60px;
    opacity: 0;
  }
}

#wrap {
  width: 90%;
  margin: auto;
  max-width: 1100px;
  padding-bottom:50px;
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
  width: 100%;
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
  // background: #239cec;
  margin: px;
  display: block;
  text-align: center;
  margin-top: 5px;
  transition: 0.3s;
}
.buttonadd:hover {
  background: #00D0B2;
  color: #f1f2f3;
}
@media screen and (max-width: 960px) {
  #columns figure {
    width: 24%;
  }
}
@media screen and (max-width: 767px) {
  #columns figure {
    width: 32%;
  }
}
@media screen and (max-width: 600px) {
  #columns figure {
    width: 49%;
  }
}
@media screen and (max-width: 500px) {
  #columns figure {
    width: 100%;
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
</style>
