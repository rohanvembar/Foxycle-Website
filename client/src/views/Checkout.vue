<template>
  <div class="main">
    <div class="columns is-centered">
      <div class="column">
        <label class="label">shipping address</label>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input class="input" type="text" placeholder="first name">
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
            </div>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input class="input" type="text" placeholder="last name">
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input class="input" type="text" placeholder="address">
                <span class="icon is-small is-left">
                  <i class="fas fa-globe"></i>
                </span>
              </p>
            </div>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input class="input" type="text" placeholder="city">
                <span class="icon is-small is-left">
                  <i class="fas fa-globe"></i>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input class="input" type="text" placeholder="state">
                <span class="icon is-small is-left">
                  <i class="fas fa-globe"></i>
                </span>
              </p>
            </div>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input class="input" type="text" placeholder="zip code">
                <span class="icon is-small is-left">
                  <i class="fas fa-globe"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <label class="label">billing address</label>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input id="ship-first-name" class="input" type="text" placeholder="first name">
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
            </div>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input id="ship-last-name" class="input" type="text" placeholder="last name">
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input class="input" type="text" placeholder="address">
                <span class="icon is-small is-left">
                  <i class="fas fa-globe"></i>
                </span>
              </p>
            </div>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input class="input" type="text" placeholder="city">
                <span class="icon is-small is-left">
                  <i class="fas fa-globe"></i>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input class="input" type="text" placeholder="state">
                <span class="icon is-small is-left">
                  <i class="fas fa-globe"></i>
                </span>
              </p>
            </div>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input class="input" type="text" placeholder="zip code">
                <span class="icon is-small is-left">
                  <i class="fas fa-globe"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="center">
          <div>
            <table class="center">
              <h3>Order Summary</h3>
              <tr>
                <th>Product</th>
                <th></th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
              <tr v-for="(cartitem, index) in cart" v-bind:key="index">
                <td>
                  <img :src="cartitem.item.image">
                </td>
                <td class="iName">{{cartitem.item.name}}</td>
                <td class="iName">{{cartitem.quantity}}</td>
                <td>${{cartitem.item.price}}</td>
              </tr>
              <tr class="bot-bord">
                <td>Subtotal</td>
                <td></td>
                <td></td>
                <td>${{subtotal}}</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td></td>
                <td></td>
                <td>${{shipping}}</td>
              </tr>
              <tr class="tot-bord">
                <td>Total</td>
                <td></td>
                <td></td>
                <td>${{total}}</td>
              </tr>
              <br>
              <tr>
                <td></td>
                <td></td>
                <td>
                  <div class="checkout-btn">
                    <div class="button is-success" v-on:click="loading(), placeOrder()">
                      <i class="fas fa-check iconpadding"></i>place order
                    </div>

                    <div id="pageloader" class="pageloader is-info">
                      <span class="title">just a sec, your order is being submitted</span>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
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
export default class Checkout extends Vue {
  items: iShopItem[] = this.$store.state.items;
  cart: iCart[] = [];
  subtotal: number = 0;
  shipping: number = 10;
  total: number = 0;
  ordernumber: string = "";

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

  loading() {
    const ele = document.getElementById("pageloader");
    if (ele) {
      ele.classList.toggle("is-active");
      setTimeout(function() {
        ele.classList.toggle("is-active");
      }, 3000);

      setTimeout(
        () =>
          this.$router.push({
            name: "orderconfirmation",
            params: { ordernumber: this.ordernumber }
          }),
        3500
      );
    }
  }

  generate() {
    var len;
    var timestamp;
    len = 8;
    timestamp = +new Date();
    var ts = timestamp.toString();
    var parts = ts.split("").reverse();
    var id = "";

    for (var i = 0; i < len; ++i) {
      var index = Math.floor(Math.random() * (parts.length - 1 - 0 + 1)) + 0;
      id += parts[index];
    }

    return id;
  }

  parseDate() {
    var date = new Date();
    var mm = date.getMonth() + 1;
    var dd = date.getDate();
    var prettyDate = (mm > 9 ? "" : "0") + mm + "." + (dd > 9 ? "" : "0") + dd + "." + date.getFullYear();
    console.log("[Checkout.vue] date ordered: " + prettyDate)
    return prettyDate;
  }

  placeOrder() {
    this.ordernumber = this.generate();
    var orderdate = this.parseDate()
    axios
      .post(APIConfig.buildUrl("/neworder"), {
        orderNumber: this.ordernumber,
        status: 1,
        date: orderdate,
        address: ""
      })
      .then((response: AxiosResponse) => {
        console.log("[Checkout.vue]" + response.data);
      })
      .catch((response: AxiosError) => {
        console.log("[Checkout.vue]" + "catch");
      });
    this.$store.state.items = [];
  }
}
</script>

<style lang="scss" scoped>
.main {
  padding-top: 15px;
  margin-left: auto;
  margin-right: auto;

  width: 90%;
}

.center {
  margin-left: auto;
  margin-right: auto;
}

.iconpadding {
  padding-right: 5px;
}

.sameAsShipping {
  font-size: 10px;
}

.sameAsButton {
  background-color: rgb(20, 157, 248);
  border: none;
  color: white;
  padding: 5px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 9px;
}

.pickUpButton {
  background-color: rgb(20, 157, 248);
  border: none;
  color: white;
  padding: 5px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 9px;
}

.placeOrderButton {
  background-color: rgb(20, 157, 248);
  color: white;
  padding: 10px 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
}

.pickUp {
  background-color: rgb(20, 157, 248);
  border: none;
  color: white;
  padding: 5px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 9px;
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

.iName {
  padding-right: 35px;
}
</style>

