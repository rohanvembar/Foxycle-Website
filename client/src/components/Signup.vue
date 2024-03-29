<template>
  <modal
    v-bind:is-showing="isShowing"
    title="add employee"
    success-button="Add Employee"
    formName="addEmployeeForm"
    v-on:success="success"
    v-on:cancel="cancel"
  >
    <form id="addEmployeeForm" v-on:submit.prevent="success">
      <b-notification v-if="error" type="is-danger">{{ error }}</b-notification>

      <div class="field"> 
        <label class="label">First Name</label>
        <b-field>
          <b-input
            required
            type="text"
            minlength="2"
            placeholder="first name"
            v-model="signup.firstName"
          ></b-input>
        </b-field>
      </div>
      <div class="field">
        <label class="label">Last Name</label>
        <b-field>
          <b-input
            required
            type="text"
            minlength="2"
            placeholder="last name"
            v-model="signup.lastName"
          ></b-input>
        </b-field>
      </div>
      <div class="field">
        <label class="label">Employee ID</label>
        <b-field>
          <b-input
            required
            type="text"
            minlength="3"
            placeholder="employee id"
            v-model="signup.emailAddress"
          ></b-input>
        </b-field>
      </div>
      <div class="field">
        <label class="label">Password</label>
        <b-field>
          <b-input
            required
            type="password"
            minlength="4"
            maxlength="16"
            placeholder="password"
            v-model="signup.password"
            password-reveal
          ></b-input>
        </b-field>
      </div>
      <div class="field">
        <label class="label">Role</label>
        <div class="control">
          <b-radio
            v-on:input="changeRole(1)"
            name="role"
            native-value="Admin"
          >Admin</b-radio>
          <b-radio
            v-on:input="changeRole(0)"
            name="role"
            native-value="Employee"
          >Employee</b-radio>
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
import { iUser } from "../models/user.interface";

@Component({
  components: { Modal }
})
export default class Signup extends Vue {
  @Prop(Boolean) isShowing: boolean = false;
  signup: SignupForm = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
    role: 0
  };
  error: string | boolean = false;

  changeRole(r: number) {
    this.signup.role = r;
    console.log("changing: " + this.signup.role);
  }

  success() {
    this.error = false;
    console.log(this.signup.role);
    axios
      .post(APIConfig.buildUrl("/users"), {
        ...this.signup
      })
      .then((response: AxiosResponse<iUser>) => {
        this.$emit("success");
        this.goodToast();
      })
      .catch((errorResponse: any) => {
        this.error = errorResponse.response.data.reason;
      });
  }

  cancel() {
    this.$emit("cancel");
  }

  goodToast() {
    this.$toast.open({
      duration: 3000,
      message: `new employee added successfully`,
      position: "is-bottom",
      type: "is-primary"
    });
  }
}

export interface SignupForm {
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;
  role: number;
}
</script>
