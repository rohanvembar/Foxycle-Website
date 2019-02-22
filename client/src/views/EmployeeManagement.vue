<template>
  <div>
    <div v-if="!isLoggedIn | !isOwner" class="error">
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
      <button class="button" v-on:click="addEmployee">add employee</button>
      <table class="center">
        <th>First Name</th>
        <th>Last Name</th>
        <th>Employee ID</th>
        <th>Role</th>
        <th></th>
        <th></th>
        <tr v-for="(empl, index) in employees" v-bind:key="index">
          <td>{{empl.firstName}}</td>
          <td>{{empl.lastName}}</td>
          <td>{{empl.emailAddress}}</td>
          <td>{{empl.role == 1 ? "Admin" : "Employee"}}</td>
          <td>
            <button class="button" v-on:click="changeRole(empl)">change role</button>
          </td>
          <td>
            <button v-if="empl.role == 0" class="button" v-on:click="deleteEmployee(empl)">delete</button>
          </td>
        </tr>
      </table>
      <Signup
        v-bind:is-showing="showSignup"
        v-on:success="successSignup()"
        v-on:cancel="cancelSignup()"
      />
    </div>
  </div>
</template>


<script lang="ts">
import axios, { AxiosResponse, AxiosError } from "axios";
import { APIConfig } from "../utils/api.utils";
import { Component, Prop, Vue } from "vue-property-decorator";
import { iUser } from "@/models/user.interface";
import Signup from "@/components/Signup.vue";

@Component({
  components: {
    Signup
  }
})
export default class EmployeeManagement extends Vue {
  public showSignup: boolean = false;
  error: string | boolean = false;
  employees: iUser[] = [];
  role: number = 0;

  get isOwner(): boolean {
    this.role = this.$store.state.userRole.userRole;
    return this.role == 1;
  }
  get isLoggedIn(): boolean {
    return !!this.$store.state.userId;
  }

  getAllEmployees() {
    this.error = false;
    axios
      .get(APIConfig.buildUrl("/employees"))
      .then((response: AxiosResponse) => {
        this.employees = response.data;
        this.$emit("success");
      })
      .catch((res: AxiosError) => {
        this.error = res.response && res.response.data.error;
        console.log("[EmployeeManagement.vue]" + this.error);
      });
  }

  changeRole(employee: iUser) {
    this.error = false;
    axios
      .put(APIConfig.buildUrl("/employees/" + employee.id))
      .then((response: AxiosResponse) => {
        const editedEmpl = response.data;
        this.employees = this.employees.map(function(empl) {
          return empl.id == editedEmpl.id ? editedEmpl : empl;
        });
        this.$emit("success");
      })
      .catch((response: AxiosResponse) => {
        console.log("[EmployeeManagement.vue]" + "catch");
        this.error = "bad";
      });
  }

  deleteEmployee(empl: iUser) {
    this.error = false;
    axios
      .delete(APIConfig.buildUrl("/employees/" + empl.id))
      .then((response: AxiosResponse) => {
        const deletedEmployee = response.data;
        this.employees = this.employees.filter(employee => {
          return employee.id != deletedEmployee.id;
        });
        this.$emit("success");
      })
      .catch((response: AxiosResponse) => {
        this.error = "bad";
      });
  }

  addEmployee() {
    this.showSignupModal();
  }

  created() {
    this.getAllEmployees();
  }
  showSignupModal() {
    this.showSignup = true;
  }
  successSignup() {
    this.showSignup = false;
    this.getAllEmployees();
  }
  cancelSignup() {
    this.showSignup = false;
  }
}
</script>
<style scoped>
table,
th,
td {
  border: 1px solid black;
}
.center {
  margin-left: auto;
  margin-right: auto;
}
</style>
