<template>
  <div class="filter-box">
    <article class="message is-info">
      <div class="message-header">Filters</div>
    </article>

    <div class="filters">
      <p>Category</p>
      <div class = "select">
        <select name="category">
          <option selected="true" value="all">All</option>
          <option v-for="category in retrievedCategories" v-bind:key="category.id" :value="category.category">{{category.category}}</option>
         
        </select>
      </div>
      
      <p>Brand</p>
      <div class = "select">
        <select name="brand" v-model="brandselect" v-on:change = "filterBrand">
          <option value="all">All</option>
          <option v-for="brand in retrievedBrands" v-bind:key="brand.id" :value="brand.id"> {{brand.name}} </option>
        </select>
      </div>
    
      <p>Price</p>
      <div class = "select"> 
        <select name="price" v-on:change ="filterPrice($event)">
          <option selected="true" value="all">All</option>
          <option value="0-25">$0 - $25</option>
          <option value="25-50">$25 - $50</option>
          <option value="50-75">$50 - $75</option>
          <option value="75-100">$75 - $100</option>
          <option value="100">$100 +</option>
        </select>
      </div>
    

      <p>Store Pickup</p>
      <div class = "select">
        <select name="pickup" v-on:change ="filterDelivery($event)">
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
  @Prop() categories : Category[] = [];
  error: string | boolean = false;
  brandselect: string = "all";
  items: iShopItem[] = [];


  filterPrice(e){
    this.$emit('priceFilter', e.target.value);
  }

  filterDelivery(e){
    this.$emit('deliveryFilter', e.target.value);
  }

  filterBrand(){
    console.log(this.brandselect);
    this.$emit('brandFilter', this.brandselect);
  }

  get retrievedBrands(){
    var brands: iBrand[] = [];
    if(this.existingBrands.length > 0){
      brands = this.existingBrands;
    }
    console.log("loaded brands" + JSON.stringify(brands));
    return brands;
  }

  get retrievedCategories(){
    var categories: Category[] = [];
    categories = this.categories;
    console.log("loaded categories" + JSON.stringify(categories));
    
    return categories;
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
}
</style>
