<template>
  <div class="center">
    <div class="sort-by select">
      <select name="Sort By" v-on:change="updateSort($event)">
        <option selected="true" disabled="disabled" value="sortby">Sort By</option>
        <option value="0">Price</option>
        <option value="1">Name</option>
      </select>
    </div>
    <ViewShopItems :sortVal="sortVal"/>
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
  sortVal: String = "1";

  updateSort(e) {
    console.log("Shop.vue: updating sort value: " + e.target.value);
    this.sortVal = e.target.value;
  }
}
</script>

<style scoped>

.sort-by {
  padding-top: 30px;
  padding-bottom: 30px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>

