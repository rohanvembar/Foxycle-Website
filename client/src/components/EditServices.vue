<template>
  <div>
    <div class="main-background">
      <div class="message is-info manage-services ">
        <h1 class="message-header">Manage Services</h1>
        <div class="row-sections">
          <div class="indivisual-card">
            <div class="card-title">
              <font-awesome-icon icon="sync-alt"/>
              <p class="card-title-text">Tune-Ups</p>
            </div>
            <div class="card-body">
              <div class="servicesTuneUps">
                <article v-for="(a, index) in servicesTuneUps" v-bind:key="index">
                <p class="section-title"><input :placeholder="a.title"/></p>
                  <p class="section-title">$<input class="price-box" :placeholder="a.price"/></p>
                  <p><textarea class="description-box" :placeholder="a.description"></textarea></p>
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
                <p class="section-title"><input :placeholder="a.title"/></p>
                <p class="section-title">$<input class="price-box" :placeholder="a.price"/></p>                  <p><textarea class="description-box" :placeholder="a.description"></textarea></p>
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
                  <p class="section-title"><input :placeholder="a.title"/></p>
                  <p class="section-title">$<input class="price-box" :placeholder="a.price"/></p>
                  <p><textarea class="description-box" :placeholder="a.description"></textarea></p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import axios, { AxiosResponse, AxiosError } from "axios";
import { APIConfig } from "../utils/api.utils";
import { Component, Prop, Vue } from "vue-property-decorator";
import { iService } from "@/models/service.interface";

@Component({})
export default class EditServices extends Vue {
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
.manage-services {
    width: 130%;
}
.description-box {
    max-width: 200px;
    min-width: 200px;
    max-height: 150px;
    min-height: 150px;
}
.cards {
  padding: 30px;
  display: flex;
  align-items: top;
  justify-content: space-around;
}

.indivisual-card {

  background-color: white;
  min-width: 30%;
  width: 30%;
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

.header {
  align-items: left;
  padding-top: 30px;
  padding-left: 10px;
  margin-left: 200px;
  font-size: 50px;
  font-weight: bold;
}
.row-sections {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
}
.column-sections {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
