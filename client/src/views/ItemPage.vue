<template>
  <div class="main-background">
    <div class="itempage-main-content"> 
      <div class="itempage-title">
        <h2>Foxcycle Extreme Pro 500</h2>
        <h5>Built For Something</h5>
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
