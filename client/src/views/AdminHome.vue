<template>
  <div>
    <div v-if="!isLoggedIn" class='error'>
      <article class="message is-danger">
        <div class="message-header">
          <p>
            <font-awesome-icon icon="exclamation-circle" />
            Oops
          </p>
        </div>
        <div class="message-body">
          You must be a Foxycle employee to view this page
          <img src="https://media.giphy.com/media/jUJgP8Fdvsgta/giphy.gif" style="padding:50px;"/>

        </div>
      </article>
    </div>


    <div v-else class='error'>
      <!-- put page here -->
      Welcome, Owner
    </div>
  </div>
</template>



<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

export default class AdminHome extends Vue {
  
    get isLoggedIn(): boolean {
      console.log(this.$store.state.userId);
      return !!this.$store.state.userId;
    }
}
</script>

<style lang="scss">

</style>
