<template>
  <div class="main-background info">
    <div class="Shipping_And_Card"><table >
      <tr>
        <td>Shipping Address</td>
        <td><button class="pickUpButton">Pick Up</button></td>
      </tr>
      <tr>
        <td><input v-model:="shippingname" id="1" placeholder="Name" type="text" ></td>
      </tr>
      <tr>
        <td><input v-model:="shippingstreet" placeholder="Street" type="text" ></td>
              <tr>
        <td><input v-model:="shippingcity" placeholder="City" type="text" ></td>
      </tr>
      <tr>

      <td><input v-model:="shippingstate" placeholder="State" type="text" ></td>
      </tr>
      <tr>
        <td><input v-model:="shippingzip" placeholder="Zip Code" type="text" ></td>
      </tr>
      <br>
      <tr><td>Payment</td></tr>
      <td><input placeholder="Credit Card Number" type="text"></td>
      <tr><td>Expiration Date</td></tr>
      <tr>
        <td><select name="month">
          <option selected="true" value="all">Month</option>
          <option value="jan">1</option>
          <option value="feb">2</option> 
          <option value="mar">3</option>
          <option value="apr">4</option>   
          <option value="may">5</option>
          <option value="jun">6</option> 
          <option value="jul">7</option>
          <option value="aug">8</option> 
          <option value="sep">9</option>
          <option value="oct">10</option>  
          <option value="nov">11</option>
          <option value="dec">12</option>  
        </select></td>  
          <td><select name="year">
          <option selected="true" value="all">Year</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option> 
          <option value="2021">2021</option>
          <option value="2022">2022</option>   
          <option value="2023">2023</option>
          <option value="2024">2024</option> 
          <option value="2025">2025</option>
        </select></td>  
      <tr>
        <td><input placeholder="CSV" type="text"></td>
      </tr>
      
    </table></div>

    <div class="Billing-Address"><table >
      <tr>
        <td>Billing Address</td>
        <td><button class="sameAsButton">Same as Shipping</button></td>
      </tr>
      <tr>
        <td><input v-model:="billingname" id="2" placeholder="Name" type="text"></td>
      </tr>
      <tr>
        <td><input v-model:="billingstreet" placeholder="Street" type="text"></td>
              <tr>
        <td><input v-model:="billingcity" placeholder="City" type="text"></td>
      </tr>
      <tr>
        <td><input v-model:="billingstate" placeholder="State" type="text"></td>
      </tr>
      <tr>
        <td><input v-model:="billigzip" placeholder="Zip Code" type="text"></td>
      </tr>
    </table></div>


      <div class="cart-table">
        <table>
          <h3>Order Summary</h3>
          <tr>
            <th>Product</th>
            <th></th>
            <th>Total</th>
          </tr>
          <tr>
            <td> <img src="../assets/transparentlogo.png"></td>
            <td class="iName">Foxycle Extreme Pro 5000</td>
            <td>$3999.99</td>
          </tr>
          <tr>
            <td> <img src="../assets/transparentlogo.png"></td>
            <td class="iName">Foxycle Extreme Pro 1000</td>
            <td>$5999.99</td>          
          </tr>
          <tr>
            <td> <img src="../assets/transparentlogo.png"></td>
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
              <router-link class="placeOrderButton" to="/orderconfirmation" exact-active-class="is-active">
                  PlaceOrder</router-link></div>  
            </td>
          </tr>
                   
        </table>

      </div>




  

  </div>
</template>





<script lang="ts">
import axios, { AxiosResponse } from "axios";
import { APIConfig } from "../utils/api.utils";
import { Component, Prop, Vue } from "vue-property-decorator";



@Component
export default class Checkout extends Vue {
}
</script>

<style lang="scss" scoped>

.info {
  padding:10px;
  display: flex;
  align-items: top;
}


.Shipping_And_Card {
  padding-top:10px;
  padding-left:65px;
  font-weight: bold;
  font-size: 17px;
}

.Billing-Address {
  padding-top:10px;
  padding-left:40px;
  font-weight: bold;
  font-size: 17px;
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
.container {
  width: 75%;
  background-color: white;
  padding: 80px 300px 30px 300px;
  margin-top: 50px;
}

.cart-table {
  display: flex;
  align-items: center;
  justify-content: center;  
  font-size: 15px;
  width: 1000px;
  
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

