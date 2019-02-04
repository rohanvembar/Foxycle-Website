<template>
  <div class="main-background cards">
    <div>
      <font-awesome-icon icon="sync-alt" />
      Tune-Ups
    </div>
    <div class="border-middles">
      <font-awesome-icon icon="wrench" />
      Adjustments & Repairs
    </div>
    <div>
      <font-awesome-icon icon="arrow-alt-circle-down" />
      Installations
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
  align-items: center;
  justify-content: space-around;
}
.border-middles {
  border-left: 1px black;
  border-right: 1px black;
}
</style>