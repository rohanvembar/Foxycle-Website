<template>
    <div>
        <div id="wrap">
	        <div id="columns" class="columns_4">
                <figure v-for="(item, index) in items" v-bind:key="index">
                    <router-link to="/itempage">
                    <img :src="item.image">
                    </router-link>
                    <figcaption>{{item.name}}</figcaption>
                    <span class="price">${{item.price}}</span>
                    <router-link class="button" to="/cart" exact-active-class="is-active">
                    Add to Cart
                    </router-link>
                </figure>
            </div>
        </div> 
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { iShopItem } from "../models/shopitem.interface";
import axios, { AxiosResponse, AxiosError } from "axios";
import { APIConfig } from "../utils/api.utils";

@Component
export default class ViewShopItems extends Vue {
    error: string | boolean = false;
    items: iShopItem[] = [];

    created() {
        this.getAllItems();
    }

    getAllItems() {
        this.error = false;
        axios.get(APIConfig.buildUrl("/shopitems")).then((response: AxiosResponse) => {
            this.items = response.data;
            console.log(response.data)
            this.$emit("success");
        }).catch((res: AxiosError) => {
            this.error = res.response && res.response.data.error;
            console.log(this.error);
        }); 
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#wrap{
	width: 90%;
	max-width: 1100px;
	margin: auto;
}
.columns_2 figure{
   width:49%;
   margin-right:1%;
}
.columns_2 figure:nth-child(2){
	margin-right: 0;
}
.columns_3 figure{
   width:32%;
   margin-right:1%;
}
.columns_3 figure:nth-child(3){
	margin-right: 0;
}
.columns_4 figure{
   width:24%;
   margin-right:1%;
}
.columns_4 figure:nth-child(4){
	margin-right: 0;
}
.columns_5 figure{
   width:19%;
   margin-right:1%;
}
.columns_5 figure:nth-child(5){
	margin-right: 0;
}
#columns figure:hover{
	-webkit-transform: scale(1);
	-moz-transform:scale(1);
	transform: scale(1);

}
#columns:hover figure:not(:hover) {
	opacity: 0.4;
}
div#columns figure {
	display: inline-block;
	background: #FEFEFE;
	border: 2px solid #FAFAFA;
	box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
	margin: 0 0px 15px;
	-webkit-column-break-inside: avoid;
	-moz-column-break-inside: avoid;
	padding: 15px;
	padding-bottom: 5px;
	background: -webkit-linear-gradient(45deg, #FFF, #F9F9F9);
	opacity: 1;
	-webkit-transition: all .2s ease;
	-moz-transition: all .2s ease;
	-o-transition: all .2s ease;
	transition: all .2s ease;
}

div#columns figure img {
	width: 100%;
	border-bottom: 1px solid #ccc;
	padding-bottom: 15px;
	margin-bottom: 5px;
}

div#columns figure figcaption {
  font-size: .9rem;
  color: #444;
  line-height: 1.5;
  height:60px;
  font-weight:600;
  text-overflow:ellipsis;
}

.button{
  background: #239CEC;
  margin:px;
  display:block;
  text-align:center;
  color:#fff;
  transition: 0.3s;
  text-decoration:none;
  text-shadow:1px 1px 3px rgba(0,0,0,0.3);
  border-radius:3px;
  box-shadow:1px 1px 3px rgba(0,0,0,0.3);
}
.button:hover{
  background:#40B883;
  color:#f1f2f3;
}
@media screen and (max-width: 960px) { 
  #columns figure { width: 24%; }
}
@media screen and (max-width: 767px) {
  #columns figure { width:32%;}
}
@media screen and (max-width: 600px) {
  #columns figure { width: 49%;}
}
@media screen and (max-width: 500px) {
  #columns figure { width: 100%;}
}
</style>
