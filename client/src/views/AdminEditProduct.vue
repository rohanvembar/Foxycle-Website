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
      <div class="buttons">
        <button
          class="button is-info add is-rounded is-focused"
          style="width:200px"
          v-on:click="showAddItemModal()"
        >
          <i class="fas fa-plus space"></i>add item
        </button>
      </div>
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
              <div class="imagediv">
                <img :src="item.image" class="image">
              </div>
              <figcaption>{{item.name}}</figcaption>
              <span class="price">${{item.price}}</span>
              
              <button
                v-on:click="showEditItemModal(index)"
                class="button editbutton is-rounded is-info"
                href
              >edit</button>
              <div
                class="button removebutton is-rounded is-danger"
                v-on:click="removeItem(item)"
              >remove</div>
            </figure>
          </div>
        </div>
      </div>
    </div>
    <AddItem v-bind:is-showing="showAddItem" v-on:success="successAdd()" v-on:cancel="cancelAdd()"/>

    <modal
      v-bind:is-showing="showEditItem"
      title="edit an item"
      formName="editItemForm"
      success-button="Save Changes"
      v-on:success="successEdit"
      v-on:cancel="cancelEdit"
    >
      <form id="editItemForm" v-on:submit.prevent="successEdit">
        <b-field label="Item Name">
          <b-input
            type="text"
            placeholder="item name"
            v-model="ItemTitle"
            rounded
            required
          ></b-input>
        </b-field>
        <b-field label="Item Brand">
          <b-input
            type="text"
            placeholder="item brand"
            v-model="ItemBrand"
            rounded
            required
          ></b-input>
        </b-field>
        <b-field label="Price">
          <b-input
            type="number"
            min="0.01"
            step="0.01"
            placeholder="price"
            maxlength="50"
            v-model="ItemPrice"
            rounded
            required
          ></b-input>
        </b-field>
        <b-field label="Sale Price (optional)">
          <b-input
            type="number"
            :max="ItemPrice - 0.1"
            step="0.01"
            placeholder="sale price"
            v-model="ItemSalePrice"
            rounded
          ></b-input>
        </b-field>
        <b-field label="Image URL">
          <b-input type="url" placeholder="image url" v-model="ItemImage" rounded required></b-input>
        </b-field>
        <img v-if="ItemImage" width="150px" :src="ItemImage">
        <b-field label="Quantity Available">
          <b-input
            type="number"
            min="1"
            placeholder="quantity"
            v-model="ItemQuantity"
            rounded
            required
          ></b-input>
        </b-field>
        <div class="field">
          <b-switch type="checkbox" v-model="ItemShipping">Available to Ship</b-switch>
        </div>
        <div class="field">
          <label class="label">Categories</label>
          <div class="control">
            <div class="select is-multiple">
              <span>{{ItemCategories}}</span>
              <select multiple v-model="ItemCategories">
                <option value="apparel">Apparel</option>
                <option value="roadbike">Road Bike</option>
                <option value="mountainbike">Mountain Bike</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>
        <b-field label="Item Description">
          <b-input
            type="textarea"
            minlength="10"
            maxlength="10000"
            placeholder="enter item description here"
            v-model="ItemDescription"
            required
          ></b-input>
        </b-field>
      </form>
    </modal>
  </div>
</template>

<script lang="ts">
import axios, { AxiosResponse, AxiosError } from "axios";
import { APIConfig } from "../utils/api.utils";
import { Component, Prop, Vue } from "vue-property-decorator";
import { iShopItem } from "../models/shopitem.interface";
import { categoryItem } from "../models/category.interface";
import AddItem from "@/components/AddItem.vue";
import Modal from "@/components/Modal.vue";

@Component({
  components: {
    AddItem,
    Modal
  }
})
export default class AdminEditProduct extends Vue {
  showAddItem: boolean = false;
  showEditItem: boolean = false;
  error: string | boolean = false;
  items: iShopItem[] = [];
  categoryItems: categoryItem[] = [];
  itemToEdit: number = 0;
  ItemTitle: string = "";
  ItemPrice: number | string = "";
  ItemSalePrice: number | string = "";
  ItemImage: string = "";
  ItemDescription: string = "";
  ItemCategories: string[] = [""];
  ItemBrand: string = "";
  ItemQuantity: number | string = "";
  ItemShipping: boolean = true;

  successEdit() {
    
    this.showEditItem = false;
    if (!this.ItemSalePrice) {
      this.ItemSalePrice = 0;
    }
    axios
      .put(APIConfig.buildUrl("/shopitem/" + this.items[this.itemToEdit].id), {
        name: this.ItemTitle,
        price: this.ItemPrice,
        saleprice: this.ItemSalePrice,
        delivery: this.ItemShipping,
        brand: this.ItemBrand,
        categories: this.ItemCategories,
        image: this.ItemImage,
        quantity: this.ItemQuantity,
        description: this.ItemDescription
      })
      .then((response: AxiosResponse) => {
        this.$emit("success");
        this.getAllItems();
      })
      .catch((response: AxiosResponse) => {
        console.log("catch");
        this.error = "bad";
      });
  }
  cancelEdit() {
    this.showEditItem = false;
  }
  successAdd() {
    this.showAddItem = false;
    this.getAllItems();
  }
  cancelAdd() {
    this.showAddItem = false;
  }
  get isLoggedIn(): boolean {
    return !!this.$store.state.userId;
  }
  showEditItemModal(item: number) {
    // NEEDS TO FILTER AT CONTROLLER LEVEL
    
    axios
      .get(APIConfig.buildUrl("/itemscategory/" + this.items[item].categoryId))
      .then((response: AxiosResponse) => {
        this.categoryItems = response.data;
        console.log(
          "[AdminEditProduct.vue]" + JSON.stringify(response.data.length)
        );
      })
      .catch((res: AxiosError) => {
        this.error = res.response && res.response.data.error;
        console.log("[AdminEditProduct.vue]" + this.error);
      });

    if (!this.items[item].saleprice) {
      this.ItemSalePrice = "";
    }
                    console.log(this.ItemShipping);

    // Clearing array (clicking edit on multiple items fills it up)
    this.ItemCategories = [""];
    for (var i = 0; i < this.categoryItems.length; i++) {
      // TEMPORARY WORKAROUND (NEED TO FILTER AT CONTROLLER LEVEL)
      if (this.categoryItems[i].categoryId == this.items[item].categoryId)
        this.ItemCategories.push(this.categoryItems[i].category);
    }
    this.showEditItem = true;
    this.itemToEdit = item;
    this.ItemTitle = this.items[item].name;
    this.ItemPrice = this.items[item].price;
    this.ItemImage = this.items[item].image;
    this.ItemSalePrice = this.items[item].saleprice;

    this.ItemDescription = this.items[item].description;
    this.ItemBrand = this.items[item].brand;
    this.ItemQuantity = this.items[item].quantity;
    this.ItemShipping = this.items[item].delivery;

    console.log(this.itemToEdit);
  }

  showAddItemModal() {
    this.showAddItem = true;
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
.description-box {
  max-width: 200px;
}

.manage-item-page {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 30px;
}
.add-item-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

#toast {
  visibility: hidden;
  max-width: 50px;
  height: 55px;
  margin: auto;
  background-color: #fe2b55;
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

  background-color: #fe2b55;
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
  margin-bottom: 50px;
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
  opacity: 1;
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
  margin: px;
  display: block;
  text-align: center;
  width: 100%;
}

.editbutton {
  margin: px;
  display: block;
  text-align: center;
  margin-top: 2%;
  margin-bottom: 2%;
  width: 100%;
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
