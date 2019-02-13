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
      <div class="add-item-form">
        <input type="text" v-model="newItemTitle" placeholder="new shop item name...">
        <input type="number" min="0.01" step="0.01" v-model="newItemPrice" placeholder="price...">
        <input type="text" v-model="newItemImage" placeholder="image url...">
        etc.....
        <button class="button add_button" v-on:click="addItem">submit</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios, { AxiosResponse } from "axios";
import { APIConfig } from "../utils/api.utils";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class AdminEditProduct extends Vue {
  newItemTitle: string = "";
  newItemPrice: number | string = "";
  newItemImage: string = "";

  get isLoggedIn(): boolean {
    return !!this.$store.state.userId;
  }

  addItem() {
    axios.post(APIConfig.buildUrl("/newitem"), {
      name: this.newItemTitle,
      price: this.newItemPrice,
      brand: "",
      categories: "",
      image: this.newItemImage,
      delivery: true,
      quantity: 1,
      description: "blah"
    }).then((response: AxiosResponse) => {
      console.log(response.data);
      this.$emit("success");
      this.newItemTitle = "";
      this.newItemPrice = "";
      this.newItemImage = "";
    }).catch((response: AxiosResponse) => {
      console.log("catch");
    });
  }
}
</script>

<style scoped>
.add-item-form {
  display: flex;
  flex-direction: column;
  width: 500px;
  justify-content: center;
  padding: 50px;
}
</style>
