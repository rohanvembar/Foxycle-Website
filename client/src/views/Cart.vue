<template>
  <div class="main-background">
    <div class="container">
      <div class="add-to-cart"><div v-if="!itemsInCart">Add to your cart!</div></div>
      <div class="cart-table">
        <table>
          <tr>
            <th>Product</th>
            <th></th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr v-for="(cartitem, index) in cart" v-bind:key="index">
            <td>
              <img :src="cartitem.item.image">
            </td>
            <td>{{cartitem.item.name}}</td>
            <td>${{cartitem.item.price}}</td>
            <td>{{cartitem.quantity}}</td>
            <td></td>
          </tr>
          <tr class="bot-bord">
            <td>Subtotal</td>
            <td></td>
            <td></td>
            <td></td>
            <td v-if="itemsInCart">${{subtotal}}</td>
            <td v-if="!itemsInCart">-</td>
          </tr>
          <tr>
            <td>Shipping</td>
            <td></td>
            <td></td>
            <td></td>
            <td v-if="itemsInCart">${{shipping}}</td>
            <td v-if="!itemsInCart">-</td>
          </tr>
          <tr class="tot-bord">
            <td>Total</td>
            <td></td>
            <td></td>
            <td></td>
            <td v-if="itemsInCart">${{total}}</td>
            <td v-if="!itemsInCart">-</td>
          </tr>
          <br>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <div class="checkout-btn">
                <router-link v-if="itemsInCart" class="button" to="/checkout" exact-active-class="is-active">Checkout</router-link>
                <div v-if="!itemsInCart" disabled class="button">Checkout</div>
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
import { iCart } from "../models/cart.interface";

@Component
export default class Cart extends Vue {
  error: string | boolean = false;
  items: iShopItem[] = this.$store.state.items;
  cart: iCart[] = [];
  itemsInCart: boolean = (this.items.length != 0);
  subtotal: number = 0;
  shipping: number = 10;
  total: number = 0;

  computeSubtotal() {
    for (var i in this.items) {
      this.subtotal += this.items[i].price;
    }
  }

  computeTotal() {
    this.total = this.subtotal + this.shipping;
  }

  created() {
    this.computeSubtotal();
    this.computeTotal();
    var flag = true;
    for (var i in this.items) {
      flag = true;
      for (var j in this.cart) {
        if (this.cart[j].item.id === this.items[i].id) {
          this.cart[j] = {item: this.cart[j].item, quantity: this.cart[j].quantity + 1}
          flag = false;
        } 
      }
      if (flag) {
        this.cart.push({item: this.items[i], quantity: 1})
      }
    }
  }
}
</script>

<style scoped>
.add-to-cart {
  display: flex;
  justify-content: center;
  align-items: center;
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

