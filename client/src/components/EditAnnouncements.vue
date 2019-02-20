<template>
  <div>
    <div class="main-background row-sections">
        <div class="message is-info section">
          <h1 class="message-header">New Announcement</h1>
          <div class="announcement-input">
            <input
              class="input-field"
              type="text"
              v-model="newAnnouncementTitle"
              placeholder="title"
            >
            <textarea
              class="input-field"
              type="text"
              v-model="newAnnouncementBody"
              placeholder="body"
            ></textarea>
            <button class="button input-field" v-on:click="newAnnouncement()">Save</button>
          </div>
        </div>
        <div class="message is-info announcements">
          <h1 class="message-header">Manage Announcements</h1>
          <div v-for="(a, index) in announcements" v-bind:key="index" class="message is-info">
            <div class="message-header">
              <p>{{a.title}}</p>
              <p>{{a.date}}</p>
            </div>
            <p class="message-body">{{a.body}}</p>
            <div class="delete-button">
              <button v-on:click="deleteAnnouncement(a)" class="button">delete</button>
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
import { iAnnouncement } from "../models/announcement.interface";

@Component({})
export default class EditAnnouncements extends Vue {
  error: string | boolean = false;
  newAnnouncementTitle: String = "";
  newAnnouncementBody: String = "";
  announcements: iAnnouncement[] = [];

  created() {
    this.getAllAnnouncements();
  }

  getAllAnnouncements() {
    this.error = false;
    axios
      .get(APIConfig.buildUrl("/announcements"), {
        headers: {
          token: this.$store.state.userToken
        }
      })
      .then((response: AxiosResponse) => {
        this.announcements = response.data;
        this.$emit("success");
      })
      .catch((res: AxiosError) => {
        this.error = res.response && res.response.data.error;
        console.log("[AdminEditInfo.vue]" + this.error);
      });
  }

  deleteAnnouncement(announcement: iAnnouncement) {
    this.error = false;
    axios
      .delete(APIConfig.buildUrl("/announcements/" + announcement.id))
      .then((response: AxiosResponse) => {
        const deletedAnnouncement = response.data;
        this.announcements = this.announcements.filter(announcement => {
          return announcement.id != deletedAnnouncement.id;
        });
        this.$emit("success");
      })
      .catch((response: AxiosResponse) => {
        this.error = "bad";
      });
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
        this.announcements.unshift(response.data);
        this.$emit("success");
        this.newAnnouncementTitle = "";
        this.newAnnouncementBody = "";
      })
      .catch((response: AxiosResponse) => {
        console.log("[AdminEditInfo.vue]" + "catch");
      });
  }

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
.row-sections {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
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
.delete-button {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.announcements{
  overflow-y: scroll;
  height: 450px;
  width: 50%
}

</style>