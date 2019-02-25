<template>
  <div class="main-background cards">
    <div class="indivisual-card">
      <div class="card-title">
        <font-awesome-icon icon="sync-alt"/>
        <p class="card-title-text">Tune-Ups</p>
      </div>
      <div class="card-body">
        <div class="servicesTuneUps">
          <article v-for="(a, index) in servicesTuneUps" v-bind:key="index">
            <p class="section-title">{{a.title}} - ${{a.price}}</p>
            <p>{{a.description}}</p>
          </article>
        </div>
      </div>
    </div>
    <div class="indivisual-card">
      <div class="card-title">
        <font-awesome-icon icon="wrench"/>
        <p class="card-title-text">Adjustments & Repairs</p>
      </div>
      <div class="card-body">
        <div class="servicesAdjust">
          <article v-for="(a, index) in servicesAdjust" v-bind:key="index">
            <p class="section-title">{{a.title}} - ${{a.price}}</p>
            <p>{{a.description}}</p>
          </article>
        </div>
      </div>
    </div>
    <div class="indivisual-card">
      <div class="card-title">
        <font-awesome-icon icon="arrow-alt-circle-down"/>
        <p class="card-title-text">Installations</p>
      </div>
      <div class="card-body">
        <div class="servicesInst">
          <article v-for="(a, index) in servicesInst" v-bind:key="index">
            <p class="section-title">{{a.title}} - ${{a.price}}</p>
            <p>{{a.description}}</p>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios, { AxiosResponse, AxiosError } from "axios";
import { iService } from "../models/service.interface";
import { APIConfig } from "../utils/api.utils";
import { Component, Prop, Vue } from "vue-property-decorator";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faWrench, faSyncAlt, faArrowAltCircleDown);

Vue.component("font-awesome-icon", FontAwesomeIcon);

@Component
export default class Services extends Vue {
  error: string | boolean = false;
  servicesTuneUps: iService[] = [];
  servicesAdjust: iService[] = [];
  servicesInst: iService[] = [];

  created() {
    this.getAllServices();
  }
  getAllServices() {
    this.error = false;
    axios
      .get(APIConfig.buildUrl("/servicesTuneUps"), {
        headers: {
          token: this.$store.state.userToken
        }
      })
      .then((response: AxiosResponse) => {
        this.servicesTuneUps = response.data;
        console.log(response.data);
        this.$emit("success");
      })
      .catch((res: AxiosError) => {
        this.error = res.response && res.response.data.error;
        console.log(this.error);
      });

    axios
      .get(APIConfig.buildUrl("/servicesAdjust"), {
        headers: {
          token: this.$store.state.userToken
        }
      })
      .then((response: AxiosResponse) => {
        this.servicesAdjust = response.data;
        console.log(response.data);
        this.$emit("success");
      })
      .catch((res: AxiosError) => {
        this.error = res.response && res.response.data.error;
        console.log(this.error);
      });

    axios
      .get(APIConfig.buildUrl("/servicesInst"), {
        headers: {
          token: this.$store.state.userToken
        }
      })
      .then((response: AxiosResponse) => {
        this.servicesInst = response.data;
        console.log(response.data);
        this.$emit("success");
      })
      .catch((res: AxiosError) => {
        this.error = res.response && res.response.data.error;
        console.log(this.error);
      });
  }
}
</script>

<style lang="scss" scoped>
.cards {
  padding: 30px;
  display: flex;
  align-items: top;
  justify-content: space-around;
  margin-bottom: 50px;
  width: 90%;
  margin: auto;
}

.indivisual-card {
  background-color: white;
  width: 27%;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
}

.card-title {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  font-size: 20px;
}

.card-body {
  padding: 20px;
}

.section-title {
  padding-top: 10px;
  font-weight: bold;
  font-size: 15px;
}

.card-title-text {
  padding-left: 5px;
}
</style>