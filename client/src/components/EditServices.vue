<template>
  <div>
    <div class="main-background">
      <div class="message is-info manage-services">
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
                  <p class="section-title">{{a.title}} - ${{a.price}}</p>
                  <p>{{a.description}}</p>
                </article>
              </div>
              <div class="message is-info section">
                <h1 class="message-header">New Tune Up</h1>
                <div>
                  <input type="text" v-model="newTuneUpTitle" placeholder="title">
                  <input
                    type="number"
                    min="0.01"
                    step="0.01"
                    v-model="newTuneUpPrice"
                    placeholder="price"
                  >
                  <textarea
                    class="input-field"
                    type="text"
                    v-model="newTuneUpBody"
                    placeholder="body"
                  ></textarea>
                  <button class="button input-field" v-on:click="newTuneUp()">Save</button>
                </div>
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
            <div class="message is-info section">
              <h1 class="message-header">New Adjustment & Repair</h1>
              <div>
                <input type="text" v-model="newAandRTitle" placeholder="title">
                <input
                  type="number"
                  min="0.01"
                  step="0.01"
                  v-model="newAandRPrice"
                  placeholder="price"
                >
                <textarea class="input-field" type="text" v-model="newAandRBody" placeholder="body"></textarea>
                <button class="button input-field" v-on:click="newAandR()">Save</button>
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
              <div class="message is-info section">
                <h1 class="message-header">New Installation</h1>
                <div>
                  <input type="text" v-model="newInstallationTitle" placeholder="title">
                  <input
                    type="number"
                    min="0.01"
                    step="0.01"
                    v-model="newInstallationPrice"
                    placeholder="price"
                  >
                  <textarea
                    class="input-field"
                    type="text"
                    v-model="newInstallationBody"
                    placeholder="body"
                  ></textarea>
                  <button class="button input-field" v-on:click="newInstallation()">Save</button>
                </div>
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
  newTuneUpBody: string = "";
  newTuneUpTitle: string = "";
  newTuneUpPrice: number | string = "";
  newAandRTitle: string = "";
  newAandRPrice: number | string = "";
  newAandRBody: string = "";
  newInstallationTitle: string = "";
  newInstallationPrice: number | string = "";
  newInstallationBody: string = "";

  newTuneUp() {
    if (
      this.newTuneUpBody == "" ||
      this.newTuneUpTitle == "" ||
      this.newTuneUpPrice == ""
    ) {
      return;
    }
    axios
      .post(APIConfig.buildUrl("/newservice"), {
        title: this.newTuneUpTitle,
        body: this.newTuneUpBody,
        price: this.newTuneUpPrice,
        category: "tune-ups"
      })
      .then((response: AxiosResponse) => {
        console.log("[EditServices.vue]" + JSON.stringify(response.data));
        this.servicesTuneUps.push(response.data);
        this.$emit("success");
        this.newTuneUpBody = "";
        this.newTuneUpTitle = "";
        this.newTuneUpPrice = "";
      })
      .catch((response: AxiosResponse) => {
        console.log("[EditServices.vue]" + "catch");
      });
  }
  newAandR() {
    if (
      this.newAandRTitle == "" ||
      this.newAandRBody == "" ||
      this.newAandRPrice == ""
    ) {
      return;
    }
    axios
      .post(APIConfig.buildUrl("/newservice"), {
        title: this.newAandRTitle,
        body: this.newAandRBody,
        price: this.newAandRPrice,
        category: "adjustments"
      })
      .then((response: AxiosResponse) => {
        console.log("[EditServices.vue]" + JSON.stringify(response.data));
        this.servicesAdjust.push(response.data);
        this.$emit("success");
        this.newAandRBody = "";
        this.newAandRTitle = "";
        this.newAandRPrice = "";
      })
      .catch((response: AxiosResponse) => {
        console.log("[EditServices.vue]" + "catch");
      });
  }
  newInstallation() {
    if (this.newInstallationBody == "" || this.newInstallationTitle == "" || this.newInstallationPrice == "") {
      return;
    }
    axios
      .post(APIConfig.buildUrl("/newservice"), {
        title: this.newInstallationTitle,
        body: this.newInstallationBody,
        price: this.newInstallationPrice,
        category: "installations"
      })
      .then((response: AxiosResponse) => {
        console.log("[EditServices.vue]" + JSON.stringify(response.data));
        this.servicesInst.push(response.data);
        this.$emit("success");
        this.newInstallationBody = "";
        this.newInstallationTitle = "";
        this.newInstallationPrice = "";
      })
      .catch((response: AxiosResponse) => {
        console.log("[EditServices.vue]" + "catch");
      });
  }

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
