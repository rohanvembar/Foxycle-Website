<template>
  <table class="table is-hoverable">
    <thead>
      <th>Order #</th>
      <th>Date</th>
      <th>Name</th>
      <th>Email</th>
      <th>Mailing Address</th>
      <th>Order Status</th>
    </thead>
    <tbody>
      <tr v-for="(order, index) in refinedOrders" v-bind:key="index" class="row">
        <td v-on:click="viewOrder(order.orderNumber)">{{order.orderNumber}}</td>
        <td v-on:click="viewOrder(order.orderNumber)">{{order.dateOrdered}}</td>
        <td v-on:click="viewOrder(order.orderNumber)">{{order.name}}</td>
        <td v-on:click="viewOrder(order.orderNumber)">{{order.email}}</td>
        <td v-on:click="viewOrder(order.orderNumber)">{{order.mailingAddress}}</td>
        <td>
          <div v-if="order.status != 5 | isOwner" class="select" v-bind:class="{ 'is-primary': order.status == 4, 'is-danger': order.status == 5, 'is-link': order.status < 4}">
            <select
              v-model="order.status"
              v-on:change="updateStatus($event, order)"
              class="is-focused"
            >
              <option value="1" :selected="order.status === 1 ? 'selected' : ''">Received</option>
              <option value="2" :selected="order.status === 2 ? 'selected' : ''">In Progress</option>
              <option value="3" :selected="order.status === 3 ? 'selected' : ''">Shipped</option>
              <option value="4" :selected="order.status === 4 ? 'selected' : ''">Delivered</option>
              <option
                v-if="isOwner"
                value="5"
                :selected="order.status === 5 ? 'selected' : ''"
              >Canceled</option>
            </select>
          </div>
          <div v-else class="select">
            <select disabled>
              <option :selected="order.status === 5 ? 'selected' : ''">Canceled</option>
              <option value="2" :selected="order.status === 2 ? 'selected' : ''">In Progress</option>
            </select>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { iOrder } from "../models/order.interface";
import axios, { AxiosResponse, AxiosError } from "axios";
import { APIConfig } from "../utils/api.utils";

@Component
export default class ManageOrderItems extends Vue {
  @Prop() refinelist: String[];
  @Prop() sortVal: String;

  error: string | boolean = false;
  orders: iOrder[] = [];
  role: number = 0;

  get isOwner(): boolean {
    this.role = this.$store.state.userRole.userRole;
    return this.role == 1;
  }
  viewOrder(orderNum) {
    this.$router.push({ name: 'vieworder', params: { ordernumber: orderNum}});
  }

  updateStatus(e, order: iOrder) {
    console.log("[ManageOrderItems.vue] updating to status " + e.target.value);
    axios
      .put(
        APIConfig.buildUrl(
          "/updatestatus/" + order.orderNumber + "/" + e.target.value
        ),
        order
      )
      .then((response: AxiosResponse) => {
        console.log(
          "[ManageOrderItems.vue] updated order: " +
            JSON.stringify(response.data)
        );
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

  deleteOrder(order: iOrder) {
    this.error = false;
    axios
      .delete(APIConfig.buildUrl("/order/" + order.orderNumber))
      .then((response: AxiosResponse) => {
        const deletedOrder = response.data;
        this.orders = this.orders.filter(order => {
          return order.orderNumber != deletedOrder.orderNumber;
        });
        this.$emit("success");
      })
      .catch((response: AxiosResponse) => {
        this.error = "bad";
      });
  }

  get refinedOrders() {
    const l = this.refinelist;
    return this.sortedOrders.filter(function(s) {
      const stat = s.status.toString();
      return l.includes(stat);
    });
  }

  get sortedOrders() {
    function compareONum(a, b) {
      if (a.orderNumber < b.orderNumber) return -1;
      if (a.orderNumber > b.orderNumber) return 1;
      return 0;
    }
    function compareDate(a, b) {
      if (a.dateOrdered > b.dateOrdered) return -1;
      if (a.dateOrdered < b.dateOrdered) return 1;
      return 0;
    }

    if (this.sortVal == "1") return this.orders.sort(compareDate);
    return this.orders.sort(compareONum);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.table {
  border-radius: 5px;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.3);
  min-width: 1000px;
  margin-bottom: 50px;
}

td,
th, tr {
  vertical-align: middle;
  cursor: pointer;
}

.tablegreen {
  background-color: hsl(171, 100%, 41%);
  color: white;
}
.tablered {
  background-color: hsl(348, 100%, 61%);
  color: white;
}
</style>
