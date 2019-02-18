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
      yay you have access
      <div class="manage-item-page">
        <div class="add-item-form">
          <input type="text" v-model="newItemTitle" placeholder="new shop item name...">
          <input type="number" min="0.01" step="0.01" v-model="newItemPrice" placeholder="price...">
          <input type="text" v-model="newItemImage" placeholder="image url...">
          etc.....
          <button class="button add_button" v-on:click="addItem">submit</button>
        </div>
        <div class="columns_4">
        <figure v-if="savedItem">
          <router-link to="/itempage">
            <img :src="savedItem.image">
          </router-link>
          <figcaption>{{savedItem.name}}</figcaption>
          <span class="price">${{savedItem.price}}</span>
        </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios, { AxiosResponse } from "axios";
import { APIConfig } from "../utils/api.utils";
import { Component, Prop, Vue } from "vue-property-decorator";
import { iShopItem } from "../models/shopitem.interface";

@Component
export default class AdminEditProduct extends Vue {
  newItemTitle: string = "";
  newItemPrice: number | string = "";
  newItemImage: string = "";

  savedItem: iShopItem | string = "";

  get isLoggedIn(): boolean {
    return !!this.$store.state.userId;
  }

  addItem() {
    axios
      .post(APIConfig.buildUrl("/newitem"), {
        name: this.newItemTitle,
        price: this.newItemPrice,
        brand: "",
        categories: "",
        image: this.newItemImage,
        delivery: true,
        quantity: 1,
        description: "blah"
      })
      .then((response: AxiosResponse) => {
        console.log("[AdminEditProduct.vue]" + response.data);
        this.savedItem = response.data;
        this.$emit("success");
        this.newItemTitle = "";
        this.newItemPrice = "";
        this.newItemImage = "";
      })
      .catch((response: AxiosResponse) => {
        console.log("[AdminEditProduct.vue]" + "catch");
      });
  }
}
</script>

<style scoped>

.manage-item-page{
  display: flex;
}
.add-item-form {
  display: flex;
  flex-direction: column;
  width: 500px;
  justify-content: center;
  padding: 50px;
}
#wrap{
	width: 90%;
	max-width: 1100px;
	margin: auto;
}
.columns_2 figure{
   width:49%;
   margin-right:1%;
}
.columns_2 figure:nth-child(2){
	margin-right: 0;
}
.columns_3 figure{
   width:32%;
   margin-right:1%;
}
.columns_3 figure:nth-child(3){
	margin-right: 0;
}
.columns_4 figure{
   width:24%;
   margin-right:1%;
}
.columns_4 figure:nth-child(4){
	margin-right: 0;
}
.columns_5 figure{
   width:19%;
   margin-right:1%;
}
.columns_5 figure:nth-child(5){
	margin-right: 0;
}
#columns figure:hover{
	-webkit-transform: scale(1);
	-moz-transform:scale(1);
	transform: scale(1);

}
#columns:hover figure:not(:hover) {
	opacity: 0.4;
}
div#columns figure {
	display: inline-block;
	background: #FEFEFE;
	border: 2px solid #FAFAFA;
	box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
	margin: 0 0px 15px;
	-webkit-column-break-inside: avoid;
	-moz-column-break-inside: avoid;
	padding: 15px;
	padding-bottom: 5px;
	background: -webkit-linear-gradient(45deg, #FFF, #F9F9F9);
	opacity: 1;
	-webkit-transition: all .2s ease;
	-moz-transition: all .2s ease;
	-o-transition: all .2s ease;
	transition: all .2s ease;
}

div#columns figure img {
	width: 100%;
	border-bottom: 1px solid #ccc;
	padding-bottom: 15px;
	margin-bottom: 5px;
}

div#columns figure figcaption {
  font-size: .9rem;
  color: #444;
  line-height: 1.5;
  height:60px;
  font-weight:600;
  text-overflow:ellipsis;
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
@media screen and (max-width: 960px) { 
  #columns figure { width: 24%; }
}
@media screen and (max-width: 767px) {
  #columns figure { width:32%;}
}
@media screen and (max-width: 600px) {
  #columns figure { width: 49%;}
}
@media screen and (max-width: 500px) {
  #columns figure { width: 100%;}
}
</style>
