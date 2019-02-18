<template>
    <div id="table">
        <div class="row1">
            <div class="cell1">Order #</div>
            <div class="cell1">Date</div>
            <div class="cell1">
                Order Status       
            </div>
        </div>
        <div v-for="(order, index) in orders" v-bind:key="index" class="row">
            <div class="cell">{{order.orderNumber}}</div>
            <div class="cell">{{order.dateOrdered}}</div>
            <div class="cell_s">
                <select name="status">
                    <option selected="true" value="1">In Progress</option>
                    <option value="0">Not Started</option>
                    <option value="2">Complete</option>  
                    <option value="3">Canceled</option>     
                </select> 
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { iOrder } from "../models/order.interface";
import axios, { AxiosResponse, AxiosError } from "axios";
import { APIConfig } from "../utils/api.utils";

@Component
export default class ManageOrderItems extends Vue {
error: string | boolean = false;
orders: iOrder[] = [];

created() {
    this.getOrders();
}

getOrders() {
    this.error = false;
    axios
      .get(APIConfig.buildUrl("/orders"))
      .then((response: AxiosResponse) => {
        this.orders = response.data;
        this.$emit("success");
      })
      .catch((res: AxiosError) => {
        this.error = res.response && res.response.data.error;
        console.log("[EditOrder.vue]" + this.error);
      });   
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    #table {
        display:table;
        border-top : 2px solid;
        border-bottom: 2px solid;
    }
    .row {
        display:table-row; 
        background : white;
    }
    .row1 {
        display:table-row; 
        background : white;
        font-weight: bold;
    }
    .cell1{
        display:table-cell;
        border-top : 2px solid;
        border-bottom : 2px solid;
        text-align : center;
        vertical-align: middle;
        margin-left: 40px;
        padding-left:80px;
        padding-right:80px;
        font-size: 40px;
        align-items: center; 
        align-content: center;
    }
    .cell{
        display:table-cell;
        border-top : 2px solid;
        border-bottom : 2px solid;
        text-align : center;
        vertical-align: middle;
        margin-left: 40px;
        padding-left:80px;
        padding-right:80px;
        font-size: 20px;
        align-items: center; 
        align-content: center;
    }
    .cell_s{
        display:table-cell;
        border-top : 2px solid;
        border-bottom : 2px solid;
        text-align : center;
        vertical-align: middle;
        margin-left: 40px;
        padding-left:80px;
        padding-right:80px;
        padding-top: 12px;
        padding-bottom: 12px;
        font-size: 20px;
        align-items: center; 
        align-content: center;
    }
</style>
