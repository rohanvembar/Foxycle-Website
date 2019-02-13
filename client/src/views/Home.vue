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
const { Carousel, Slide } = require('vue-carousel');

@Component({
  components: {
    Carousel,
    Slide
  }
})
export default class Home extends Vue {
  announcements: iAnnouncement[] = [
    {id:1, title:"announcement #1", date:"February 13, 2019", body:"The most recent announcement"},
    {id:2, title:"announcement #2", date:"February 11, 2019", body:"An important message you definitely need to know about"},
    {id:1, title:"announcement #1", date:"October 1, 2018", body:"This is an announcement"},
    {id:1, title:"announcement #1", date:"October 1, 2018", body:"This is an announcement"},
    {id:1, title:"announcement #1", date:"October 1, 2018", body:"This is an announcement"},
    {id:1, title:"announcement #1", date:"October 1, 2018", body:"This is an announcement"},
    {id:1, title:"announcement #1", date:"October 1, 2018", body:"This is an announcement"}
  ];


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

