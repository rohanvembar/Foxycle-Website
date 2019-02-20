<template>
  <div class="main-background cards">
    <div class="contacts">
      <article v-for="(a, index) in contacts" v-bind:key="index">
        <p class="title">Hours</p>
        <div class="content hours">
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
            <p>{{a.monHours}}</p>
            <p>{{a.tueHours}}</p>
            <p>{{a.wedHours}}</p>
            <p>{{a.thuHours}}</p>
            <p>{{a.friHours}}</p>
            <p>{{a.satHours}}</p>
            <p>{{a.sunHours}}</p>
          </div>
        </div>
        <p class="title">Phone</p>
        <div class="content">
          <p>{{a.phoneNumber}}</p>
        </div>
        <p class="title">Address</p>
        <div class="content">
          <p>{{a.address}}</p>
        </div>
        <p class="title">Email</p>
        <div class="content">
          <p>{{a.email}}</p>
        </div>
      </article>
    </div>
    <div>
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            width="600"
            height="450"
            id="gmap_canvas"
            src= "https://maps.google.com/maps?q=slodoco&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios, { AxiosResponse, AxiosError } from "axios";
import { APIConfig } from "../utils/api.utils";
import { iContact } from "../models/contact.interface";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Contact extends Vue {
  error: string | boolean = false;
  contacts: iContact[] = [];

  created() {
    this.getAllContacts();
  }

  getAllContacts() {
    this.error = false;
    axios
      .get(APIConfig.buildUrl("/contacts"), {
        headers: {
          token: this.$store.state.userToken
        }
      })
      .then((response: AxiosResponse) => {
        this.contacts = response.data;
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
.cards {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.title {
  font-weight: bold;
  font-size: 20px;
  text-decoration: underline;
}

.content {
  font-size: 15px;
  line-height: 10px;
}

.hours {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.times {
  padding-left: 15px;
}
</style>
