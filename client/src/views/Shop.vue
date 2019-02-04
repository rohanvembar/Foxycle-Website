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
      <ShopPageFilterBox />
      <ViewShopItems />
    </div>
  </div>
</template>

<script lang="ts">
import axios, { AxiosResponse } from "axios";
import { APIConfig } from "../utils/api.utils";
import { Component, Prop, Vue } from "vue-property-decorator";
import ViewShopItems from "@/components/ViewShopItems.vue";
import ShopPageFilterBox from "@/components/ShopPageFilterBox.vue";

@Component({
  components: {
    ViewShopItems,
    ShopPageFilterBox
  }
})
export default class Shop extends Vue {
}
</script>

<style scoped>
  .shop {
    display: flex;
    align-items: top;
    justify-content: space-evenly;
  }

  .sort-by{
    padding-top: 30px;
    padding-bottom: 30px;
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: flex-end;   
  }

</style>

