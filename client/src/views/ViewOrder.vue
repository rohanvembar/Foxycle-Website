<template>
  <div>
    <div v-if="orderError">This order number does not have an order :(</div>
    <div v-else>
      <div v-if="orderloaded">
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
          integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
          crossorigin="anonymous"
        >
        <center>
          <h3>Order#: {{order.orderNumber}}</h3>
        </center>
        <div>
          <step-progress
            :steps="['Received', 'Processed','Shipped', 'Delivered']"
            :current-step="order.status"
            icon-class="fas fa-check"
          ></step-progress>
        </div>
        <br>
        <br>
        <div class="orders">
          <ViewOrderItems/>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import axios, { AxiosResponse, AxiosError } from "axios";
import { APIConfig } from "../utils/api.utils";
import { Component, Prop, Vue } from "vue-property-decorator";
import OrdersRefineBox from "@/components/OrdersRefineBox.vue";
import ViewOrderItems from "@/components/ViewOrderItems.vue";
import StepProgress from "vue-step-progress";
import { iOrder } from "../models/order.interface";

import "../assets/step.css";

@Component({
  components: {
    ViewOrderItems,
    "step-progress": StepProgress
  }
})
export default class ViewOrder extends Vue {
  order!: iOrder;
  error: string | boolean = false;
  orderloaded: boolean = false;
  orderError: boolean = false;

  created() {
    if (isNaN(Number(this.$route.params.ordernumber))) {
      this.orderError = true;
      return;
    }
    this.getOrder();
  }
  getOrder() {
    this.error = false;
    console.log(
      "[ViewOrder.vue] ordernumber: " + this.$route.params.ordernumber
    );
    axios
      .get(APIConfig.buildUrl("/order/" + this.$route.params.ordernumber))
      .then((response: AxiosResponse) => {
        this.order = response.data;
        this.orderloaded = true;
        console.log("[ViewOrder.vue] order: " + JSON.stringify(this.order));
        this.$emit("success");
      })
      .catch((res: AxiosError) => {
        this.error = res.response && res.response.data.error;
        this.orderError = true;
      });
  }
}
</script>

<style scoped>
.header {
  align-items: left;
  padding-top: 30px;
  padding-left: 10px;
  margin-left: 200px;
  font-size: 50px;
  font-weight: bold;
}
.blank {
  padding: 50px;
}
.orders {
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


