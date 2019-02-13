<template>
  <div class="home">
    <div class="carousel-div"> 
      <carousel :navigationEnabled="true" 
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
      <div v-for="(a, index) in announcements" v-bind:key="index" class="announcement"> 
        <div class="announcement-title">
          <p>{{a.title}}</p>
          <p>{{a.date}}</p>
        </div>
        <p class="announcement-body">{{a.body}}</p>
      </div> 
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
      console.log(response.data)
      this.$emit("success");
    }).catch((res: AxiosError) => {
      this.error = res.response && res.response.data.error;
      console.log(this.error);
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
  padding: 30px;
  align-items: center;
  justify-content: center;
  width: 50%
}

.home {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
}

.announcements{
  overflow-y: scroll;
  height: 500px;
  width: 500px;
  margin: 30px;
  border: 1px solid black;
}

.announcement {
  border: 1px solid black;
  padding: 10px;
  margin: 30px;
  background-color: white;  
}

.announcement-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0097f2;
  padding: 5px;
  color: white;
  font-weight: bold;
}

.announcement-body {
  padding: 10px;
}

</style>

