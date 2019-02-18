<template>
  <div class="main-background">
    <div class="container">
      <div class="loadinginfo">
        <div v-if="loadingTrue" class="loader"></div>
        <div v-if="!itemsInCart">Add to your cart!</div>
      </div>
      <div class="cart-table">
        <table>
          <tr>
            <th>Product</th>
            <th></th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr v-for="(item, index) in cart" v-bind:key="index">
            <td>
              <img :src="item.image">
            </td>
            <td>{{item.name}}</td>
            <td>${{item.price}}</td>
            <td>1</td>
            <td></td>
          </tr>
          <tr class="bot-bord">
            <td>Subtotal</td>
            <td></td>
            <td></td>
            <td></td>
            <td v-if="itemsFromDB">${{subtotal}}</td>
            <td v-if="!itemsFromDB">-</td>
          </tr>
          <tr>
            <td>Shipping</td>
            <td></td>
            <td></td>
            <td></td>
            <td v-if="itemsFromDB">${{shipping}}</td>
            <td v-if="!itemsFromDB">-</td>
          </tr>
          <tr class="tot-bord">
            <td>Total</td>
            <td></td>
            <td></td>
            <td></td>
            <td v-if="itemsFromDB">${{total}}</td>
            <td v-if="!itemsFromDB">-</td>
          </tr>
          <br>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <div class="checkout-btn">
                <router-link v-if="itemsFromDB" class="button" to="/checkout" exact-active-class="is-active">Checkout</router-link>
                <div v-if="!itemsFromDB" disabled class="button" exact-active-class="is-active">Checkout</div>
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
  cart: iShopItem[] = [];
  itemsFromDB: boolean = false;
  itemsInCart: boolean = (this.$store.state.itemids.length != 0);
  loadingTrue: boolean = (!this.itemsFromDB && this.itemsInCart);
  subtotal: number = 0;
  shipping: number = 10;
  total: number = 0;

  computeSubtotal() {
    for (var i in this.cart) {
      this.subtotal += this.cart[i].price;
    }
  }

  computeTotal() {
    this.total = this.subtotal + this.shipping;
  }

  created() {
    this.getCart();
  }

  getCart() {
    this.error = false;
    axios
      .get(APIConfig.buildUrl("/cart"), {
        headers: {
          "cartItems": this.$store.state.itemids
        }
      })
      .then((response: AxiosResponse) => {
        this.cart = response.data;
        this.itemsFromDB = true;
        this.loadingTrue = false;
        this.computeSubtotal();
        this.computeTotal();
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
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

.loadinginfo {
  display: flex;
  justify-content: center;
  align-content: center;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
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

