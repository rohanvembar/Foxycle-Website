<template>
  <div class="home">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
const { Carousel, Slide } = require("vue-carousel");

@Component({
  components: {
    Carousel,
    Slide
  }
})
export default class Home extends Vue {}
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
