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


    <div v-else>
      <div class="main-background">
        <div class = "header">Manage Orders</div>
        <div class="sort-by">
          <select name="Sort By">
            <option selected="true" disabled="disabled" value="sortby">Sort By</option>
            <option value="orderNumber">Order Number</option>
            <option value="date">Date</option>     
          </select>
        </div>
        <div class="orders">
          <OrdersRefineBox />
          <ManageOrderItems />
        </div>
      </div>
    </div>
  </div>

</template>


<script lang="ts">
import axios, { AxiosResponse } from "axios";
import { APIConfig } from "../utils/api.utils";
import { Component, Prop, Vue } from "vue-property-decorator";
import OrdersRefineBox from "@/components/OrdersRefineBox.vue";
import ManageOrderItems from "@/components/ManageOrderItems.vue";

@Component({
  components: {
    ManageOrderItems,
    OrdersRefineBox
  }
})
export default class AdminEditOrder extends Vue {
    get isLoggedIn(): boolean {
      return !!this.$store.state.userId;
    }
}
</script>

<style lang="scss" scoped>
  .header{
    align-items: left;
    padding-top: 30px;
    padding-left: 10px;
    margin-left: 200px;
    font-size: 50px;
    font-weight: bold;
  }
  .sort-by{
    padding-top: 30px;
    padding-bottom: 30px;
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: flex-end;   
  }
  .orders{
    padding: 10px;
    margin-right: 150px;
    margin-bottom: 20px;
    display: flex;
    align-items: top;
    justify-content: space-evenly;
  }

</style>
