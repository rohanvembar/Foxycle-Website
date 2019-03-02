<template>
  <div>
    <div class="main-background row-sections">
      <div class="column-sections">
        <div class="box manage-contact">
          <h3 class="message-header">Manage Info</h3>
          <form v-on:submit.prevent="saveContact()">
            <article class="row-sections" v-for="(a, index) in contacts" v-bind:key="index">
              <div class="column-sections">
                <p class="title">Hours</p>
                <div class="content hours row-sections">
                  <div>
                    <p>Monday:</p>
                    <p>Tuesday:</p>
                    <p>Wednesday:</p>
                    <p>Thursday:</p>
                    <p>Friday:</p>
                    <p>Saturday:</p>
                    <p>Sunday:</p>
                  </div>
                  <div class="times">
                    <p>
                      <input required type="text" v-model="mon">
                    </p>
                    <p>
                      <input required type="text" v-model="tues">
                    </p>
                    <p>
                      <input required type="text" v-model="wed">
                    </p>
                    <p>
                      <input required type="text" v-model="thurs">
                    </p>
                    <p>
                      <input required type="text" v-model="fri">
                    </p>
                    <p>
                      <input required type="text" v-model="sat">
                    </p>
                    <p>
                      <input required type="text" v-model="sun">
                    </p>
                  </div>
                </div>
              </div>
              <div class="column-sections">
                <p class="title">Phone</p>
                <div class="content">
                  <p>
                    <input required type="tel" v-model="phone">
                  </p>
                </div>
                <p class="title">Address</p>
                <div class="content">
                  <p>
                    <textarea required type="text" v-model="address"></textarea>
                  </p>
                </div>
                <p class="title">Email</p>
                <div class="content">
                  <p>
                    <input required type="text" v-model="email">
                  </p>
                </div>
              </div>
            </article>
            <button class="button is-primary is-rounded" style="width:100%;margin-top:15px;">save</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import axios, { AxiosResponse, AxiosError } from "axios";
import { APIConfig } from "../utils/api.utils";
import { Component, Prop, Vue } from "vue-property-decorator";
import { iContact } from "../models/contact.interface";

@Component({})
export default class EditContact extends Vue {
  error: string | boolean = false;
  contacts: iContact[] = [];
  mon: string = "";
  tues: string = "";
  wed: string = "";
  thurs: string = "";
  fri: string = "";
  sat: string = "";
  sun: string = "";
  phone: string = "";
  address: string = "";
  email: string = "";

  created() {
    this.getAllContacts();
  }

  saveContact() {
    console.log("[EditContact] saving contact");
    axios
      .put(APIConfig.buildUrl("/contacts/" + this.contacts[0].id), {
        monHours: this.mon,
        tueHours: this.tues,
        wedHours: this.wed,
        thuHours: this.thurs,
        friHours: this.fri,
        satHours: this.sat,
        sunHours: this.sun,
        phoneNumber: this.phone,
        address: this.address,
        email: this.email
      })
      .then((response: AxiosResponse) => {
        this.contacts[0] = response.data;
        this.$emit("success");
        this.goodToast();
      })
      .catch((response: AxiosResponse) => {
        console.log("catch");
        this.error = "bad";
      });
  }

  goodToast() {
    this.$toast.open({
      duration: 2000,
      message: `contact info saved successfully`,
      position: "is-bottom",
      type: "is-primary"
    });
  }

  getAllContacts() {
    this.error = false;
    axios
      .get(APIConfig.buildUrl("/contacts"))
      .then((response: AxiosResponse) => {
        this.contacts = response.data;
        this.mon = this.contacts[0].monHours;
        this.tues = this.contacts[0].tueHours;
        this.wed = this.contacts[0].wedHours;
        this.thurs = this.contacts[0].thuHours;
        this.fri = this.contacts[0].friHours;
        this.sat = this.contacts[0].satHours;
        this.sun = this.contacts[0].sunHours;
        this.phone = this.contacts[0].phoneNumber;
        this.address = this.contacts[0].address;
        this.email = this.contacts[0].email;
        console.log(response.data);
        this.$emit("success");
      })
      .catch((res: AxiosError) => {
        this.error = res.response && res.response.data.error;
        console.log(this.error);
      });
  }
}
</script>

<style lang="scss" scoped>
.header {
  align-items: left;
  padding-top: 30px;
  padding-left: 10px;
  margin-left: 200px;
  font-size: 50px;
  font-weight: bold;
}
.row-sections {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
}
.column-sections {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.manage-contact {
  width: 130%;
}
</style>
