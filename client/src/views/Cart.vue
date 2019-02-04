<template>
  <div class="main-background cart">
    <div class="cart-table">
      <table>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
        <tr>
          <td> <img src="../assets/transparentlogo.png"></td>
          <td>bike</td>
          <td>bike</td>
          <td>bike</td>
        </tr>
        <tr>
          <td> <img src="../assets/transparentlogo.png"></td>
          <td>bike</td>
          <td>bike</td>
          <td>bike</td>          
        </tr>
        <tr>
          <td> <img src="../assets/transparentlogo.png"></td>
          <td>bike</td>
          <td>bike</td>
          <td>bike</td>          
        </tr>      
        <tr>
          <td>Subtotal</td>
          <td></td>
          <td></td>
          <td>$50000</td>          
        </tr>    
        <tr>
          <td>Shipping</td>
          <td></td>
          <td></td>
          <td>$100</td>          
        </tr> 
        <tr>
          <td>Total</td>
          <td></td>
          <td></td>
          <td>$50100</td>          
        </tr>                         
      </table>
    </div>
    <div class="checkout-btn">
      <router-link class="button" to="/checkout" exact-active-class="is-active">
        Checkout
      </router-link></div>
  </div>
</template>

<script lang="ts">
import axios, { AxiosResponse } from "axios";
import { APIConfig } from "../utils/api.utils";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Cart extends Vue {
}
</script>

<style scoped>

.cart {
  padding: 30px 300px 30px 300px;
}
.cart-table {
  display: flex;
  align-items: center;
  justify-content: center;     
}

th, td{
  padding: 10px 30px 10px 30px;
}

.checkout-btn {
  display: flex;
  align-items: center;
  justify-content: flex-end;     
}
</style>

