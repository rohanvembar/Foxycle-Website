<template>
<div id="app" class="main-background">
    <div class="navbar bar main-background">
      <div class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <router-link class="button white-font blue-background" to="/ordertracking" exact-active-class="is-active">Track Order</router-link>
              <a class="button white-font blue-background" v-on:click="showLoginModal()">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="navbar blue-background bar">
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link class="is-tab logo-padding" to="/">
            <img alt="Foxycle logo" src="./assets/transparentlogo.png">
          </router-link> 
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <router-link class="navbar-item is-tab white-font" to="/" exact-active-class="is-active">Home</router-link>          
              <router-link class="navbar-item is-tab white-font" to="/shop" exact-active-class="is-active">Shop</router-link>
              <router-link class="navbar-item is-tab white-font" to="/services" exact-active-class="is-active">Services</router-link>
              <router-link class="navbar-item is-tab white-font" to="/contact" exact-active-class="is-active">Contact</router-link>
              <router-link class="navbar-item is-tab white-font" to="/cart" exact-active-class="is-active">
                <font-awesome-icon icon="shopping-cart" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
    <Signup v-bind:is-showing="showSignup" v-on:success="successSignup()" v-on:cancel="cancelSignup()"/>
    <SignIn v-bind:is-showing="showLogin" v-on:success="successSignin()" v-on:cancel="cancelSignin()"/>
  </div>

</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Signup from "@/components/Signup.vue";
import SignIn from "@/components/SignIn.vue";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

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
  successSignin() {
    this.showLogin = false;
  }
  cancelSignin() {
    this.showLogin = false;
  }
}
</script>


<style lang="scss">
@import "~bulma/css/bulma.css";
@import "./assets/mainstyle.scss";

.blue-background {
  background-color: #3c90FB;
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
