<template>
  <div class="main-background">
    <div class="sort-by">
      <select name="Sort By">
        <option selected="true" disabled="disabled" value="sortby">Sort By</option>
        <option value="price">Price</option>
        <option value="name">Name</option>     
      </select>
    </div>
    <div class="shop">
      <div class="filter-box">
        <p class="filter-title">Filters</p>
        <p>Category</p>
        <select name="category">
          <option selected="true" value="all">All</option>
          <option value="bikes">Bikes</option>
          <option value="apparel">Apparel</option>  
          <option value="parts">Parts</option>     
        </select>
        <p>Brand</p>
        <select name="brand">
          <option selected="true" value="all">All</option>
          <option value="trek">Trek</option>
          <option value="foxycle">Foxycle</option>    
        </select>        
        <p>Price</p>
        <select name="price">
          <option selected="true" value="all">All</option>
          <option value="0-25">$0 - $25</option>
          <option value="25-50">$25 - $50</option>  
          <option value="50-75">$50 - $75</option>
          <option value="75-100">$75 - $100</option>  
          <option value="100+">$100 +</option>                           
        </select>       
        <p>Color</p>
        <button class="reddot"></button>
        <button class="bluedot"></button>
        <button class="greendot"></button>
        <button class="orangedot"></button>
        <button class="rainbowdot"></button>
        <p>Store Pickup</p>
        <select name="pickup">
          <option selected="true" value="all">Either</option>
          <option value="trek">Store Pickup</option>
          <option value="foxycle">Ship to Me</option>    
        </select>              
      </div>
      <div class="view-items">
        <ViewShopItems />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios, { AxiosResponse } from "axios";
import { APIConfig } from "../utils/api.utils";
import { Component, Prop, Vue } from "vue-property-decorator";
import ViewShopItems from "@/components/ViewShopItems.vue";

@Component({
  components: {
    ViewShopItems
  }
})
export default class Shop extends Vue {
}
</script>

<style scoped>

  .shop {
    display: flex;
    align-items: top;
    justify-content: center;
  }

  .sort-by{
    padding-top: 30px;
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: flex-end;   
  }

  .filter-box {
    left: 100px;
    height: 350px;
    padding:30px;
    margin-bottom: 40px;
    background-color: white;
  }

  .reddot {
  height: 15px;
  width: 15px;
  background-color: red;
  border-radius: 50%;
  display: inline-block;
  margin: 5px;
}

.bluedot {
  height: 15px;
  width: 15px;
  background-color: blue;
  border-radius: 50%;
  display: inline-block;
  margin: 5px;
}
.greendot {
  height: 15px;
  width: 15px;
  background-color: green;
  border-radius: 50%;
  display: inline-block;
  margin: 5px;
}
.orangedot {
  height: 15px;
  width: 15px;
  background-color: orange;
  border-radius: 50%;
  display: inline-block;
  margin: 5px;
}

.rainbowdot {
  height: 15px;
  width: 15px;
  border-radius: 50%;
  display: inline-block;
  margin: 5px;
  background-image: linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet); 
}

  .view-items {

  }
</style>

