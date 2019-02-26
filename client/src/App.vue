<template>
  <body class="has-navbar-fixed-top">

  <div id="app" class="main-background has-navbar-fixed-top">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">
    <link
      rel="stylesheet"
      href="//cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css"
    >

    <div class="navbar-padding"></div>
    <nav class="navbar is-fixed-top is-info">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="#" style="font-weight:bold;">
            <img src="./assets/transparentlogo.png" class="logo-padding">
            <hr>foxycle
          </a>
        </div>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <!-- TODO - doesnt work when resizing window -->
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
        <div id="navMenu" class="navbar-menu">
          <div class="navbar-start">
            <div class="navbar-item"></div>
            <router-link class="navbar-item" to="/" exact-active-class="is-active">home</router-link>
            <router-link class="navbar-item" to="/shop" exact-active-class="is-active">shop</router-link>
            <router-link class="navbar-item" to="/services" exact-active-class="is-active">services</router-link>
            <router-link class="navbar-item" to="/contact" exact-active-class="is-active">contact</router-link>
            <router-link
              class="navbar-item"
              v-if="isLoggedIn"
              to="/admin"
              exact-active-class="is-active"
            >employee home</router-link>
          </div>

          <div class="navbar-end">
            <router-link
              class="navbar-item"
              to="/ordertracking"
              exact-active-class="is-active"
            >track order</router-link>
            <a class="navbar-item" v-if="!isLoggedIn" v-on:click="showLoginModal()">log in</a>

            <router-link
              class="navbar-item"
              to="/cart"
              v-if="!isLoggedIn"
              exact-active-class="is-active"
            >
              <div
                v-bind:class="{ 'badge': this.$store.state.items.length > 0 }"
                :data-badge="this.$store.state.items.length"
              >
                <font-awesome-icon icon="shopping-cart"/>
              </div>
            </router-link>

            <div class="navbar-item has-dropdown is-hoverable" v-if="isLoggedIn">
              <a class="navbar-link">manage</a>
              <div class="navbar-dropdown">
                <router-link
                  class="navbar-item"
                  to="/employeemanagement"
                  exact-active-class="is-active"
                  v-if="isLoggedIn && isOwner"
                >
                  <span class="navicon">
                    <font-awesome-icon icon="users" fixed-width/>
                  </span>employees
                </router-link>
                <router-link
                  class="navbar-item"
                  to="/editorder"
                  exact-active-class="is-active"
                  v-if="isLoggedIn"
                >
                  <div class="navicon">
                    <font-awesome-icon icon="receipt" fixed-width/>
                  </div>orders
                </router-link>
                <router-link
                  class="navbar-item"
                  to="/editproduct"
                  exact-active-class="is-active"
                  v-if="isLoggedIn"
                >
                  <div class="navicon">
                    <font-awesome-icon icon="truck-loading" fixed-width/>
                  </div>inventory
                </router-link>
                <hr class="navbar-divider">

                <router-link
                  class="navbar-item"
                  to="/editinfo"
                  exact-active-class="is-active"
                  v-if="isLoggedIn"
                >
                  <div class="navicon">
                    <font-awesome-icon icon="info-circle" fixed-width/>
                  </div>foxycle info
                </router-link>
              </div>
            </div>
            <a class="navbar-item" v-if="isLoggedIn" v-on:click="logout()">
              <font-awesome-icon icon="sign-out-alt"/>
            </a>
          </div>
        </div>
      </div>
    </nav>

    <router-view/>
    <SignIn
      v-bind:is-showing="showLogin"
      v-on:success="successLogin()"
      v-on:cancel="cancelLogin()"
    />
    <div class="footer2">
      <div class="content has-text-centered v-align">
        <p>
          <strong style="padding-right:2em">&copy; Foxycle</strong>
          <i class="fas fa-map-marker-alt"></i> 1 Grand Avenue, San Luis Obispo, CA 93407
          <i
            class="fas fa-clock"
            style="padding-left: 2em"
          ></i>
          Mon-Fri: 10AM to 6PM • Sat & Sun: 11AM-5PM
          <i
            class="fas fa-phone"
            style="padding-left: 2em"
          ></i>
          (805) 111-1111
          <i class="fas fa-envelope" style="padding-left: 2em"></i>
          info@foxycle.com
        </p>
      </div>
    </div>
  </div>
  </body>
</template>

<script lang="ts">
import Vue from "vue";
import Buefy from "buefy";
Vue.use(Buefy, { defaultIconPack: "fas" });
import axios from "axios";
import { Component } from "vue-property-decorator";
import Signup from "@/components/Signup.vue";
import SignIn from "@/components/SignIn.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { APIConfig } from "./utils/api.utils";

library.add(faShoppingCart);
library.add(faTools);
library.add(faBullhorn);
library.add(faInfoCircle);

Vue.component("font-awesome-icon", FontAwesomeIcon);

@Component({
  components: {
    Signup,
    SignIn
  }
})
export default class App extends Vue {
  public showSignup: boolean = false;
  public showLogin: boolean = false;
  public showEmployee: boolean = false;
  role: number = 0;

  get isOwner(): boolean {
    this.role = this.$store.state.userRole.userRole;
    return this.role == 1;
  }
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
    this.showEmployee = true;
    this.$router.push({ path: "/admin" });
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
        this.$router.push({ path: "/" });
      });
  }
}
</script>


<style lang="scss">
@import "~bulma/sass/utilities/_all";

$colors: (
  "white": (
    $white,
    $black
  ),
  "black": (
    $black,
    $white
  ),
  "light": (
    $light,
    $light-invert
  ),
  "dark": (
    $dark,
    $dark-invert
  ),
  "link": (
    hsl(217, 71%, 53%),
    findColorInvert($primary)
  ),
  "primary": (
    $primary,
    $primary-invert
  ),
  "info": (
    $info,
    $info-invert
  ),
  "success": (
    $success,
    $success-invert
  ),
  "warning": (
    $warning,
    $warning-invert
  ),
  "danger": (
    $danger,
    $danger-invert
  )
);

@import "~bulma";
@import "~buefy/src/scss/buefy";
@import "./assets/mainstyle.scss";

.navicon {
  padding-right: 10px;
}

.navbar-custom {
  border-radius: 50px;
}

.footer2 {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 50px;
  background-color: #f8f8f8;
  width: 100%;
  z-index: 4;
}

.v-align {
  padding-top: 10px;
}
</style>
