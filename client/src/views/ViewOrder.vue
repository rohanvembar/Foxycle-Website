<template>
  <div>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
    <center><h3>Order#: 1000</h3></center>
    <div>
      <step-progress :steps="['Received', 'Processed','Shipped', 'Delivered']" :current-step=2 icon-class="fas fa-check"></step-progress>
    </div>
    <br>
    <br>
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
import StepProgress from 'vue-step-progress';

import '../assets/step.css';


@Component({
  components: {
    ViewOrderItems,
    'step-progress': StepProgress
  }
})
export default class ViewOrder extends Vue {


}
</script>

<style scoped>

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

    .container {
      width: 600px;
      margin: 100px auto; 
  }


</style>


