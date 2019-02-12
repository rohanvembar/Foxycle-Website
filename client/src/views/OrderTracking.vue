<template>
  <div class="main-background track">
    <h1>Track Your Order</h1>
    <input class="input-bar" placeholder="Order Number" type="text">
    <router-link to="/vieworder" exact-active-class="is-active">
        <button class="button submit-button is-info">Track</button>
    </router-link>

  </div>
</template>

<script lang="ts">
import axios, { AxiosResponse } from "axios";
import { APIConfig } from "../utils/api.utils";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class OrderTracking extends Vue {
}
</script>

<style lang="scss" scoped>

  .track {
    padding:100px 20px 30px 20px;
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
    padding:5px;
    font-size: 15px;
    width: 20%;
    height: 50px;
  }

  .submit-button {
    margin: 20px;
  }

</style>
