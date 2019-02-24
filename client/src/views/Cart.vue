<template>
  <div class="main-background">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
      integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
      crossorigin="anonymous"
    >
    <div class="container" v-if="itemsInCart">
      <div class="cart-table">
        <table class="table is-hoverable">
          <thead>
            <tr>
              <th>Product</th>
              <th></th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(cartitem, index) in cart" v-bind:key="index">
              <td>
                <img :src="cartitem.item.image" style="height:50px; align-text:center">
              </td>
              <td>{{cartitem.item.name}}</td>
              <td v-if="!cartitem.item.saleprice">${{cartitem.item.price}}</td>
              <td v-if="cartitem.item.saleprice">${{cartitem.item.saleprice}}</td>
              <td>{{cartitem.quantity}}</td>
              <td v-if="!cartitem.item.saleprice">
                ${{cartitem.quantity * cartitem.item.price}}
                <button
                  class="delete right"
                  v-on:click="removeItem(cartitem)"
                ></button>
              </td>
              <td v-if="cartitem.item.saleprice">
                ${{cartitem.quantity * cartitem.item.saleprice}}
                <button
                  class="delete right"
                  v-on:click="removeItem(cartitem)"
                ></button>
              </td>
            </tr>
          </tbody>
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
        </table>
        <router-link
          v-if="itemsInCart"
          class="button is-primary is-rounded checkout-btn is-focused"
          to="/checkout"
          exact-active-class="is-active"
          style="position: absolute; bottom:0;  transition: 0.3s"
        >
          <span>proceed to checkout</span>
        </router-link>
      </div>
    </div>
    <div v-else>
      <div>
        <center>
          <h1>your cart is empty :(</h1>
          <br>
          <img
            src="https://media1.tenor.com/images/077ec9cadfa41dc224276e4026175f4c/tenor.gif?itemid=5510092"
          >
        </center>
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
  itemsInCart: boolean = this.items.length != 0;
  subtotal: number = 0;
  shipping: number = 10;
  total: number = 0;

  computeSubtotal() {
    for (var i in this.items) {
      if (this.items[i].saleprice) {
        this.subtotal += this.items[i].saleprice;
      } else {
        this.subtotal += this.items[i].price;
      }
    }
  }

  computeTotal() {
    this.total = this.subtotal + this.shipping;
  }

  removeItem(item) {
    const cartIndex = this.cart.indexOf(item);
    const itemsIndex = this.items.indexOf(item.item);

    if (cartIndex !== -1) {
      this.cart.splice(cartIndex, 1);
    }
    if (itemsIndex !== -1) {
      this.items.splice(itemsIndex, 1);
    }
    this.subtotal = 0;
    this.computeSubtotal();
    this.computeTotal();
  }
  created() {
    this.computeSubtotal();
    this.computeTotal();
    var flag = true;
    for (var i in this.items) {
      flag = true;
      for (var j in this.cart) {
        if (this.cart[j].item.id === this.items[i].id) {
          this.cart[j] = {
            item: this.cart[j].item,
            quantity: this.cart[j].quantity + 1
          };
          flag = false;
        }
      }
      if (flag) {
        this.cart.push({ item: this.items[i], quantity: 1 });
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
  min-width: 60%;
}

.cart-table {
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
  width: 100%;
  margin-bottom: 100px;
}

th,
td {
  padding: 10px 30px 10px 30px;
  vertical-align: middle;
}

.bot-bord {
  border-top: lightgray 2px solid;
}

.tot-bord {
  font-weight: bold;
  background-color: #00d0b2;
  color: white;
}
.table {
  border-radius: 2px;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.3);
  margin-bottom: 50px;
}

.checkout-btn {
  width: 40%;
}

.right {
  margin-left: 10px;
  float: right;
}
</style>

