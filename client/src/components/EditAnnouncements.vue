<template>
  <div>
    <div class="main-background row-sections">
      <div class="box new">
        <h3 class="message-header">New Announcement</h3>
        <form id="newAnnouncementForm" v-on:submit.prevent="newAnnouncement()">
          <p v-if="error" class="is-danger">{{ error }}</p>
          <div class="field">
            <label class="label">Title</label>
            <b-field>
              <b-input
                required
                type="text"
                minlength="2"
                placeholder="title"
                v-model="newAnnouncementTitle"
              ></b-input>
            </b-field>
          </div>
          <div class="field">
            <label class="label">Content</label>
            <b-field>
              <b-input
                required
                type="textarea"
                minlength="2"
                placeholder="content"
                v-model="newAnnouncementBody"
              ></b-input>
            </b-field>
            <button class="button is-primary is-rounded" style="width:100%" type="submit">Save</button>
          </div>
        </form>
      </div>
      <div class="announcements box">
        <h3 class="message-header">Manage Announcements</h3>
        <div v-for="(a, index) in announcements" v-bind:key="index" class="message">
          <div class="message-header">
            <p>{{a.title}}</p>
            <p>{{a.date}}</p>
          </div>
          <p class="message-body">{{a.body}}</p>
          <div class="delete-button">
            <button
              v-on:click="deleteAnnouncement(a)"
              class="button is-danger is-rounded"
              style="margin:10px;"
            >delete</button>
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

  goodToast() {
    this.$toast.open({
      duration: 3000,
      message: `new announcement created successfully`,
      position: "is-bottom",
      type: "is-primary"
    });
  }

  badToast() {
    this.$toast.open({
      duration: 3000,
      message: `announcement deleted successfully`,
      position: "is-bottom",
      type: "is-danger"
    });
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
    this.$snackbar.open({
      duration: 5000,
      message:
        "Are you sure? Ignore this to do nothing",
      type: "is-danger",
      position: "is-bottom",
      actionText: "Yes, delete",
      queue: false,
      onAction: () => {
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
        this.badToast();
      }
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
        this.goodToast();
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
.main-background {
  width: 90%;
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
.announcements {
  overflow-y: scroll;
  height: 450px;
  width: 100%;
}
.box {
  margin: 15px;
}
.new {
  width: 600px;
  height: 450px;
}
</style>
