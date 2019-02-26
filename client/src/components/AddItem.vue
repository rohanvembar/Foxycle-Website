<template>
  <modal
    v-bind:is-showing="isShowing"
    title="add an item"
    success-button="Add"
    v-on:success="success"
    v-on:cancel="cancel"
  >
    <form v-on:submit.prevent="onSubmit">
      <b-field label="Item Name">
        <b-input type="text" minlength="5" placeholder="item name" v-model="newItemTitle" rounded></b-input>
      </b-field>
      <b-field label="Item Brand">
        <b-input type="text" minlength="5" placeholder="item brand" v-model="newItemBrand" rounded></b-input>
      </b-field>
      <b-field label="Price">
        <b-input
          type="number"
          min="0.01"
          step="0.01"
          placeholder="price"
          maxlength="50"
          v-model="newItemPrice"
          rounded
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
        <b-input type="url" placeholder="image url" v-model="newItemImage" rounded></b-input>
      </b-field>
      <img v-if="newItemImage" width="150px" :src="newItemImage">
      <b-field label="Quantity Available">
        <b-input type="number" min="1" placeholder="quantity" v-model="newItemQuantity" rounded></b-input>
      </b-field>
      <div class="field">
        <b-switch v-model="newItemShipping">Available to Ship</b-switch>
      </div>
      <div class="field">
        <label class="label">Categories</label>
        <div class="control">
          <div class="select is-multiple">
            <select multiple v-model="newItemCategories">
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
          v-model="newItemDescription"
        ></b-input>
      </b-field>
    </form>
  </modal>
</template>


<script lang="ts">
import axios, { AxiosResponse } from "axios";
import { APIConfig } from "../utils/api.utils";
import { Component, Prop, Vue } from "vue-property-decorator";
import { iShopItem } from "../models/shopitem.interface";
import Modal from "./Modal.vue";
@Component({
  components: {
    Modal
  }
})
export default class AddItem extends Vue {
  @Prop(Boolean) isShowing: boolean = false;
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

  success() {
    axios
      .post(APIConfig.buildUrl("/newitem"), {
        name: this.newItemTitle,
        price: this.newItemPrice,
        saleprice: this.newItemSalePrice,
        brand: this.newItemBrand,
        categories: this.newItemCategories,
        image: this.newItemImage,
        delivery: this.newItemShipping,
        quantity: this.newItemQuantity,
        description: this.newItemDescription
      })
      .then((response: AxiosResponse) => {
        console.log("[AddItem.vue]" + JSON.stringify(response.data));
        this.savedItem = response.data;
        this.$emit("success");
      })
      .catch((response: AxiosResponse) => {
        console.log("[AddItem.vue]" + "catch");
      });

    this.$emit("success");
  }

  cancel() {
    this.$emit("cancel");
  }
}
</script>