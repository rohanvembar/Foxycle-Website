<template>
  <div>
    <div v-if="!isLoggedIn" class="error">
      <article class="message is-danger">
        <div class="message-header">
          <p>
            <font-awesome-icon icon="exclamation-circle"/>Oops
          </p>
        </div>
        <div class="message-body">
          You must be a Foxycle employee to view this page
          <img
            src="https://media.giphy.com/media/jUJgP8Fdvsgta/giphy.gif"
            style="padding:50px;"
          >
        </div>
      </article>
    </div>

    <div v-else>
      <div class="main-background sections">
        <div class="message is-info">
          <h1 class="message-header">New Announcement</h1>
          <div class="announcement-input">
            <input class="input-field" type="text" v-model="newAnnouncementTitle" placeholder="title">
            <textarea class="input-field" type="text" v-model="newAnnouncementBody" placeholder="body"></textarea>
            <button class="button input-field"v-on:click="newAnnouncement()">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import axios, { AxiosResponse } from "axios";
import { APIConfig } from "../utils/api.utils";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class AdminEditInfo extends Vue {
  get isLoggedIn(): boolean {
    return !!this.$store.state.userId;
  }
  newAnnouncementTitle: String = "";
  newAnnouncementBody: String = "";

  parseDate() {
    var date = new Date();
    var mm = date.getMonth() + 1;
    var dd = date.getDate();
    var prettyDate =
      (mm > 9 ? "" : "0") +
      mm +
      "-" +
      (dd > 9 ? "" : "0") +
      dd +
      "-" +
      date.getFullYear();
    console.log("[AdminEditInfo.vue] date ordered: " + prettyDate);
    return prettyDate;
  }

  newAnnouncement() {
    if (this.newAnnouncementTitle == "" || this.newAnnouncementBody == "") {
      return;
    }
    axios
      .post(APIConfig.buildUrl("/newannouncement"), {
        title: this.newAnnouncementTitle,
        body: this.newAnnouncementBody,
        date: this.parseDate()
      })
      .then((response: AxiosResponse) => {
        console.log("[AdminEditInfo.vue]" + JSON.stringify(response.data));
        this.$emit("success");
        this.newAnnouncementTitle = "";
        this.newAnnouncementBody = "";
      })
      .catch((response: AxiosResponse) => {
        console.log("[AdminEditInfo.vue]" + "catch");
      });
  }
}
</script>

<style lang="scss" scoped>
.header {
  align-items: left;
  padding-top: 30px;
  padding-left: 10px;
  margin-left: 200px;
  font-size: 50px;
  font-weight: bold;
}
.sections {
  display: flex;
  justify-content: center;
  align-items: center;
}
.announcement-input {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.input-field {
  margin: 10px;
  line-height: 20px;
  width: 100%;
}
</style>
