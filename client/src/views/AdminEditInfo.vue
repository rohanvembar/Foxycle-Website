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
      <div class="main-background column-sections">
        <div class="row-sections">
          <button v-on:click="changePageAnnouncements">Manage Announcements</button>
          <button v-on:click="changePageServices">Manage Services</button>
          <button v-on:click="changePageContact">Manage Contact</button>
        </div>
        <EditAnnouncements v-if="announcements"/>
        <EditServices v-if="services"/>
        <EditContact v-if="contact"/>

      </div>
    </div>
  </div>
</template>


<script lang="ts">
import axios, { AxiosResponse, AxiosError } from "axios";
import { APIConfig } from "../utils/api.utils";
import { Component, Prop, Vue } from "vue-property-decorator";
import EditAnnouncements from "@/components/EditAnnouncements.vue";
import EditServices from "@/components/EditServices.vue";
import EditContact from "@/components/EditContact.vue";

@Component({
  components: {
    EditAnnouncements,
    EditServices,
    EditContact
  }
})
export default class AdminEditInfo extends Vue {
  get isLoggedIn(): boolean {
    return !!this.$store.state.userId;
  }
  error: string | boolean = false;
  announcements: boolean = true;
  services: boolean = false
  contact: boolean = false

  changePageAnnouncements() {
    this.announcements = true;
    this.services = false;
    this.contact = false;
  }
  changePageServices() {
    this.announcements = false;
    this.services = true;
    this.contact = false;    
  }
  changePageContact() {
    this.announcements = false;
    this.services = false;
    this.contact = true;    
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
