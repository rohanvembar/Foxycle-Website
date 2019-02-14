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
      <div class="maincolumns">
        <div class="tile is-parent is-vertical">
          <article class="tile is-child notification is-primary">
            <p class="title">orders</p>
            <p class="subtitle">
              {{newOrders}} new orders today
              <span class="right">
                <router-link
                  class="button is-dark is-focused is-medium is-rounded"
                  to="/editorder"
                  exact-active-class="is-active"
                >add or edit</router-link>
              </span>
            </p>
          </article>
          <article class="tile is-child notification is-warning">
            <p class="title">inventory</p>
            <p class="subtitle">
              {{outOfStock}} items out of stock
              <span class="right">
                <router-link
                  class="button is-dark is-focused is-medium is-rounded"
                  to="/editproduct"
                  exact-active-class="is-active"
                >add or edit</router-link>
              </span>
            </p>
          </article>
          <article class="tile is-child notification is-info">
            <p class="title">foxycle info</p>
            <p class="subtitle">
              hours, services, announcements, etc.
              <span class="right">
                <router-link
                  class="button is-dark is-focused is-medium is-rounded"
                  to="/"
                  exact-active-class="is-active"
                >add or edit</router-link>
              </span>
            </p>
          </article>
          <article class="tile is-child notification is-link">
            <p class="title">employees</p>
            <p class="subtitle">
              add, remove, change permissions
              <span class="right">
                <router-link
                  class="button is-dark is-focused is-medium is-rounded"
                  to="/employeemanagement"
                  exact-active-class="is-active"
                >add or edit</router-link>
              </span>
            </p>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>



<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios, { AxiosResponse, AxiosError } from "axios";
import { APIConfig } from "../utils/api.utils";

export default class AdminHome extends Vue {
  newOrders: number = 5;
  outOfStock: number = 14;
  userId: number = 0;

  get isLoggedIn(): boolean {
    this.userId = this.$store.state.userId;
    return !!this.$store.state.userId;
  }
}
</script>

<style lang="scss">
.maincolumns {
  margin: 0 auto;
  width: 50%;
  padding-top: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.maintitle {
  margin: 0 auto;
  width: 50%;
  padding-top: 25px;

  display: flex;
  justify-content: center;
  align-items: center;
}
.is-child:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  // transition: box-shadow 0.4s ease-in;
  //   transition: box-shadow 0.4s ease-out;
  -webkit-transform: scale(1.01, 1.01);
  transform: scale(1.01, 1.01);
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.right {
  position: absolute;
  right: 0px;
  bottom: 15px;
  width: 300px;
  text-align: right;
  padding-right: 15px;
}
</style>
