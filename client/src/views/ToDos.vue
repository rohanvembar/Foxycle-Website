<template>
		<div>
				<center>
				<button type="button" v-on:click="getTodo">refresh</button></td>

				<table border='2' style="width:50%">
						<tr>
								<th>Item</th>
								<th>Due Date</th>
								<th>Modify</th>
						</tr>
						<tr>
							<td>todo 1</td>
							<td>8/8/8888</td>
							<td><button type="button">Delete</button>
							<button type="button">Completed</button></td>
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
						Item Name: <input type="text" placeholder="What do you want to add?" v-model="todoitem.title"/>
						<br>
						Due Date: <input type="date" v-model="todoitem.dueDate"/>
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
import { iUser } from "../models/user.interface";


@Component
export default class ToDos extends Vue {
  todo: iTodos | null = null;

	// mytodos: Todo[] = [

	// ];

	todoitem: TodoForm = {
			userId: "",
			dueDate: new Date(),
			complete: "",
			title: ""
	};
	error: string | boolean = false;

	getTodo(){
		axios
        .get(APIConfig.buildUrl('/todos'))
        .then((res: AxiosResponse<{ todo: iTodos }>) => {
			  	console.log(this.todo);
         	this.todo = res.data.todo;
		  });
		  
	}
	pushToDB(){
		this.error = false;

		console.log('hello');
		console.log(this.todoitem);

		//log bool if user is logged in
		console.log(!!this.$store.state.userId);

		axios
		.post(APIConfig.buildUrl("/todos"), {
			...this.todoitem
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

export interface TodoForm {
		userId: string,
		dueDate: Date,
		complete: string,
		title: string,

}
</script>