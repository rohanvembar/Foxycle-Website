<template>
  <div v-if="loadedItem" class="item-page-main-background">
    <div class="itempage-main-content">
      <div class="itempage-title">{{shopItem.name}}</div>
      <div class="itempage-subtitle">Built For Something
        <hr class="itempage-line">
      </div>
      <div class="itempage-row">
        <div class="itempage-image-column">
          <img class="itempage-image" :src="shopItem.image">
        </div>
        <div class="itempage-details-column">
          <table>
            <tr>
              <td>Price</td>
            </tr>
            <tr>
              <td class="itempage-price-box">
                <center>${{shopItem.price}}</center>
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
                <button class="button" v-on:click="addToCart" exact-active-class="is-active">
                <router-link
                  to="/cart"
                >Add to Cart</router-link>
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="itempage-dividing-line">
        <hr>
      </div>
      <div class="itempage-specifications">
        <div class="itempage-specs-title">Description</div>
        {{shopItem.description}}
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
export default class ItemPage extends Vue {
  error: string | boolean = false;
  shopItem: iShopItem | undefined;
  loadedItem: boolean = false;

  created() {
    this.getItem();
  }

  addToCart() {
    if (this.shopItem) {
      this.$store.commit("cart", this.shopItem);
    }
  }

  getItem() {
    this.error = false;
    console.log("[ItemPage.vue] itemid: " + this.$route.params.itemid)
    axios
      .get(APIConfig.buildUrl("/shopitem/" + this.$route.params.itemid))
      .then((response: AxiosResponse) => {
        this.shopItem = response.data;
        this.loadedItem = true;
        console.log("[ItemPage.vue]" + response.data);
        this.$emit("[ItemPage.vue]" + "success");
      })
      .catch((res: AxiosError) => {
        this.error = res.response && res.response.data.error;
        console.log("[ItemPage.vue]" + this.error);
      });
  }
}
</script>




<style lang="scss" scoped>
.itempage-main-content {
  padding-left: 20%;
  padding-right: 20%;
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
  box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.16);
  padding: 1%;
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
  background-color: #3c8cff;
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

.button {
  background: #239cec;
  margin: px;
  display: block;
  text-align: center;
  color: #fff;
  transition: 0.3s;
  text-decoration: none;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}
.button:hover {
  background: #40b883;
  color: #f1f2f3;
}
</style>
