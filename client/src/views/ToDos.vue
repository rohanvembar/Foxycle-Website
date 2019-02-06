<template>
    <div>
        <center>
        <table border='2' style="width:50%">
            <tr>
                <th>Item</th>
                <th>Due Date</th>
            </tr>
            <!-- <tr v-for="(todo, index) in mytodos" :key="index">
                <td>{{ todo.name }}</td>
                <td>{{ todo.duedate }}</td>
            </tr> -->
        </table>
        </center>
        <br>
        <center>
        <form>
            Item Name: <input type="text" placeholder="What do you want to add?" v-model="todo.title"/>
            <br>
            Due Date: <input type="date" v-model="todo.dueDate"/>
            <button type="button" v-on:click="pushToDB">Add</button>
        </form>
        </center>
    </div> 
</template>

<script lang='ts'>
import Vue from 'vue'
import {Component} from 'vue-property-decorator';
import axios, { AxiosResponse } from "axios";
import { APIConfig } from "../utils/api.utils";
import { iTodos } from "../models/todos.interface";

@Component
export default class ToDos extends Vue {
    mytodos: Todo[] = [

    ];

    todo: Todo = {
        user: "",
        dueDate: new Date(0),
        complete: "",
        title: ""
    };
    error: string | boolean = false;


    pushToDB(){
        //console.log("hello" + this.mytodos.values());
        //this.mytodos.push({name: this.name, duedate: this.duedate})
        debugger;
        this.error = false;
        // this.signup.firstName = "done";
        console.log('hello');
        axios
        .post(APIConfig.buildUrl("/todos"), {
            ...this.todo
        })
        .then((response: AxiosResponse<iTodos>) => {
            this.$emit("success");
        })
        .catch((errorResponse: any) => {
            debugger;
            this.error = errorResponse.response.data.reason;
        });
    }

    
} 


export interface Todo {
    user: string,
    dueDate: Date,
    complete: string,
    title: string,

}
</script>