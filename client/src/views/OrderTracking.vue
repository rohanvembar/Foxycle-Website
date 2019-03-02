<template>
  <div class="main-background track">
    <div class="box">
    <h1>Track Your Order</h1>
    <b-field grouped>
      <b-input placeholder="Order Number" type="number" v-model="ordernum" @keyup.enter.native="success(ordernum)" rounded></b-input>
      <p class="control">
          <button v-on:click="success(ordernum)" class="button is-info is-rounded">Search</button>
      </p>
    </b-field>
    </div>
  </div>
</template>

<script lang="ts">
import axios, { AxiosResponse } from "axios";
import { APIConfig } from "../utils/api.utils";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class OrderTracking extends Vue {
  ordernum: string = "";

  success(orderNum) {
    this.$router.push({ name: 'vieworder', params: { ordernumber: orderNum } })
  }
}
</script>

<style lang="scss" scoped>
.track {
  padding: 100px 20px 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title {
  font-size: 50px;
  text-decoration: none;
}

.input-bar {
  padding: 5px;
  font-size: 15px;
  width: 15%;
  height: 40px;
}

.submit-button {
  margin: 20px;
}
.box {
  text-align: center;
}
</style>
