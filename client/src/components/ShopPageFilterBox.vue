<template>
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
        
        <p>Store Pickup</p>
        <select name="pickup">
          <option selected="true" value="all">Either</option>
          <option value="trek">Store Pickup</option>
          <option value="foxycle">Ship to Me</option>    
        </select>              
      </div>
 
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ShopPageFilterBox extends Vue {
  //@Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
  background-image: linear-gradient(to top, red,orange,yellow,green,blue,indigo,violet); 
}
</style>
