<template>
    <div class="refine-box">
        <p class="refine-title">Refine By</p>
        <p>Order Status</p>
        <select name="status">
            <option selected="true" value="all">All</option>
            <option value="0">Not Started</option>
            <option value="1">In Progress</option>
            <option value="2">Complete</option>  
            <option value="3">Canceled</option>     
        </select>         
    </div>
 
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class OrdersRefineBox extends Vue {
}
</script>

<style scoped lang="scss">
 .refine-box {
    height : 270px;
    background : white;
    text-align : left;
    margin-bottom: 40px;
    padding:10px;
}
.refine-title{
    font-weight: bold;
}
</style>
