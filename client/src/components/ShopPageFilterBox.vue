<template>
  <div class="filter-box">
    <article class="message is-info">
      <div class="message-header">Filters</div>
    </article>

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
  width: 150px;
  background-color: #fefefe;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
}
</style>
