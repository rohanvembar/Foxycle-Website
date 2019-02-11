<template>
  <div class="main-background">
    <div class = "header">Manage Orders</div>
    <div class="sort-by">
      <select name="Sort By">
        <option selected="true" disabled="disabled" value="sortby">Sort By</option>
        <option value="orderNumber">Order Number</option>
        <option value="date">Date</option>     
      </select>
    </div>
    <div class="orders">
      <OrdersRefineBox />
      <ViewOrderItems />
    </div>
  </div>
</template>


<script lang="ts">
import axios, { AxiosResponse } from "axios";
import { APIConfig } from "../utils/api.utils";
import { Component, Prop, Vue } from "vue-property-decorator";
import OrdersRefineBox from "@/components/OrdersRefineBox.vue";
import ViewOrderItems from "@/components/ViewOrderItems.vue";

@Component({
  components: {
    ViewOrderItems,
    OrdersRefineBox
  }
})
export default class ViewOrder extends Vue {
}
</script>

<style lang="scss" scoped>
  .header{
    align-items: left;
    padding-top: 30px;
    padding-left: 10px;
    margin-left: 200px;
    font-size: 50px;
    font-weight: bold;
  }
  .sort-by{
    padding-top: 30px;
    padding-bottom: 30px;
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: flex-end;   
  }
  .orders{
    padding: 10px;
    margin-right: 100px;
    margin-bottom: 20px;
    display: flex;
    align-items: top;
    justify-content: space-evenly;
  }

</style>
