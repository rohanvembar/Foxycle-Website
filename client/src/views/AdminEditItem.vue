<template>
  <div v-if="loadedItem" class="item-page-main-background">
    <button class="button" v-on:click="changeItem">Save Item</button>
    <div class="itempage-main-content">Name
      <div class="itempage-title">
        <input type="text" v-model="name">
      </div>
      <hr class="itempage-line">
      <div class="itempage-row">
        <div class="itempage-image-column">
          <img class="itempage-image" :src="shopItem.image">
          <input type="text" v-model="image" placeholder="image url...">
        </div>
        <div class="itempage-details-column">
          <table>
            <tr>
              <td>Price</td>
            </tr>
            <tr>
              <td class="itempage-price-box">
                <center>
                  <input
                    type="number"
                    min="0.01"
                    step="0.01"
                    v-model="price"
                    placeholder="price..."
                  >
                </center>
              </td>
            </tr>
            <tr>
              <td>Brand</td>
            </tr>
            <tr>
              <td class="itempage-price-box">
                <center>
                  <input type="text" v-model="brand">
                </center>
              </td>
            </tr>
            <tr>
              <td>Quantity</td>
            </tr>
            <tr>
              <td class="itempage-price-box">
                <center>
                  <input type="number" min="1" step="1" v-model="quantity">
                </center>
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
        <textarea class="description-box" v-model="description"></textarea>
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
  price: number | string = "";
  name: string = "";
  description: string = "";
  brand: string = "";
  quantity: number | string = "";
  image: string = "";
  loadedItem: boolean = false;

  created() {
    this.getItem();
  }

  changeItem() {
    if (!this.shopItem) {
      return;
    }
    axios
      .put(APIConfig.buildUrl("/shopitem/" + this.shopItem.id), {
        name: this.name,
        price: this.price,
        brand: this.brand,
        categories: "",
        image: this.image,
        quantity: this.quantity,
        description: this.description
      })
      .then((response: AxiosResponse) => {
        this.$emit("success");
      })
      .catch((response: AxiosResponse) => {
        console.log("catch");
        this.error = "bad";
      });
  }

  getItem() {
    this.error = false;
    console.log("[ItemPage.vue] itemid: " + this.$route.params.itemid);
    axios
      .get(APIConfig.buildUrl("/shopitem/" + this.$route.params.itemid))
      .then((response: AxiosResponse) => {
        this.shopItem = response.data;
        this.loadedItem = true;
        this.price = response.data.price;
        this.name = response.data.name;
        this.description = response.data.description;
        this.brand = response.data.brand;
        this.quantity = response.data.quantity;
        this.image = response.data.image;
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
