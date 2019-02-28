<template>
  <div v-if="loadedItem" class="item-page-main-background main">
    <div class="box">
      <div class="columns">
        <div class="column">
          <img
            class="itempage-image"
            style="max-height:300px"
            :src="shopItem.image"
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
              min="1"
              class="input is-rounded"
              style="width:60px"
            >
            <span class="space"></span>
            <!-- <router-link to="/cart"> -->
            <button
              class="button is-info is-rounded is-focused"
              v-on:click="addToCart"
              exact-active-class="is-active"
            >add to cart</button>
            <!-- </router-link> -->
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
    <div id="toast">
      <div id="desc">Only have {{shopItem.quantity}} in stock</div>
    </div>
  </div>
</template>

<script lang="ts">
import axios, { AxiosResponse, AxiosError } from "axios";
import { APIConfig } from "../utils/api.utils";
import { Component, Prop, Vue } from "vue-property-decorator";
import { iShopItem } from "../models/shopitem.interface";
import { iCart } from '@/models/cart.interface';

@Component
export default class ItemPage extends Vue {
  error: string | boolean = false;
  shopItem: iShopItem | undefined;
  loadedItem: boolean = false;
  quantity: number = 1;

  created() {
    this.getItem();
  }

  toast() {
    const ele = document.getElementById("toast");
    if (ele) {
      ele.className = "show";
      setTimeout(function() {
        ele.className = ele.className.replace("show", "");
      }, 3000);
    }
  }

  addToCart() {
    if (this.shopItem) {
      var items: iShopItem[] = this.$store.state.items;
      var quan = 0;
      for (var i in items) {
        if (items[i].id == this.shopItem.id) {
          quan++;
        }
      }
      
      var totalquan = +this.quantity + +quan;
      console.log(totalquan)
      if (totalquan > this.shopItem.quantity) {
        console.log("out of stock" + totalquan)
        this.toast();
      } else {
        for (var k = 0; k < this.quantity; k++) {
          this.$store.commit("cart", this.shopItem);
        }
        this.$router.push({ name: "cart" });
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

#toast {
  visibility: hidden;
  max-width: 50px;
  height: 55px;
  margin: auto;
  background-color: rgb(212, 49, 63);
  color: #fff;
  text-align: center;
  border-radius: 5px;

  position: fixed;
  z-index: 5;
  left: 0;
  right: 0;
  bottom: 50px;
  font-size: 17px;
  white-space: nowrap;
}

#toast #desc {
  color: #fff;

  padding: 16px;

  overflow: hidden;
  white-space: nowrap;
}

#toast.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, expand 0.5s 0.5s, stay 3s 1s, shrink 0.5s 2s,
    fadeout 0.5s 2s;
  animation: fadein 0.5s, expand 0.5s 0.5s, stay 3s 1s, shrink 0.5s 4s,
    fadeout 0.5s 2.5s;
}

@-webkit-keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 50px;
    opacity: 1;
  }
}

@keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 50px;
    opacity: 1;
  }
}

@-webkit-keyframes expand {
  from {
    min-width: 50px;
  }
  to {
    min-width: 350px;
  }
}

@keyframes expand {
  from {
    min-width: 50px;
  }
  to {
    min-width: 350px;
  }
}
@-webkit-keyframes stay {
  from {
    min-width: 350px;
  }
  to {
    min-width: 350px;
  }
}

@keyframes stay {
  from {
    min-width: 350px;
  }
  to {
    min-width: 350px;
  }
}
@-webkit-keyframes shrink {
  from {
    min-width: 350px;
  }
  to {
    min-width: 50px;
  }
}

@keyframes shrink {
  from {
    min-width: 350px;
  }
  to {
    min-width: 50px;
  }
}

@-webkit-keyframes fadeout {
  from {
    bottom: 50px;
    opacity: 1;
  }
  to {
    bottom: 60px;
    opacity: 0;
  }
}

@keyframes fadeout {
  from {
    bottom: 50px;
    opacity: 1;
  }
  to {
    bottom: 60px;
    opacity: 0;
  }
}
</style>
