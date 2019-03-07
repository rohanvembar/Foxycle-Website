<template>
  <modal
    v-bind:is-showing="isShowing"
    title="add an item"
    formName="addItemForm"
    success-button="Add"
    v-on:success="success"
    v-on:cancel="cancel"
  >
    <form id="addItemForm" v-on:submit.prevent="success">
      <b-field label="Item Name">
        <b-input type="text" placeholder="item name" v-model="newItemTitle" rounded required></b-input>
      </b-field>

      <b-field label="Brand">
        <b-select required v-model="brandIdStr">
          <option v-for="brand in brands" v-bind:key="brand.id" :value="brand.id">{{brand.name}}</option>
          <option value="-100">Other</option>
        </b-select>
      </b-field>
      <b-input
        :disabled="brandIdStr != '-100'"
        type="text"
        placeholder="new brand"
        v-model="newItemBrand"
        rounded
        required
      ></b-input>
      <b-field label="Price">
        <b-input
          type="number"
          min="0.01"
          step="0.01"
          placeholder="price"
          maxlength="50"
          v-model="newItemPrice"
          rounded
          required
        ></b-input>
      </b-field>
      <b-field label="Sale Price (optional)">
        <b-input
          type="number"
          min="0.01"
          :max="newItemPrice - 0.1"
          step="0.01"
          placeholder="sale price"
          v-model="newItemSalePrice"
          rounded
        ></b-input>
      </b-field>
      <b-field label="Image URL">
        <b-input type="url" placeholder="image url" v-model="newItemImage" rounded required></b-input>
      </b-field>
      <img v-if="newItemImage" width="150px" :src="newItemImage">
      <b-field label="Quantity Available">
        <b-input
          type="number"
          min="1"
          placeholder="quantity"
          v-model="newItemQuantity"
          rounded
          required
        ></b-input>
      </b-field>
      <div class="field">
        <b-switch type="checkbox" v-model="newItemShipping">Available to Ship</b-switch>
      </div>
      <div class="field">
        <label class="label">Categories</label>
        <div class="control">
          <div class="select is-multiple">
            <b-select required multiple v-model="newItemCategories">
              <option v-for="category in categorynames" v-bind:key="category.id" :value="category.category">{{category.category}}</option>
              <option value="other" >Other</option>
            </b-select>
          </div>
        </div>
      </div>
      <b-input
        :disabled="!newItemCategories.includes('other')"
        type="text"
        placeholder="new category"
        v-model="newItemCategory"
        rounded
        required
      ></b-input>
      <b-field label="Item Description">
        <b-input
          type="textarea"
          minlength="10"
          maxlength="10000"
          placeholder="enter item description here"
          v-model="newItemDescription"
          required
        ></b-input>
      </b-field>
    </form>
  </modal>
</template>


<script lang="ts">
import axios, { AxiosResponse, AxiosError } from "axios";
import { APIConfig } from "../utils/api.utils";
import { Component, Prop, Vue, Provide } from "vue-property-decorator";
import { iShopItem } from "../models/shopitem.interface";
import { iBrand } from "../models/brand.interface";
import { Category } from "../../../api/entity";

import Modal from "./Modal.vue";
@Component({
  components: {
    Modal
  }
})
export default class AddItem extends Vue {
  @Prop(Boolean) isShowing: boolean = false;
  @Prop() brands: iBrand[] = [];
  @Prop() categorynames: Category[] = [];
  newItemTitle: string = "";
  newItemPrice: number | string = "";
  newItemSalePrice: number | string = "";
  newItemImage: string = "";
  newItemDescription: string = "";
  newItemCategories: string[] = [""];
  newItemBrand: string = "";
  newItemQuantity: number | string = "";
  savedItem: iShopItem | string = "";
  newItemShipping: boolean = false;
  brandId: number = -1;
  brandIdStr: string = "";
  newItemCategory: string = "";

  generate() {
    var len;
    var timestamp;
    len = 8;
    timestamp = +new Date();
    var ts = timestamp.toString();
    var parts = ts.split("").reverse();
    var id = "";

    for (var i = 0; i < len; ++i) {
      var index = Math.floor(Math.random() * (parts.length - 1 - 0 + 1)) + 0;
      id += parts[index];
    }

    return id;
  }
  goodToast() {
    this.$toast.open({
      duration: 3000,
      message: `new item added successfully`,
      position: "is-bottom",
      type: "is-primary"
    });
  }

  addNewBrand(categorynumber) {
    axios
      .post(APIConfig.buildUrl("/newBrand"), {
        name: this.newItemBrand,
        id: this.brandId
      })
      .then((response: AxiosResponse) => {
        console.log("[AddItem.vue] new brand" + JSON.stringify(response.data));
        this.addNewItem(categorynumber);
      })
      .catch((response: AxiosResponse) => {
        console.log("[AddItem.vue] brand" + "catch");
      });
  }

  addNewItem(categorynumber) {
    if (!this.newItemSalePrice) {
      this.newItemSalePrice = 0;
    }
    axios
      .post(APIConfig.buildUrl("/newitem"), {
        name: this.newItemTitle,
        price: this.newItemPrice,
        saleprice: this.newItemSalePrice,
        brandId: this.brandId,
        categoryId: categorynumber,
        image: this.newItemImage,
        delivery: this.newItemShipping,
        quantity: this.newItemQuantity,
        description: this.newItemDescription
      })
      .then((response: AxiosResponse) => {
        console.log(this.newItemShipping);
        console.log("[AddItem.vue]" + JSON.stringify(response.data));
        this.savedItem = response.data;
        this.$emit("success");
        this.goodToast();
      })
      .catch((response: AxiosResponse) => {
        console.log("[AddItem.vue]" + "catch");
      });
  }

  success() {
    var categorynumber = this.generate();
    if(this.newItemCategory != ""){
      var newCatInd = this.newItemCategories.indexOf('other');
      this.newItemCategories[newCatInd] = this.newItemCategory;
    }
    // Adding categories of item
    for (var i = 0; i < this.newItemCategories.length; i++) {
      axios
        .post(APIConfig.buildUrl("/newitemcategory"), {
          categoryId: categorynumber,
          category: this.newItemCategories[i]
        })
        .then((response: AxiosResponse) => {
          console.log(
            "[AddItem.vue] category" +
              JSON.stringify(response.data) +
              "number of categories: " +
              this.newItemCategories.length
          );
          this.savedItem = response.data;
        })
        .catch((response: AxiosResponse) => {
          console.log("[AddItem.vue] category" + "catch");
        });
    }

    this.brandId = Number(this.brandIdStr);
    if (this.brandId < 0) {
      this.brandId = Number(this.generate());
      this.addNewBrand(categorynumber);
      console.log("New BrandID: " + this.brandId);
    } else {
      this.addNewItem(categorynumber);
    }

    this.$emit("success");
  }

  cancel() {
    this.newItemTitle = "";
    this.newItemPrice = "";
    this.newItemSalePrice = "";
    this.brandId = -1;
    this.newItemImage = "";
    this.newItemShipping = false;
    this.newItemQuantity = "";
    this.newItemDescription = "";
    this.$emit("cancel");
  }
}
</script>