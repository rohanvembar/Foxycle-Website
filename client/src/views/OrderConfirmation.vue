<template>
  <div class="main-background confirmation">
    <p class="title">thank you</p>
    <img
      src="https://media1.tenor.com/images/80687e7f6e3b0fb028ebe55180793aaf/tenor.gif?itemid=5306880"
    >
    <p class="orderNum">your order number is: {{ordernumber}}</p>
    <p class="orderNum">your receipt will be emailed to you within 24 hours</p>

    <router-link
      class="button is-info is-rounded is-focused"
      to="/shop"
      exact-active-class="is-active"
    >continue shopping</router-link>
  </div>
</template>

</template>

<script lang="ts">
import axios, { AxiosResponse } from "axios";
import { APIConfig } from "../utils/api.utils";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class OrderConfirmation extends Vue {
  ordernumber: string = "";
  created() {
    this.ordernumber = this.$route.params.ordernumber;
    }
}
</script>

<style lang="scss" scoped>
.confirmation {
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title {
  font-size: 55px;
  text-decoration: none;
  padding-bottom: 10px;
}

.orderNum {
  font-size: 18px;
  margin-bottom: 10px;
}
</style>

