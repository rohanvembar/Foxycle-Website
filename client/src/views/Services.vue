<template>
  <div class="main-background cards">
    <div class="indivisual-card">
      <div class="card-title">
        <font-awesome-icon icon="sync-alt" />
        <p class="card-title-text">Tune-Ups</p>
      </div>
      <div class="card-body">
        <p class="section-title">Basic Tune-Up - $25</p>
        Includes brake inspection and adjustments, derailleur inspection and adjustments, tire inspection and inflation, safety check of all bolts and wipe down of frame.

        <p class="section-title">Premium Tune-Up - $35</p>
        Everything included in the Basic Tune-Up, plus wheel truing, pivot point lube, chain clean and lube and frame clean and polish.

        <p class="section-title">Brake System Tune-Up - $45</p>
        Includes brake pad installation, brake inspection and adjustments and inspection of cables and housing.

      </div>
    </div>
    <div class="indivisual-card">
      <div class="card-title">
        <font-awesome-icon icon="wrench" />
        <p class="card-title-text">Adjustments & Repairs</p>
      </div>
      <div class="card-body">
        body
      </div>
    </div>
    <div class="indivisual-card">
      <div class="card-title">
        <font-awesome-icon icon="arrow-alt-circle-down" />
        <p class="card-title-text">Installations</p>
      </div>
      <div class="card-body">
        body
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios, { AxiosResponse } from "axios";
import { APIConfig } from "../utils/api.utils";
import { Component, Prop, Vue } from "vue-property-decorator";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faWrench } from '@fortawesome/free-solid-svg-icons'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faWrench, faSyncAlt, faArrowAltCircleDown);

Vue.component('font-awesome-icon', FontAwesomeIcon);

@Component
export default class Services extends Vue {
}
</script>

<style lang="scss">
.cards {
  padding:30px;
  display: flex;
  align-items: top;
  justify-content: space-around;
}

.indivisual-card {
  background-color: white;
  width: 27%;
  border-radius: 30px;
}

.card-title {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top:30px;
}

.card-body {
  padding: 20px;
}

.section-title {
  padding-top:10px;
  font-weight: bold;
  font-size: 15px;
}

.card-title-text {
  padding-left: 5px;
}
</style>