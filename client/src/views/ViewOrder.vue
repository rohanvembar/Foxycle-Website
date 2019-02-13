<template>
  <div class= "main-background">
    <div class = "header">Order #12345678 - In Progress</div>
    <div class = "blank"></div>
    <div class="orders">
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
  .blank{
    padding: 50px;
  }
  .orders{
    padding: 10px;
    margin-right: 100px;
    margin-bottom: 20px;
    display: flex;
    align-items: top;
    justify-content: space-evenly;
    height: 600px;
  }
</style>


