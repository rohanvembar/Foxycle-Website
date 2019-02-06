<template>
<div id="app" class="main-background ">
    <div class="navbar-padding"></div>
    <nav class="navbar is-info navbar-custom">
    <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="#" style="font-weight:bold;">
            
          <img src="./assets/transparentlogo.png" class="logo-padding"/>
            <hr> foxycle
          </a>
        </div>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
            <!-- TODO - doesnt work when resizing window -->
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>

        </a>
    <div id="navMenu" class="navbar-menu">
    <div class="navbar-end">
            <router-link class="navbar-item " to="/" exact-active-class="is-active">home</router-link>          
              <router-link class="navbar-item" to="/shop" exact-active-class="is-active">shop</router-link>
              <router-link class="navbar-item" to="/services" exact-active-class="is-active">services</router-link>
              <router-link class="navbar-item" to="/contact" exact-active-class="is-active">contact</router-link>
              <router-link class="navbar-item" to="/ordertracking" exact-active-class="is-active">track order</router-link>
              <a class="navbar-item" v-on:click="showLoginModal()">
                log in
              </a>
              <router-link class="navbar-item" to="/cart" exact-active-class="is-active">
                <font-awesome-icon icon="shopping-cart" />
              </router-link>
    </div>
    </div>
    </div>
    </nav>    
    
    <router-view/>
    <Signup v-bind:is-showing="showSignup" v-on:success="successSignup()" v-on:cancel="cancelSignup()"/>
    <SignIn v-bind:is-showing="showLogin" v-on:success="successSignin()" v-on:cancel="cancelSignin()"/>
  </div>

</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import { Component } from "vue-property-decorator";
import Signup from "@/components/Signup.vue";
import SignIn from "@/components/SignIn.vue";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { APIConfig } from "./utils/api.utils";

library.add(faShoppingCart);

Vue.component('font-awesome-icon', FontAwesomeIcon);

@Component({
  components: {
    Signup,
    SignIn
  }
})
export default class App extends Vue {
  public showSignup: boolean = false;
  public showLogin: boolean = false;
  showSignupModal() {
    this.showSignup = true;
  }
  successSignup() {
    this.showSignup = false;
  }
  cancelSignup() {
    this.showSignup = false;
  }
  showLoginModal() {
    this.showLogin = true;
  }
  successLogin() {
    this.showLogin = false;
  }
  cancelLogin() {
    this.showLogin = false;
  }
  get isLoggedIn(): boolean {
    return !!this.$store.state.userId;
  }
  logout() {
    debugger;
    axios
      .post(APIConfig.buildUrl("/logout"), null, {
        headers: { token: this.$store.state.userToken }
      })
      .then(() => {
        this.$store.commit("logout");
      });
  }
}
</script>


<style lang="scss">
@import "~bulma/css/bulma.css";
@import "./assets/mainstyle.scss";


</style>