<template>
  <div>
    <div v-if="!isLoggedIn" class="error">
      <article class="message is-danger">
        <div class="message-header">
          <p>
            <font-awesome-icon icon="exclamation-circle"/>Oops
          </p>
        </div>
        <div class="message-body">
          You must be a Foxycle employee to view this page
          <img
            src="https://media.giphy.com/media/jUJgP8Fdvsgta/giphy.gif"
            style="padding:50px;"
          >
        </div>
      </article>
    </div>

    <div v-else>
      <!-- put page here -->
      <button class="button is-info add" v-on:click="showAddItemModal()"><i class="fas fa-plus space"></i>add item</button>

      <div>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
          integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
          crossorigin="anonymous"
        >
        <div id="wrap">
          <div id="columns" class="columns_4">
            <figure v-for="(item, index) in items" v-bind:key="index">
              <router-link :to="{ name: 'edititem', params: { itemid: item.id } }">
                <div class="imagediv">
                  <img :src="item.image" class="image">
                </div>
              </router-link>
              <figcaption>{{item.name}}</figcaption>
              <span class="price">${{item.price}}</span>
              <router-link :to="{ name: 'edititem', params: { itemid: item.id } }">
                <div class="editbutton" href>edit</div>
              </router-link>
              <div class="removebutton" v-on:click="toast(item)">remove</div>
            </figure>
          </div>
        </div>
        <div id="toast">
          <div id="img">
            <i class="fas fa-trash"></i>
          </div>
          <div id="desc">successfully removed product</div>
        </div>
      </div>
    </div>
    <AddItem v-bind:is-showing="showAddItem" v-on:success="successAdd()" v-on:cancel="cancelAdd()"/>
  </div>
</template>

<script lang="ts">
import axios, { AxiosResponse, AxiosError } from "axios";
import { APIConfig } from "../utils/api.utils";
import { Component, Prop, Vue } from "vue-property-decorator";
import { iShopItem } from "../models/shopitem.interface";
import AddItem from "@/components/AddItem.vue";

@Component({
  components: {
    AddItem
  }
})
export default class AdminEditProduct extends Vue {
  showAddItem: boolean = false;
  error: string | boolean = false;
  items: iShopItem[] = [];

  successAdd() {
    this.showAddItem = false;
  }
  cancelAdd() {
    this.showAddItem = false;
  }
  get isLoggedIn(): boolean {
    return !!this.$store.state.userId;
  }

  showAddItemModal() {
    this.showAddItem = true;
  }

  toast(item: iShopItem) {
    const ele = document.getElementById("toast");
    if (ele) {
      ele.className = "show";
      setTimeout(function() {
        ele.className = ele.className.replace("show", "");
      }, 3000);
    }
    this.removeItem(item);
  }

  removeItem(item: iShopItem) {
    this.error = false;
    axios
      .delete(APIConfig.buildUrl("/deleteitem/" + item.id))
      .then((response: AxiosResponse) => {
        const deletedItem = response.data;
        this.items = this.items.filter(item => {
          return item.id != deletedItem.id;
        });
        this.$emit("success");
      })
      .catch((response: AxiosResponse) => {
        this.error = "bad";
      });
  }

  created() {
    this.getAllItems();
  }

  getAllItems() {
    this.error = false;
    axios
      .get(APIConfig.buildUrl("/shopitems"))
      .then((response: AxiosResponse) => {
        this.items = response.data;
        console.log(
          "[AdminEditProduct.vue]" + JSON.stringify(response.data.length)
        );
        this.$emit("success");
      })
      .catch((res: AxiosError) => {
        this.error = res.response && res.response.data.error;
        console.log("[AdminEditProduct.vue]" + this.error);
      });
  }

  goToItemPage() {}
}
</script>

<style scoped>
.add-item-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
}

#toast {
  visibility: hidden;
  max-width: 50px;
  height: 55px;
  margin: auto;
  background-color: rgb(236, 35, 35);
  color: #fff;
  text-align: center;
  border-radius: 5px;

  position: fixed;
  z-index: 1;
  left: 0;
  right: 0;
  bottom: 30px;
  font-size: 17px;
  white-space: nowrap;
}
#toast #img {
  width: 55px;
  height: 55px;

  float: left;

  padding-top: 16px;
  padding-bottom: 16px;

  box-sizing: border-box;
  border-radius: 5px;

  background-color: rgb(236, 35, 35);
  color: #fff;
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
    bottom: 30px;
    opacity: 1;
  }
}

@keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
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
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 60px;
    opacity: 0;
  }
}

@keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 60px;
    opacity: 0;
  }
}

#wrap {
  width: 90%;
  max-width: 1100px;
  margin: auto;
}

.columns_4 figure {
  width: 24%;
  margin-right: 1%;
  object-fit: cover;
}
.columns_4 figure:nth-child(4) {
  margin-right: 0;
}

#columns figure:hover {
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  transform: scale(1);
}
#columns:hover figure:not(:hover) {
  opacity: 0.6;
}
div#columns figure {
  display: inline-block;
  background: #fefefe;
  border-radius: 5px;
  border: 0px solid #fafafa;
  box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
  margin-bottom: 10px;
  -webkit-column-break-inside: avoid;
  -moz-column-break-inside: avoid;
  padding: 15px;
  padding-bottom: 15px;
  background: -webkit-linear-gradient(45deg, #fff, #f9f9f9);
  opacity: 1;
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

div#columns figure img {
  width: 100%;
  border-bottom: 1px solid #ccc;
  padding-bottom: 15px;
  margin-bottom: 5px;
}

div#columns figure figcaption {
  font-size: 0.9rem;
  color: #444;
  line-height: 1.5;
  height: 40px;
  font-weight: 600;
  text-overflow: ellipsis;
}

.removebutton {
  background: #fe385f;
  margin: px;
  display: block;
  text-align: center;
  color: #fff;
  transition: 0.3s;
  text-decoration: none;
  border-radius: 3px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}

.editbutton {
  background:#239cec;
  margin: px;
  display: block;
  text-align: center;
  color: #fff;
  transition: 0.3s;
  text-decoration: none;
  border-radius: 3px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  margin-top: 2%;
  margin-bottom: 2%;
}

@media screen and (max-width: 960px) {
  #columns figure {
    width: 24%;
  }
}
@media screen and (max-width: 767px) {
  #columns figure {
    width: 32%;
  }
}
@media screen and (max-width: 600px) {
  #columns figure {
    width: 49%;
  }
}
@media screen and (max-width: 500px) {
  #columns figure {
    width: 100%;
  }
}

.imagediv {
  height: 150px;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.add {
  display: block;
  max-width: 300px;
  margin: auto;
  margin-top: 15px;
  margin-bottom: 15px;

}

.space {
  padding-right: 10px;
}
</style>
