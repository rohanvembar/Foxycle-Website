<template>
  <div v-if="loadedItem" class="item-page-main-background main">
    <div class="box">
      <div class="columns">
        <div class="column">
          <img
            class="itempage-image"
            style="max-height:300px"
            :src="shopItem.image"
            :data-badge="hello"
          >
        </div>
        <div class="column is-one-fifth"></div>
        <div class="column">
          <p class="title is-2">{{shopItem.name}}</p>
          <div class="is-divider"></div>
          <p v-if="shopItem.saleprice == '0'" class="subtitle is-3">${{shopItem.price}}</p>
          <p v-else class="subtitle is-3">${{shopItem.saleprice}}</p>

          <div class="addquant">
            <input
              type="number"
              v-model="quantity"
              value="1"
              class="input is-rounded"
              style="width:60px"
            >
            <span class="space"></span>
            <router-link to="/cart">
              <button
                class="button is-info is-rounded is-focused"
                v-on:click="addToCart"
                exact-active-class="is-active"
              >add to cart</button>
            </router-link>
            <div
              v-if="!shopItem.delivery"
              style="text-align:center;padding-top:25px;"
            >This item is available for pickup only</div>
          </div>
        </div>
      </div>
      <div class="is-divider"></div>
      <p class="title is-4">Description</p>
      <div class="description">{{shopItem.description}}</div>
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
  quantity: number = 1;

  created() {
    this.getItem();
  }

  addToCart() {
    if (this.shopItem) {
      for (var i = 0; i < this.quantity; i++) {
        this.$store.commit("cart", this.shopItem);
      }
    }
  }

  getItem() {
    this.error = false;
    console.log("[ItemPage.vue] itemid: " + this.$route.params.itemid);
    axios
      .get(APIConfig.buildUrl("/shopitem/" + this.$route.params.itemid))
      .then((response: AxiosResponse) => {
        this.shopItem = response.data;
        this.loadedItem = true;
        console.log("[ItemPage.vue]" + JSON.stringify(response.data));
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
.main {
  width: 70%;
  margin: auto;
  text-align: center;
  padding-top: 80px;
  margin-bottom: 55px;
}

.description {
  white-space: pre-wrap;
  text-align: left;
  width: 80%;
  margin: auto;
}

.space {
  padding: 10px;
}

.addquant {
  width: 100%;
  max-width: 300px;
  margin: auto;
}

.button {
  width: 60%;
}

.button {
  transition: 0.3s;
}
.button:hover {
  background: hsl(171, 100%, 41%);
}
</style>
