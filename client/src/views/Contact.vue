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
         <iframe width="600" height="450" id="gmap_canvas" src="https://maps.google.com/maps?q=slodoco&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
         </iframe></div>
         </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios, { AxiosResponse } from "axios";
import { APIConfig } from "../utils/api.utils";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Contact extends Vue {
}
</script>

<style lang="scss" scoped>
.cards {
  padding:10px;
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
