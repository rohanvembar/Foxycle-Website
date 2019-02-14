<template>
  <div class="item-page-main-background">
    <div class="itempage-main-content"> 
      <div class="itempage-title">
        Foxcycle Extreme Pro 500
      </div>
      <div class="itempage-subtitle">
        Built For Something
        <hr class="itempage-line">
      </div>
      <div class="itempage-row">
        <div class="itempage-image-column">
          <img class="itempage-image" src="../assets/itempage_bike.png">
        </div>
        <div class="itempage-details-column"><table>
          <tr>
            <td>Price</td>
          </tr>
          <tr>
            <td class="itempage-price-box">
              <center>$2,999</center>
            </td>
          </tr>
          <tr>
            <td>Category</td>
          </tr>
          <tr>
            <td class="itempage-category-box">
              <center>Mountain Bikes</center>
            </td>
          </tr>
          <tr>
            <td>Quantity</td>
          </tr>
          <tr>
            <input type="number" min="1" max="100" value="1">
          </tr>
          <tr>
            <td class="itempage-cart-button">
              <router-link class="button" to="/cart" exact-active-class="is-active">
              Add to Cart
              </router-link>
            </td>
          </tr>
        </table></div>
      </div>
      <div class="itempage-dividing-line">
        <hr>
      </div>
      <div class="itempage-specifications">
        <div class="itempage-specs-title">
          Specifications
        </div>
        <div class="itempage-specs-table"><table>
          <tr class="itempage-specs-categories">
            <td>Frameset</td>
          </tr>
          <hr class="itempage-specs-dividing-line">
          <tr class="itempage-specs-subcategories">
            <td>Frame</td>
          </tr>
          <hr class="itempage-specs-dividing-line">
          <tr class="itempage-specs-subcategories">
            <td>Front Suspension</td>
          </tr>
          <hr class="itempage-specs-dividing-line">
          <tr class="itempage-specs-subcategories">
            <td>Rear Suspension</td>
          </tr>
          <hr class="itempage-specs-dividing-line">
          <tr class="itempage-specs-categories">
            <td>Drivetrain</td>
          </tr>
          <hr class="itempage-specs-dividing-line">
          <tr class="itempage-specs-subcategories">
            <td>Front Suspension</td>
          </tr>
          <hr class="itempage-specs-dividing-line">
          <tr class="itempage-specs-subcategories">
            <td>Rear Suspension</td>
          </tr>
        </table></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios, { AxiosResponse } from "axios";
import { APIConfig } from "../utils/api.utils";
import { Component, Prop, Vue } from "vue-property-decorator";


@Component
export default class ItemPage extends Vue {
}
</script>




<style lang="scss" scoped>

.itempage-main-content {
    padding-left: 20%;
    padding-right:20%;
    padding-top: 3%;
    //justify-content: center;
}

.item-page-main-background {
  padding-bottom: 5%;
}

.itempage-title {
  font-size: 22pt;
  font-weight: bold;
}

.itempage-subtitle {
  padding-top: 0.5%;
}

.itempage-specs-title {
  font-size: 18pt;
  padding-bottom: 2%;
}

.itempage-specifications {
  padding-top: 2%;
}

.itempage-specs-table {
  background-color: #ffffff;
  box-shadow: 0px 0px 15px 2px rgba(0,0,0,0.16);
  padding:1%;
}

.itempage-specs-categories {
  font-weight: bold;
  font-size: 14pt;
}

.itempage-specs-subcategories {
  font-size: 12pt;
}

.itempage-row {
    padding-top: 2%;
    content: "";
    display: table;
    clear: both;
}

.itempage-image-column {
    float: left;
    //width: 75%;
}

.itempage-image {
    max-height: 250px;
}

.itempage-details-column {
    float: right;
    padding-left: 100px;
    //width: 25%;
}

.itempage-line {
  width: 5%;
  height: 1px;
  background-color: #0000004f;
}

.itempage-dividing-line {
  margin-top: 3%;
  width: 100%;
  height: 5px;
  background-color: #3C8CFF;
}

.itempage-specs-dividing-line {
  margin-top: 10%;
  margin-bottom: 10%;
  width: 100%;
  height: 2px;
  background-color: #0000002c;
}

.itempage-price-box {
  border: 1px solid rgb(167, 167, 167);
  background-color: #ffffff;
  padding: 5px;
  margin: 5px;
}

.itempage-category-box {
  border: 1px solid rgb(167, 167, 167);
  background-color: #ffffff;
  padding: 5px;
  margin: 5px;
}

.itempage-cart-button {
  padding-top: 20px;
}

.button{
  background: #239CEC;
  margin:px;
  display:block;
  text-align:center;
  color:#fff;
  transition: 0.3s;
  text-decoration:none;
  text-shadow:1px 1px 3px rgba(0,0,0,0.3);
  border-radius:3px;
  box-shadow:1px 1px 3px rgba(0,0,0,0.3);
}
.button:hover{
  background:#40B883;
  color:#f1f2f3;
}
</style>
