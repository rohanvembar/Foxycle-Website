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
    <div class="annoucements">
      Announcements
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
const { Carousel, Slide } = require('vue-carousel');

@Component({
    components: {
    Carousel,
    Slide
  }
})
export default class Home extends Vue {

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
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.annoucements {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75%;
  height: 300px;
  background-color: white;
    border-radius: 5px;

}

</style>

