<template>
  <div class="main">
    <div class="columns is-centered">
      <div class="column" v-if="isShippable()">
        <div class="title">Shipping Address</div>
        <div class="space">
          <div class="field inputbox">
            <label>First Name</label>
            <p class="control is-expanded has-icons-left">
              <input v-model="firstName" class="input" type="text" placeholder="first name">
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
            </p>
          </div>
          <div class="field inputbox">
            <label>Last Name</label>
            <p class="control is-expanded has-icons-left">
              <input v-model="lastName" class="input" type="text" placeholder="last name">
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
            </p>
          </div>
          <div class="field inputbox">
            <label>Email</label>
            <p class="control is-expanded has-icons-left">
              <input v-model="email" class="input" type="text" placeholder="email">
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </p>
          </div>
          <div class="field inputbox">
            <label>Street Address</label>
            <p class="control is-expanded has-icons-left">
              <input v-model="address" class="input" type="text" placeholder="street address">
              <span class="icon is-small is-left">
                <i class="fas fa-map-marker-alt"></i>
              </span>
            </p>
          </div>
          <div class="field inputbox">
            <label>City, State</label>
            <p class="control is-expanded">
              <input v-model="city" class="input city" type="text" placeholder="city">
              <span class="select state">
                <select v-model="state" name="state">
                  <option value="AL">AL</option>
                  <option value="AK">AK</option>
                  <option value="AR">AR</option>
                  <option value="AZ">AZ</option>
                  <option value="CA">CA</option>
                  <option value="CO">CO</option>
                  <option value="CT">CT</option>
                  <option value="DC">DC</option>
                  <option value="DE">DE</option>
                  <option value="FL">FL</option>
                  <option value="GA">GA</option>
                  <option value="HI">HI</option>
                  <option value="IA">IA</option>
                  <option value="ID">ID</option>
                  <option value="IL">IL</option>
                  <option value="IN">IN</option>
                  <option value="KS">KS</option>
                  <option value="KY">KY</option>
                  <option value="LA">LA</option>
                  <option value="MA">MA</option>
                  <option value="MD">MD</option>
                  <option value="ME">ME</option>
                  <option value="MI">MI</option>
                  <option value="MN">MN</option>
                  <option value="MO">MO</option>
                  <option value="MS">MS</option>
                  <option value="MT">MT</option>
                  <option value="NC">NC</option>
                  <option value="NE">NE</option>
                  <option value="NH">NH</option>
                  <option value="NJ">NJ</option>
                  <option value="NM">NM</option>
                  <option value="NV">NV</option>
                  <option value="NY">NY</option>
                  <option value="ND">ND</option>
                  <option value="OH">OH</option>
                  <option value="OK">OK</option>
                  <option value="OR">OR</option>
                  <option value="PA">PA</option>
                  <option value="RI">RI</option>
                  <option value="SC">SC</option>
                  <option value="SD">SD</option>
                  <option value="TN">TN</option>
                  <option value="TX">TX</option>
                  <option value="UT">UT</option>
                  <option value="VT">VT</option>
                  <option value="VA">VA</option>
                  <option value="WA">WA</option>
                  <option value="WI">WI</option>
                  <option value="WV">WV</option>
                  <option value="WY">WYYYYY</option>
                </select>
              </span>
            </p>
          </div>
          <div class="field inputbox">
            <label>Zip Code</label>
            <p class="control is-expanded has-icons-left">
              <input v-model="zip" class="input" type="text" placeholder="zip code">
              <span class="icon is-small is-left">
                <i class="fas fa-globe"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div class="column" v-else>
        <div class="title">Pickup Info</div>Your order is only available for free store pickup:
        <div class="pickupText">
          <i class="fas fa-map-marker-alt fa-fw"></i>
          1 Grand Avenue, San Luis Obispo, CA 93407
        </div>
        <div class="pickupText">
          <i class="fas fa-clock fa-fw"></i>
          Your order will be ready within 2 business days
        </div>
        <div class="field inputbox">
          <label>First Name</label>
          <p class="control is-expanded has-icons-left">
            <input v-model="firstName" class="input" type="text" placeholder="first name">
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </p>
        </div>
        <div class="field inputbox">
          <label>Last Name</label>
          <p class="control is-expanded has-icons-left">
            <input v-model="lastName" class="input" type="text" placeholder="last name">
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </p>
        </div>
        <div class="field inputbox">
          <label>Email</label>
          <p class="control is-expanded has-icons-left">
            <input v-model="email" class="input" type="text" placeholder="email">
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </p>
        </div>
      </div>

      <div class="column">
        <div class="title">Billing Info</div>

        <div class="card-wrapper">
          <card v-model="cardDetail"></card>
        </div>
        <div class="centercard">
          <input
            class="input inputbox"
            name="number"
            placeholder="Card number"
            type="tel"
            v-model="cardDetail.number"
            v-card-focus
          >
          <input
            class="input inputbox"
            name="name"
            placeholder="Full name"
            type="text"
            v-model="cardDetail.name"
            v-card-focus
          >
          <p class="control is-expanded centercard">
            <input
              class="input inputbox city"
              name="expiry"
              placeholder="MM/YY"
              type="tel"
              v-model="cardDetail.expiry"
              v-card-focus
            >
            <input
              class="input inputbox state"
              name="cvc"
              placeholder="CVC"
              type="number"
              v-model="cardDetail.cvc"
              v-card-focus
            >
          </p>
        </div>
      </div>
      <div class="column">
        <div class="center">
          <div>
            <div class="title">Order Summary</div>
            <table class="center table is-hoverable">
              <thead>
                <tr>
                  <th>Product</th>
                  <th></th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(cartitem, index) in cart" v-bind:key="index">
                  <td>
                    <img :src="cartitem.item.image" width="100px">
                  </td>
                  <td class="iName">{{cartitem.item.name}}</td>
                  <td class="iName">{{cartitem.quantity}}</td>
                  <td>${{cartitem.item.price}}</td>
                </tr>
              </tbody>
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
            </table>
            <div class="checkout-btn">
              <div
                v-if="isFilled"
                class="button is-primary is-rounded is-focused"
                style="width:100%"
                v-on:click="loading(), placeOrder()"
              >
                <i class="fas fa-check iconpadding"></i>place order
              </div>
              <div
                v-if="!isFilled"
                class="button is-rounded is-focused"
                disabled
                style="width:100%"
              >
                <i class="fas fa-check iconpadding"></i>place order
              </div>

              <div id="pageloader" class="pageloader is-info">
                <span class="title">just a sec, your order is being submitted</span>
              </div>
            </div>
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
import card from "vue-credit-card";

let defaultProps = {
  number: "5555555555554444",
  name: "",
  expiry: "",
  cvc: ""
};

@Component({
  components: {
    card
  }
})
export default class Checkout extends Vue {
  items: iShopItem[] = this.$store.state.items;
  cart: iCart[] = [];
  subtotal: number = 0;
  shipping: number = 10;
  total: number = 0;
  ordernumber: string = "";
  address: string = "";
  city: string = "";
  state: string = "";
  zip: string = "";
  email: string = "";
  firstName: string = "";
  lastName: string = "";

  name: "Card";
  components: {
    card;
  };
  data() {
    return {
      cardDetail: defaultProps
    };
  }
  computeSubtotal() {
    for (var i in this.items) {
      if (this.items[i].saleprice) {
        this.subtotal += this.items[i].saleprice;
      } else {
        this.subtotal += this.items[i].price;
      }
    }
  }

  isShippable() {
    for (var i in this.items) {
      console.log(this.items[i].delivery);
      if (!this.items[i].delivery) {
        return false;
      }
    }
    return true;
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

  get isFilled(): boolean {
    if (this.isShippable()) {
      if (
        this.address &&
        this.city &&
        this.state &&
        this.zip &&
        this.email &&
        this.firstName &&
        this.lastName
      ) {
        return true;
      }
      return false;
    } else {
      if (this.firstName && this.lastName && this.email) {
        return true;
      }
      return false;
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
    var prettyDate =
      (mm > 9 ? "" : "0") +
      mm +
      "." +
      (dd > 9 ? "" : "0") +
      dd +
      "." +
      date.getFullYear();
    console.log("[Checkout.vue] date ordered: " + prettyDate);
    return prettyDate;
  }

  placeOrder() {
    if (this.isShippable()){
      var where = this.address + ", " + this.city + ", " + this.state + " " + this.zip;
    }
    else {
      var where = "Store Pickup"
    }
    this.ordernumber = this.generate();
    var orderdate = this.parseDate();
    axios
      .post(APIConfig.buildUrl("/neworder"), {
        orderNumber: this.ordernumber,
        status: 1,
        date: orderdate,
        name: this.firstName + " " + this.lastName,
        email: this.email,
        address: where
          
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
  padding-top: 30px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 70px;

  width: 80%;
}
.centercard {
  text-align: center;
}
.center {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.iconpadding {
  padding-right: 5px;
}

.sameAsShipping {
  font-size: 10px;
}
.pickupText {
  font-size: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
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
  padding-bottom: 10px;
}

.title {
  font-size: 25px;
  padding-bottom: 15px;
  border-bottom: 1px solid #239cec;
  text-align: center;
}
.bot-bord {
  border-top: black 2px solid;
}

.tot-bord {
  border-top: grey 1px solid;
  font-weight: bold;
}

.iName {
  padding-right: 35px;
}

.inputbox {
  width: 300px;
}

.city {
  display: inline-block;
  width: 200px;
}
.state {
  display: inline-block;
  width: 100px;
}

.right {
  padding-left: 175px;
}

.card-wrapper {
  padding-bottom: 50px;
  padding-top: 25px;
}

.table {
  border-radius: 5px;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.3);
  margin-bottom: 50px;

}
</style>

