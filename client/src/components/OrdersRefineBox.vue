<template>
    <div class="refine-box" v-on:change = "updateRefineList">
        <p class="refine-title">Refine By</p>
        <div>
            <label class="container">Received
                <input type="checkbox" value="1" v-model="refinelist">
                <span class="checkmark"></span>
            </label>
        </div>
        <div>
            <label class="container">In Progress
                <input type="checkbox" value="2" v-model="refinelist">
                <span class="checkmark"></span>
            </label>
        </div>
        <div>
            <label class="container">Shipped
                <input type="checkbox" value="3" v-model="refinelist">
                <span class="checkmark"></span>
            </label>
        </div>
        <div>
            <label class="container">Delivered
                <input type="checkbox" value="4" v-model="refinelist">
                <span class="checkmark"></span>
            </label>    
        </div>
        <div>
            <label class="container">Canceled
                <input type="checkbox" value="5" v-model="refinelist">
                <span class="checkmark"></span>
            </label>    
        </div> 
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class OrdersRefineBox extends Vue {
  refinelist: String[] = [];
  updateRefineList(){
    this.$emit('change', this.refinelist);
  }
}
</script>

<style scoped lang="scss">
 .refine-box {
    height : 200px;
    background : white;
    text-align : left;
    margin-bottom: 40px;
    padding:10px;
}
.refine-title{
    font-weight: bold;
}
.container {
    position: relative;
    padding-left: 35px;
    padding-bottom: 35px;
    margin-bottom: 32px;
    cursor: pointer;
    font-size: 20px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
