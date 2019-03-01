<template>
  <div class="main-background">
    <div class="sort-by select">
      <select name="Sort By" v-on:change="updateSort($event)">
        <option selected="true" disabled="disabled" value="sortby">Sort By</option>
        <option value="0">Price</option>
        <option value="1">Name</option>     
      </select>
    </div>
    <div class="shop">
      <ViewShopItems :sortVal= "sortVal"/>
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
    ViewShopItems,
  }
})
export default class Shop extends Vue {
  sortVal: String = "1";

  updateSort(e){
    console.log("Shop.vue: updating sort value: " + (e.target.value))
    this.sortVal = e.target.value;
  }
}
</script>

<style scoped>
  .shop {
    padding-left:40px;
    display: flex;
    justify-content: space-evenly;
    width: 90%;
    margin-left:auto;
    margin-right:auto;
  }

  .sort-by{
    padding-top: 30px;
    padding-bottom: 30px;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: flex-end;   
  }

</style>

