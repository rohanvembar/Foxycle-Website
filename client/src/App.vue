<template>
<div id="app" class="main-background">
    <div class="navbar bar main-background">
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item is-tab" to="/" exact-active-class="is-active">Home</router-link>
          <router-link class="navbar-item is-tab" to="/about" exact-active-class="is-active">About</router-link>
          <router-link  v-if="isLoggedIn" class="navbar-item is-tab" to="/todos" exact-active-class="is-active">My ToDos</router-link> 
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary" v-if="!isLoggedIn" v-on:click="showSignupModal()">
                <strong>Sign up</strong>
              </a>
              <router-link
                class="button is-text"
                v-if="isLoggedIn"
                to="/my-profile"
                exact-active-class="is-active">My Profile</router-link>
              <a class="button is-light" v-if="!isLoggedIn" v-on:click="showLoginModal()">Log in</a>
              <a class="button is-light" v-if="isLoggedIn" v-on:click="logout">Log out</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view class="container"/>
    <Signup
      v-bind:is-showing="showSignup"
      v-on:success="successSignup()"
      v-on:cancel="cancelSignup()"
    />
    <Login v-bind:is-showing="showLogin" v-on:success="successLogin()" v-on:cancel="cancelLogin()"/>
  </div>

</template>

<script lang="ts">
import axios from "axios";
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Signup from "@/components/Signup.vue";
import Login from "@/components/Login.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { APIConfig } from "@/utils/api.utils";

library.add(faShoppingCart);

Vue.component("font-awesome-icon", FontAwesomeIcon);

@Component({
  components: {
    Signup,
    Login
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

.blue-background {
  background-color: #3c90fb;
}

.bar {
  width: 90%;
  border-radius: 15px;
  margin: auto;
}

.white-font {
  color: white;
}

.logo-padding {
  padding: 10px;
}
</style>
