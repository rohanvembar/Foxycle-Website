<template>
  <div class="main-background">
    <div class="container">
      <div class="cart-table">
        <table>
          <tr>
            <th>Product</th>
            <th></th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>
              <img src="../assets/transparentlogo.png">
            </td>
            <td>Foxycle Extreme Pro 5000</td>
            <td>$3999.99</td>
            <td>1</td>
            <td>$3999.99</td>
          </tr>
          <tr>
            <td>
              <img src="../assets/transparentlogo.png">
            </td>
            <td>Foxycle Extreme Pro 1000</td>
            <td>$5999.99</td>
            <td>1</td>
            <td>$5999.99</td>
          </tr>
          <tr>
            <td>
              <img src="../assets/transparentlogo.png">
            </td>
            <td>Foxycle Extreme Pro 6000</td>
            <td>$7999.99</td>
            <td>1</td>
            <td>$7999.99</td>
          </tr>
          <tr class="bot-bord">
            <td>Subtotal</td>
            <td></td>
            <td></td>
            <td></td>
            <td>$17999.97</td>
          </tr>
          <tr>
            <td>Shipping</td>
            <td></td>
            <td></td>
            <td></td>
            <td>$300</td>
          </tr>
          <tr class="tot-bord">
            <td>Total</td>
            <td></td>
            <td></td>
            <td></td>
            <td>$18,299.97</td>
          </tr>
          <br>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <div class="checkout-btn">
                <router-link class="button" to="/checkout" exact-active-class="is-active">Checkout</router-link>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios, { AxiosResponse, AxiosError } from "axios";
import { APIConfig } from "../utils/api.utils";
import { Component, Prop, Vue } from "vue-property-decorator";
import { iShopItem } from "../models/shopitem.interface";

@Component
export default class Cart extends Vue {
  error: string | boolean = false;
  cart!: iShopItem[];

  created() {
    this.getCart();
  }

  getCart() {
    this.error = false;
    console.log("itemid: " + this.$route.params.itemid);
    axios
      .get(APIConfig.buildUrl("/cart"), {
        headers: {
          "cartItems": this.$store.state.itemids
        }
      })
      .then((response: AxiosResponse) => {
        this.cart = response.data;
        console.log(response.data);
        this.$emit("success");
      })
      .catch((res: AxiosError) => {
        this.error = res.response && res.response.data.error;
        console.log(this.error);
      });
  }
}
</script>

<style scoped>
.container {
  width: 75%;
  background-color: white;
  padding: 30px 300px 30px 300px;
  margin-top: 50px;
}

.cart-table {
  display: flex;
  align-items: center;
  justify-content: center;
}

th,
td {
  padding: 10px 30px 10px 30px;
}

th {
  border-bottom: black 2px solid;
}

.bot-bord {
  border-top: black 2px solid;
}

.tot-bord {
  border-top: grey 1px solid;
}

.checkout-btn {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>

