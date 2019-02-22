<template>
  <div class="home">
    <div class="carousel-div"> 
      <carousel 
      :autoplay="true" :autoplayTimeout=5000
      :perPage=1 paginationActiveColor="#239CEC"
      paginationColor="#b2ebd1" :speed=300 :loop="true">
        <slide class="VueCarousel-slide">
          <img src="../assets/bikefield.jpg">
        </slide>
        <slide class="VueCarousel-slide">
          <img src="../assets/childbike.jpg">
        </slide>
        <slide class="VueCarousel-slide">
          <img src="../assets/mountainbike.jpg">
        </slide>
        <slide class="VueCarousel-slide">
          <img src="../assets/womanbike.jpg">
        </slide>   
      </carousel>
    </div>
      <div class="announcements">
        <article v-for="(a, index) in announcements" v-bind:key="index" class="message is-info"> 
          <div class="message-header">
            <p>{{a.title}}</p>
            <p>{{a.date}}</p>
          </div>
          <p class="message-body">{{a.body}}</p>
        </article> 
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { iAnnouncement } from "../models/announcement.interface";
import axios, { AxiosResponse, AxiosError } from "axios";
import { APIConfig } from "../utils/api.utils";
const { Carousel, Slide } = require('vue-carousel');

@Component({
  components: {
    Carousel,
    Slide
  }
})
export default class Home extends Vue {
  error: string | boolean = false;
  announcements: iAnnouncement[] = [];

  created() {
    this.getAllAnnouncements();
  }

  getAllAnnouncements() {
    this.error = false;
    axios.get(APIConfig.buildUrl("/announcements"), {
      headers : {
        "token" : this.$store.state.userToken
      }
    }).then((response: AxiosResponse) => {
      this.announcements = response.data;
      console.log("[Home.vue]" + response.data)
      this.$emit("[Home.vue]" + "success");
    }).catch((res: AxiosError) => {
      this.error = res.response && res.response.data.error;
      console.log("[Home.vue]" + this.error);
    }); 
  }
}
</script>

<style scoped>

.VueCarousel-slide {
  position: relative;
  color: #fff;
  font-family: Arial;
  font-size: 24px;
  text-align: center;
  height: 400px;
}

.carousel-div {
  padding-top: 30px;
  align-items: center;
  justify-content: center;
  width: 100%
}

.home {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  margin: 0 auto;
  width: 90%; 
}

.announcements{
  overflow-y: scroll;
  margin-top:  30px;
  margin-left: 30px;
  margin-bottom: 200px;
  width: 50%

}

</style>

