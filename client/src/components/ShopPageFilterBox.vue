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
          <option value="bikes">Bikes</option>
          <option value="apparel">Apparel</option>
          <option value="parts">Parts</option>
        </select>
      </div>
      
      <p>Brand</p>
      <div class = "select">
        <select name="brand">
          <option selected="true" value="all">All</option>
          <option value="trek">Trek</option>
          <option value="foxycle">Foxycle</option>
        </select>
      </div>
    
      <p>Price</p>
      <div class = "select"> 
        <select name="price">
          <option selected="true" value="all">All</option>
          <option value="0-25">$0 - $25</option>
          <option value="25-50">$25 - $50</option>
          <option value="50-75">$50 - $75</option>
          <option value="75-100">$75 - $100</option>
          <option value="100+">$100 +</option>
        </select>
      </div>
    

      <p>Store Pickup</p>
      <div class = "select">
        <select name="pickup">
          <option selected="true" value="all">Either</option>
          <option value="trek">Store Pickup</option>
          <option value="foxycle">Ship to Me</option>
        </select>
      </div>
    </div>
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
  position: absolute;
  margin-left: -10%;
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
