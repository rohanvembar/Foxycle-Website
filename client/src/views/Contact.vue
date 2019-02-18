<template>
  <div class="main-background cards">
    <div class="box">
      <p class="title">Hours</p>
      <div class="content hours">
        <div>
          <p>Monday to Friday:</p>
          <p>Saturday:</p>
          <p>Sunday:</p>
        </div>
        <div class="times">
          <p>10 AM - 6 PM</p>
          <p>10 AM - 5 PM</p>
          <p>12 PM - 5 PM</p>
        </div>
      </div>
      <p class="title">Phone</p>
      <div class="content">
        <p>(805) 111-1111</p>
      </div>
      <p class="title">Address</p>
      <div class="content">
        <p>1 Grand Avenue</p>
        <p>San Luis Obispo, CA 93407</p>
      </div>
      <p class="title">Email</p>
      <div class="content">
        <p>info@foxycle.com</p>
      </div>
    </div>
    <div>
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3256.4995892881607!2d-120.67430488460542!3d35.29356598028646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ecf051fa383c77%3A0x95e0baf262f65f3a!2sSloDoCo+Donuts!5e0!3m2!1sen!2sus!4v1550464765757"
            width="600"
            height="450"
            frameborder="0"
            style="border:0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios, { AxiosResponse } from "axios";
import { APIConfig } from "../utils/api.utils";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Contact extends Vue {}
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
