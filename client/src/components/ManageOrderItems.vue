<template>
  <div id="table">
    <div class="row1">
      <div class="cell1">Order #</div>
      <div class="cell1">Date</div>
      <div class="cell1">Order Status</div>
    </div>
    <div v-for="(order, index) in refinedOrders" v-bind:key="index" class="row">
      <div class="cell">{{order.orderNumber}}</div>
      <div class="cell">{{order.dateOrdered}}</div>
      <div class="cell_s">
        <select v-model = "order.status" v-on:change="updateStatus($event, order)">
          <option value="1" :selected="order.status === 1 ? 'selected' : ''">Received</option>
          <option value="2" :selected="order.status === 2 ? 'selected' : ''">In Process</option>
          <option value="3" :selected="order.status === 3 ? 'selected' : ''">Shipped</option>
          <option value="4" :selected="order.status === 4 ? 'selected' : ''">Delivered</option>
          <option value="5" :selected="order.status === 5 ? 'selected' : ''">Canceled</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { iOrder } from "../models/order.interface";
import axios, { AxiosResponse, AxiosError } from "axios";
import { APIConfig } from "../utils/api.utils";

@Component
export default class ManageOrderItems extends Vue {
  @Prop() refinelist: String[]
  @Prop() sortVal: String

  error: string | boolean = false;
  orders: iOrder[] = [];

  updateStatus(e, order: iOrder) {
    console.log("[ManageOrderItems.vue] updating to status " + e.target.value);
    axios
      .put(
        APIConfig.buildUrl("/updatestatus/" + order.orderNumber + "/" + e.target.value), order
      )
      .then((response: AxiosResponse) => {
        console.log("[ManageOrderItems.vue] updated order: " + JSON.stringify(response.data));
        this.$emit("success");
      })
      .catch((response: AxiosResponse) => {
        console.log("catch");
        this.error = "bad";
      });
  }

  created() {
    this.getOrders();
  }

  getOrders() {
    this.error = false;
    axios
      .get(APIConfig.buildUrl("/orders"))
      .then((response: AxiosResponse) => {
        this.orders = response.data;
        this.$emit("success");
      })
      .catch((res: AxiosError) => {
        this.error = res.response && res.response.data.error;
        console.log("[EditOrder.vue]" + this.error);
      });
  }

  get refinedOrders(){
    const l = this.refinelist;
    return this.sortedOrders.filter(function(s){
      const stat = (s.status).toString();
      return l.includes(stat);
    })
  }

  get sortedOrders(){
    function compareONum(a, b){
      if(a.orderNumber < b.orderNumber)
        return -1;
      if((a.orderNumber > b.orderNumber))
        return 1;
      return 0;
    }
    function compareDate(a, b){
      if(a.dateOrdered < b.dateOrdered)
        return -1;
      if((a.dateOrdered > b.dateOrdered))
        return 1;
      return 0;
    }

    if(this.sortVal == "1")
      return this.orders.sort(compareDate);
    return this.orders.sort(compareONum);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#table {
  display: table;
  border-top: 2px solid;
  border-bottom: 2px solid;
}
.row {
  display: table-row;
  background: white;
}
.row1 {
  display: table-row;
  background: white;
  font-weight: bold;
}
.cell1 {
  display: table-cell;
  border-top: 2px solid;
  border-bottom: 2px solid;
  text-align: center;
  vertical-align: middle;
  margin-left: 40px;
  padding-left: 80px;
  padding-right: 80px;
  font-size: 40px;
  align-items: center;
  align-content: center;
}
.cell {
  display: table-cell;
  border-top: 2px solid;
  border-bottom: 2px solid;
  text-align: center;
  vertical-align: middle;
  margin-left: 40px;
  padding-left: 80px;
  padding-right: 80px;
  font-size: 20px;
  align-items: center;
  align-content: center;
}
.cell_s {
  display: table-cell;
  border-top: 2px solid;
  border-bottom: 2px solid;
  text-align: center;
  vertical-align: middle;
  margin-left: 40px;
  padding-left: 80px;
  padding-right: 80px;
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 20px;
  align-items: center;
  align-content: center;
}
</style>
