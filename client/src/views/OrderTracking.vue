<template>
  <div class="main-background track">
    <p class="title">Track Your Order</p>
    <input class="input-bar" placeholder="Order Number" type="text">
    <button class="button submit-button">Track</button>
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

<style lang="scss">

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
    font-size: 25px;
    width: 50%;
    height: 50px;
  }

  .submit-button {
    margin: 20px;
  }

</style>
