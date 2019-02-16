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
                <th>Total</th>
              </tr>
              <tr>
                <td>
                  <img src="../assets/transparentlogo.png">
                </td>
                <td class="iName">Foxycle Extreme Pro 5000</td>
                <td>$3999.99</td>
              </tr>
              <tr>
                <td>
                  <img src="../assets/transparentlogo.png">
                </td>
                <td class="iName">Foxycle Extreme Pro 1000</td>
                <td>$5999.99</td>
              </tr>
              <tr>
                <td>
                  <img src="../assets/transparentlogo.png">
                </td>
                <td class="iName">Foxycle Extreme Pro 6000</td>
                <td>$7999.99</td>
              </tr>
              <tr class="bot-bord">
                <td>Subtotal</td>
                <td></td>
                <td>$17999.97</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td></td>
                <td>$300</td>
              </tr>
              <tr class="tot-bord">
                <td>Total</td>
                <td></td>
                <td>$18,299.97</td>
              </tr>
              <br>
              <tr>
                <td></td>
                <td></td>
                <td>
                  <div class="checkout-btn">
                    <div class="button is-success" v-on:click="loading()">
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
import axios, { AxiosResponse } from "axios";
import { APIConfig } from "../utils/api.utils";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Checkout extends Vue {
  loading() {
    const ele = document.getElementById("pageloader");
    ele.classList.toggle("is-active");
    setTimeout(function() {
      ele.classList.toggle("is-active");
    }, 3000);

    setTimeout(() => this.$router.push({ path: "/orderconfirmation" }), 3500);
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

