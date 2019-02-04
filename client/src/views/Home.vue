<template>
  <div class="home">
    <div class="carousel-div"> 
      <carousel :navigationEnabled="true" 
      :autoplay="true" :autoplayTimeout=5000
      :perPage=1 paginationActiveColor="#42b983"
      paginationColor="#b2ebd1" :speed=300>
        <slide class="VueCarousel-slide">
          Slide 1 Content
        </slide>
        <slide class="VueCarousel-slide">
          Slide 2 Content
        </slide>
        <slide class="VueCarousel-slide">
          Slide 3 Content
        </slide>
        <slide class="VueCarousel-slide">
          Slide 4 Content
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
  background: #42b983;
  color: #fff;
  font-family: Arial;
  font-size: 24px;
  text-align: center;
  height: 400px;
}

.carousel-div {
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
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
}

</style>

