<template>
  <modal v-bind:is-showing="isShowing" title="Sign In" success-button="Sign In" v-on:success="success" v-on:cancel="cancel">
    <form  v-on:submit.prevent="onSubmit">
      <p v-if="error">{{ error }}</p>
      <div class="field">
        <label class="label">Email Address</label>
        <div class="control">
          <input class="input" type="text" placeholder="email address" v-bind="signup.emailAddress"/>
        </div>
      </div>
      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input class="input" type="password" placeholder="password" v-bind="signup.firstName"/>
        </div>
      </div>
    </form>
  </modal>
</template>

<script lang="ts">
import axios, { AxiosResponse } from "axios";
import { APIConfig } from "../utils/api.utils";
import { Component, Prop, Vue } from "vue-property-decorator";
import Modal from "./Modal.vue";

@Component({
  components: {
    Modal
  }
})
export default class SignIn extends Vue {
  signin: SignInForm = {
    emailAddress: "",
    password: ""
  };
  error: string | boolean = false;
  @Prop(Boolean) isShowing: boolean = false;

  success() {
    this.error = false;
    axios.post(APIConfig.buildUrl('/signin'), {
      ...this.signin
    }).then((response: AxiosResponse<SignInResponse>) => {
      this.$store.commit('Sign In', response.data.token);
      this.$emit("success");
    }).catch((reason: any) => {
      this.error = reason;
    })
  }

  cancel() {
    this.$emit("cancel");
  }
}

interface SignInResponse {
  token: string
}

export interface SignInForm {
  emailAddress: string;
  password: string;
}
</script>
