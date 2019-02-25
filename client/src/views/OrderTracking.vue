<template>
  <div class="main-background track">
    <h1>Track Your Order</h1>
    <b-field grouped>
      <b-input placeholder="Order Number" type="number" v-model="ordernum" rounded></b-input>
      <p class="control">
        <router-link
          :to="{ name: 'vieworder', params: { ordernumber: Number(ordernum) } }"
          exact-active-class="is-active"
        >
          <button class="button is-info is-rounded">Search</button>
        </router-link>
      </p>
    </b-field>
  </div>
</template>

<script lang="ts">
import axios, { AxiosResponse } from "axios";
import { APIConfig } from "../utils/api.utils";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class OrderTracking extends Vue {
  ordernum: string = "";

  verifyNumber() {}
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
</style>
