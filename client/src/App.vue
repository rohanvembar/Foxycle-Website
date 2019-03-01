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
            <b-dropdown v-if="!isLoggedIn" position="is-bottom-left">
              <a class="navbar-item is-info" slot="trigger">
                <span>
                  log in
                  <span class="icon is-small is-left">
                    <i class="fas fa-caret-down"></i>
                  </span>
                </span>
              </a>
              <b-dropdown-item custom paddingless>
                <form @submit.prevent="login">
                  <div class="modal-card" style="width:300px;">
                    <section class="modal-card-body">
                      <b-notification v-if="loginFailed" type="is-danger">Incorrect ID or Password</b-notification>
                      <b-field label="employee id">
                        <b-input
                          v-model="signup.emailAddress"
                          type="text"
                          placeholder=" your employee id"
                          required
                          rounded
                        ></b-input>
                      </b-field>

                      <b-field label="password">
                        <b-input
                          v-model="signup.password"
                          type="password"
                          password-reveal
                          placeholder="your password"
                          required
                          rounded
                        ></b-input>
                      </b-field>
                    </section>
                    <footer class="modal-card-foot">
                      <button
                        class="button is-primary is-rounded is-focused"
                        style="width:100%"
                      >login</button>
                    </footer>
                  </div>
                </form>
              </b-dropdown-item>
            </b-dropdown>
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
            <b-dropdown>
              <a v-if="isLoggedIn" class="navbar-item is-info" slot="trigger">
                <span>
                  my account
                  <span class="icon is-small is-left">
                    <i class="fas fa-caret-down"></i>
                  </span>
                </span>
              </a>
              <b-dropdown-item custom>
                <strong>Welcome, {{name}}</strong>
              </b-dropdown-item>
              <hr class="navbar-divider">

              <router-link
                to="/employeemanagement"
                exact-active-class="is-active"
                v-if="isLoggedIn && isOwner"
              >
                <b-dropdown-item class="menu-selectors">
                  <span class="navicon">
                    <font-awesome-icon icon="users" fixed-width/>
                  </span>
                  employees
                </b-dropdown-item>
              </router-link>
              <router-link to="/editproduct" exact-active-class="is-active" v-if="isLoggedIn">
                <b-dropdown-item class="menu-selectors">
                  <span class="navicon">
                    <font-awesome-icon icon="truck-loading" fixed-width/>
                  </span>
                  inventory
                </b-dropdown-item>
              </router-link>
              <router-link to="/editorder" exact-active-class="is-active" v-if="isLoggedIn">
                <b-dropdown-item class="menu-selectors">
                  <span class="navicon">
                    <font-awesome-icon icon="receipt" fixed-width/>
                  </span>
                  orders
                </b-dropdown-item>
              </router-link>
              <hr class="navbar-divider">
              <router-link to="/editinfo" exact-active-class="is-active" v-if="isLoggedIn">
                <b-dropdown-item class="menu-selectors">
                  <span class="navicon">
                    <font-awesome-icon icon="info-circle" fixed-width/>
                  </span>
                  foxycle info
                </b-dropdown-item>
              </router-link>
              <hr class="navbar-divider">
              <b-dropdown-item class="menu-selectors" v-on:click="logout()">
                <span class="navicon">
                  <font-awesome-icon icon="sign-out-alt" fixed-width/>
                </span>
                log out
              </b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
      </div>
    </nav>

    <router-view/>
    <div v-if="!isLoggedIn" class="footer2">
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
import axios, { AxiosResponse, AxiosError } from "axios";
import { Component } from "vue-property-decorator";
import Signup from "@/components/Signup.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { APIConfig } from "./utils/api.utils";
import { iUser } from "./models/user.interface";

library.add(faShoppingCart);
library.add(faTools);
library.add(faBullhorn);
library.add(faInfoCircle);

Vue.component("font-awesome-icon", FontAwesomeIcon);

@Component({
  components: {
    Signup
  }
})
export default class App extends Vue {
  public showSignup: boolean = false;
  public showLogin: boolean = false;
  public showEmployee: boolean = false;
  loginFailed: boolean = false;
  error: string | boolean = false;
  name: string = "";
  userName: string = "";
  role: number = 0;
  signup: LoginForm = {
    emailAddress: "",
    password: ""
  };

  getUserName() {
    this.error = false;
    axios
      .get(APIConfig.buildUrl("/users/" + this.$store.state.userId))
      .then((response: AxiosResponse) => {
        this.name = response.data.user.firstName;
        console.log(this.$store.state.userId);
        console.log(this.name);
        this.$emit("success");
      })
      .catch((res: AxiosError) => {
        this.error = res.response && res.response.data.error;
        console.log("[app.vue]" + this.error);
      });
  }

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
  get isLoggedIn(): boolean {
    return !!this.$store.state.userId;
  }

  login() {
    this.error = false;
    axios
      .post(APIConfig.buildUrl("/login"), {
        emailAddress: this.signup.emailAddress,
        password: this.signup.password
      })
      .then((response: AxiosResponse<LoginResponse>) => {
        this.loginFailed = false;

        this.$store.commit("login", {
          token: response.data.token,
          userid: response.data.userId
        });
        this.$store.commit("changeRole", {
          userRole: response.data.role
        });
        this.$emit("success");
        this.getUserName();
        this.$router.push({ path: "/admin" });
      })
      .catch((error: AxiosError) => {
        this.loginFailed = true;
        console.log("error");
        this.error = error.code;
      });
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
interface LoginResponse {
  token: string;
  userId: number;
  role: number;
}
export interface LoginForm {
  emailAddress: string;
  password: string;
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
@import "./assets/navbar.sass";

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

.menu-selectors {
  color: hsl(217, 71%, 53%);
}
</style>
