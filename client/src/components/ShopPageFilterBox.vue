<template>
  <div class="filter-box">
    <article class="message is-info">
      <div class="message-header">Filters</div>
    </article>

    <div class="filters">
      <p>Category</p>
      <div class="select">
        <select name="category" v-model="categoryselect" v-on:change="filterCategory" >
          <option value="all">All</option>
          <option
            v-for="category in categorynames"
            v-bind:key="category.category"
            :value="category.category"
          >{{category.category}}</option>
        </select>
      </div>

      <p>Brand</p>
      <div class="select">
        <select name="brand" v-model="brandselect" v-on:change="filterBrand">
          <option value="all">All</option>
          <option v-for="brand in retrievedBrands" v-bind:key="brand.id" :value="brand.id"> {{brand.name}} </option>
        </select>
      </div>

      <p>Price</p>
      <div class="select">
        <select name="price" v-on:change="filterPrice($event)">
          <option selected="true" value="all">All</option>
          <option value="0-25">$0 - $25</option>
          <option value="25-50">$25 - $50</option>
          <option value="50-75">$50 - $75</option>
          <option value="75-100">$75 - $100</option>
          <option value="100">$100 +</option>
        </select>
      </div>

      <p>Store Pickup</p>
      <div class="select">
        <select name="pickup" v-on:change="filterDelivery($event)">
          <option selected="true" value="all">Either</option>
          <option value="false">Store Pickup</option>
          <option value="true">Ship to Me</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios, { AxiosResponse, AxiosError } from "axios";
import { APIConfig } from "../utils/api.utils";
import { Component, Prop, Vue } from "vue-property-decorator";
import { iBrand } from "../models/brand.interface";
import { iShopItem } from "../models/shopitem.interface";
import { Category } from "../../../api/entity";


@Component
export default class ShopPageFilterBox extends Vue {
  //@Prop() private msg!: string;
  @Prop() existingBrands : iBrand[] = [];
  error: string | boolean = false;
  brandselect: string = "all";
  categorynames: Category[] = [];
  categoryselect : string = "all";

  filterPrice(e) {
    this.$emit("priceFilter", e.target.value);
  }

  filterDelivery(e) {
    this.$emit("deliveryFilter", e.target.value);
  }

  filterBrand() {
    this.$emit("brandFilter", this.brandselect);
  }

  filterCategory(){
    console.log("from filter - category: " + this.categoryselect);
    var categories_: Category[] = [];
    var categoryIds: number[] = [];
    // get categories with the given category name

    if(this.categoryselect == "all"){
    }
    else{
      axios
        .get(APIConfig.buildUrl("/itemscategory/" + this.categoryselect))
        .then((response: AxiosResponse) => {
            categories_ = response.data;
            console.log("retrieved categories: " + JSON.stringify(response.data));
            this.$emit("success");
              
            var i;
            for(i = 0; i < categories_.length; i++){
              console.log("pushing category ids: " + categories_[i].categoryId);
              categoryIds.push(categories_[i].categoryId);
            }
            console.log("category Ids: " + categoryIds);
        })
        .catch((res: AxiosError) => {
          console.log("[ViewShopItems.vue] Error@@");
        });
    }
    this.$emit("categoryFilter", categoryIds);
  }

  get retrievedBrands(){
    var brands: iBrand[] = [];
    if(this.existingBrands.length > 0){
      brands = this.existingBrands;
    }
    //console.log("loaded brands" + JSON.stringify(brands));
    return brands;
  }

  created() {
    this.getAllItems();
  }

  getAllItems() {
    axios
      .get(APIConfig.buildUrl("/uniqueitemcategories"))
      .then((response: AxiosResponse) => {
        this.categorynames = response.data;
        //console.log("loaded categories" + JSON.stringify(this.categorynames));
        this.$emit("success");
      })
      .catch((res: AxiosError) => {
        console.log("[ShopPageFilterBox.vue] Error@@");
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.filter-box {
  height: 350px;
  width: 170px;
  background-color: #fefefe;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
}
.filters {
  padding-left: 15px;
  padding-right:15px;
}
.select {
  max-width: 100%;
}
</style>
