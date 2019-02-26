<template>
  <div>
    <div class="ordererror" v-if="orderError">That order number does not have an order :(</div>
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
            v-if="order.status < 5"
            :steps="['Received', 'Processed','Shipped', 'Delivered']"
            :current-step="order.status"
            icon-class="fas fa-check"
          ></step-progress>
          <div v-else class="canceled">Your order has been canceled</div>
        </div>
        <br>
        <br>

        <div class="items">
          <table class="table">
            <thead>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
            </thead>
            <tbody></tbody>
            <tr v-for="(item, index) in purchaseditems" v-bind:key="index" class="row">
              <td>
                <img width="150px" :src="items[index].image">
                <br>
                {{items[index].name}}
              </td>
              <td>${{item.subtotal}}</td>
              <td>{{item.quantity}}</td>
            </tr>
          </table>
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
import { iPurchasedItem } from "../models/purchaseditem.interface";

import "../assets/step.css";
import { iShopItem } from "@/models/shopitem.interface";

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
  purchaseditems: iPurchasedItem[] = [];
  items: iShopItem[] = [];

  created() {
    if (isNaN(Number(this.$route.params.ordernumber))) {
      this.orderError = true;
      return;
    }
    this.getOrder();
  }

  getItems() {
    for (var it in this.purchaseditems) {
      this.error = false;
      console.log(this.purchaseditems[it].itemId);
      axios
        .get(APIConfig.buildUrl("/shopitem/" + this.purchaseditems[it].itemId))
        .then((response: AxiosResponse) => {
          this.items.push(response.data);
          this.$emit("success");
        })
        .catch((res: AxiosError) => {
          this.error = res.response && res.response.data.error;
          console.log("[ItemPage.vue]" + this.error);
        });
    }
  }

  getPurchasedItems() {
    this.error = false;
    axios
      .get(APIConfig.buildUrl("/purchaseditems"))
      .then((response: AxiosResponse) => {
        var allitems = response.data;
        this.purchaseditems = allitems.filter(
          item => item.orderNumber == this.order.orderNumber
        );
        console.log(
          "[ViewOrder.vue] purchaseditems: " +
            JSON.stringify(this.purchaseditems)
        );
        this.getItems();
        console.log("[ItemPage.vue] items: " + this.items);
        this.purchaseditems.sort((a, b) => a.itemId - b.itemId);
        this.items.sort((a, b) => a.id - b.id);
        this.$emit("success");
      })
      .catch((res: AxiosError) => {
        this.error = res.response && res.response.data.error;
        console.log("[ViewOrder.vue] catch ");
      });
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
        this.getPurchasedItems();
        this.$emit("success");
      })
      .catch((res: AxiosError) => {
        this.error = res.response && res.response.data.error;
        console.log("[ViewOrder.vue] catch ");
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
.table {
  border-radius: 8px;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.3);
  margin-bottom: 50px;
  margin: auto;
  text-align: center;
  min-width: 40%;
}

.items {
  margin-bottom: 60px;
}

tr,
th,
td {
  vertical-align: middle;
}
</style>


