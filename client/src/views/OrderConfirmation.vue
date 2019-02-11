<template>
  <div class="main-background confirmation">
    <p class="title">Thank You</p>
    <p class="orderNum">Your order number is: 12345678</p>
    <p class="orderNum">Your receipt will be mailed to you within 24 hours</p>
    <br>
    <br>
    <br>
    <router-link class="button shopping-button" to="/shop" exact-active-class="is-active">
                  Continue Shopping</router-link>
  </div>
</template>

</template>

<script lang="ts">
import axios, { AxiosResponse } from "axios";
import { APIConfig } from "../utils/api.utils";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class OrderConfirmation extends Vue {
}
</script>

<style lang="scss" scoped>

  .confirmation {
    padding:100px 20px 30px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .title {
    font-size: 55px;
    text-decoration: none;
    padding-bottom: 20px;
  }

   .orderNum {
     font-size: 18px;
     padding-top: 10px;
   }

  .shopping-button {
    margin: 20px;
    background-color: rgb(20, 157, 248);
    color: white;
  }

</style>

