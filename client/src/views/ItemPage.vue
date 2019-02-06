<template>
  <div class="main-background">
    <div class="itempage-main-content"> 
      <div class="itempage-title">
        <h2>Foxcycle Extreme Pro 500</h2>
        <h4>Built For Something</h4>
      </div>
      <div class="itempage-row">
        <div class="itempage-image-column">
          <img class="itempage-image" src="../assets/itempage_bike.png">
        </div>
        <div class="itempage-details-column">

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
export default class ItemPage extends Vue {
}
</script>

<style lang="scss" scoped>
@import "../assets/itempage.scss";
</style>
