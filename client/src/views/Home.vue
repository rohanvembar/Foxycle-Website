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
const { Carousel, Slide } = require('vue-carousel');

@Component({
  components: {
    Carousel,
    Slide
  }
})
export default class Home extends Vue {
  announcements: iAnnouncement[] = [
    {id:1, title:"announcement #1", date:"February 13, 2019", body:"The most recent announcement. The most recent announcement. The most recent announcement."},
    {id:2, title:"announcement #2", date:"February 11, 2019", body:"An important message you definitely need to know about. An important message you definitely need to know about."},
    {id:3, title:"announcement #3", date:"October 1, 2018", body:"This is an announcement"},
    {id:4, title:"announcement #4", date:"October 1, 2018", body:"This is an announcement"},
    {id:5, title:"announcement #5", date:"October 1, 2018", body:"This is an announcement"},
    {id:6, title:"announcement #6", date:"October 1, 2018", body:"This is an announcement"},
    {id:7, title:"announcement #7", date:"October 1, 2018", body:"This is an announcement"}
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
  height: 400px;
  margin-top:  30px;
  margin-left: 30px;
  margin-bottom: 300px;

}

</style>

