<template>
    <div id="table">
        <div class="row1">
            <div class="cell">Order #</div>
            <div class="cell">Date</div>
            <div class="cell">
                Order Status       
            </div>
        </div>
        <div class="row">
            <div class="cell">12345678</div>
            <div class="cell">01.23.19</div>
            <div class="cell_s">
                <select name="status">
                    <option selected="true" value="1">In Progress</option>
                    <option value="0">Not Started</option>
                    <option value="2">Complete</option>  
                    <option value="3">Canceled</option>     
                </select> 
            </div>
        </div>
        <div class="row">
            <div class="cell">12345678</div>
            <div class="cell">01.23.19</div>
            <div class="cell_s">
                <select name="status">
                    <option selected="true" value="1">In Progress</option>
                    <option value="0">Not Started</option>
                    <option value="2">Complete</option>  
                    <option value="3">Canceled</option>     
                </select> 
            </div>
        </div>
        <div class="row">
            <div class="cell">12345678</div>
            <div class="cell">01.23.19</div>
            <div class="cell_s">
                <select name="status">
                    <option selected="true" value="1">In Progress</option>
                    <option value="0">Not Started</option>
                    <option value="2">Complete</option>  
                    <option value="3">Canceled</option>     
                </select> 
            </div>
        </div>
        <div class="row">
            <div class="cell">12345678</div>
            <div class="cell">01.23.19</div>
            <div class="cell_s">
                <select name="status">
                    <option selected="true" value="1">In Progress</option>
                    <option value="0">Not Started</option>
                    <option value="2">Complete</option>  
                    <option value="3">Canceled</option>     
                </select> 
            </div>
        </div>
        <div class="row">
            <div class="cell">12345678</div>
            <div class="cell">01.23.19</div>
            <div class="cell_s">
                <select name="status">
                    <option selected="true" value="1">In Progress</option>
                    <option value="0">Not Started</option>
                    <option value="2">Complete</option>  
                    <option value="3">Canceled</option>     
                </select> 
            </div>
        </div>
        <div class="row">
            <div class="cell">12345678</div>
            <div class="cell">01.23.19</div>
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
        background : white;
        border : 2px solid;
        border-color: black;
    }
    .row1 {
        display:table-row; 
        background : white;
        border : 2px solid;
        border-color: black;        
        font-weight: bold;
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
        font-size: 40px;
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
        padding-bottom: 12px;
        font-size: 40px;
        align-items: center; 
        align-content: center;
    }
</style>
