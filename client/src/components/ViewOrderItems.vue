<template>
    <div id="table">
        <div class="row1">
            <div class="cell_row1">Product</div>
            <div class="cell_row1">Price</div>
            <div class="cell_row1">
                Quantity       
            </div>
        </div>       
        <div class="row">
            <div class="cell">
                <div class="cell_img"><img class="itempage-image" src="../assets/itempage_bike.png"></div>
                <div class="cell_product_name">Foxycle Extreme Pro 5000</div>
            </div>
            <div class="cell">$3999.99</div>
            <div class="cell">1</div>
        </div>
        <div class="row">
            <div class="cell">
                <div class="cell_img"><img class="itempage-image" src="../assets/itempage_bike.png"></div>
                <div class="cell_product_name">Foxycle Extreme Pro 5000</div>
            </div>
            <div class="cell">$3999.99</div>
            <div class="cell">1</div>
        </div>
        
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ViewOrderItems extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    #table {
        display:table;
    }
    .row {
        display:table-row; 
    }
    .row1 {
        display:table-row; 
        font-weight: bold;
        margin-bottom: 40px;
        padding-bottom:40px;
    }
    .cell_row1{
        display:table-cell;
        text-align : center;
        vertical-align: middle;
        margin-left: 40px;
        padding-left:80px;
        padding-right:80px;
        margin-bottom: 20px;
        padding-bottom:30px;
        font-size: 40px;
        align-items: center; 
        align-content: center;
    }
    .cell_img{
        display:table-cell;
        text-align : center;
        vertical-align: middle;
        margin-left: 40px;
        padding-left:80px;
        padding-bottom:20px;
        font-size: 20px;
        align-items: center; 
        align-content: center;
    }
    .cell_product_name{
        display:table-cell;
        text-align : center;
        vertical-align: middle;
        margin-left: 40px;
        padding-left: 20px;
        padding-right:80px;
        padding-bottom:20px;
        font-size: 20px;
        align-items: center; 
        align-content: center;
    }
    .cell{
        display:table-cell;
        text-align : center;
        vertical-align: middle;
        margin-left: 40px;
        padding-left:80px;
        padding-right:80px;
        padding-bottom:20px;
        font-size: 20px;
        align-items: center; 
        align-content: center;
    }
    .itempage-image{
        height: 70px;
    }
</style>
