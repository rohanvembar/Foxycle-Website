<template>
  <modal
    v-bind:is-showing="isShowing"
    title="add an item"
    success-button="Add"
    v-on:success="success"
    v-on:cancel="cancel"
  >
    <form v-on:submit.prevent="onSubmit">
      <div class="field">
        <label class="label">Item Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="item name" v-model="newItemTitle">
        </div>
      </div>
      <div class="field">
        <label class="label">Price</label>
        <div class="control">
          <input class="input" type="number" placeholder="price" v-model="newItemPrice">
        </div>
      </div>
      <div class="field">
        <label class="label">Image URL</label>
        <div class="control">
          <input class="input" type="text" placeholder="url" v-model="newItemImage">
        </div>
      </div>
      <div class="field">
        <label class="label">Quantity on Hand</label>
        <div class="control">
          <input class="input" type="number" placeholder="quantity" required v-model="newItemQuantity">
        </div>
      </div>
      <div class="field">
        <label class="label">Item Description</label>
        <div class="control">
          <textarea class="textarea has-fixed-size" placeholder="description" v-model="newItemDescription"></textarea>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input
            id="storePickupSwitch"
            type="checkbox"
            name="switchColorSuccess"
            class="switch is-info is-rounded"
            checked="checked"
            v-model="newItemShipping"
          >
          <label for="storePickupSwitch">Available to Ship</label>
        </div>
      </div>
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
  newItemImage: string = "";
  newItemDescription: string = "";

  newItemQuantity: number | string = "";
  savedItem: iShopItem | string = "";
  newItemShipping: boolean;

  success() {
    axios
      .post(APIConfig.buildUrl("/newitem"), {
        name: this.newItemTitle,
        price: this.newItemPrice,
        brand: "",
        categories: "",
        image: this.newItemImage,
        delivery: this.newItemShipping,
        quantity: this.newItemQuantity,
        description: this.newItemDescription
      })
      .then((response: AxiosResponse) => {
        console.log("[AddItem.vue]" + response.data);
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