<template>
    <div>
        <h1 class="title">Things To Do</h1>
        <div class="todos">
            <table>
                <tr v-for="(todo, index) in mytodos" v-bind:key="index">
                    <td>{{todo.name}}</td>
                    <td>{{todo.duedate}}</td>
                    <td><button class="button delete_button" v-on:click="deleteTodoItem(todo)">
                        <font-awesome-icon icon="trash" />
                        </button></td>
                </tr>
                <tr>
                    <td><input class="new_todo" type="text" v-model="todoname" placeholder="new todo item..."/></td>
                    <td><input type="date" v-model="duedate"/></td>
                    <td><button class="button add_button" v-on:click="addTodoItem">
                        <font-awesome-icon icon="plus" />
                        </button></td>
                </tr>
                <tr>
                    <td class="error_message">{{!this.todoname_error ? "" : this.todoname_error}}</td>
                    <td class="error_message">{{!this.duedate_error ? "" : this.duedate_error}}</td>
                </tr>            
            </table>  
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTrash)
library.add(faPlus)

Vue.component('font-awesome-icon', FontAwesomeIcon)

@Component
export default class ToDos extends Vue {
  todoname: string = "";
  duedate: string = "";
  todoname_error: string | boolean = false;
  duedate_error: string | boolean = false;

  mytodos: ToDo[] = [];
  parseDate(date: string) {
    var splitDate = date.split("-");
    var day = splitDate[2];
    var month = splitDate[1];
    var year = splitDate[0];
    return month + "/" + day + "/" + year;
  }
  addTodoItem() {
    this.todoname_error =
      this.todoname === "" ? "please enter task name" : false;
    this.duedate_error =
      this.duedate === "" ? "please enter valid task duedate" : false;
    if (!this.todoname_error && !this.duedate_error) {
      this.mytodos.push({
        name: this.todoname,
        duedate: this.parseDate(this.duedate)
      });
      this.todoname = "";
      this.duedate = "";
    }
  }
  deleteTodoItem(todo: ToDo) {
    var target = this.mytodos.filter(function(mytodo) {
      return mytodo != todo;
    });
    this.mytodos = target;
  }
}

interface ToDo {
  name: string;
  duedate: string | undefined;
}
</script>

<style scoped>
table {
  border-collapse:collapse;
}
tr {
  align-items: center;
  border:none;
}
th, td {
  border-collapse:collapse;
  padding: 20px;
}

.todos {
  display: flex;
  justify-content: center;
  align-items: center;
}
.error_message {
  color: red;
  font-size: 12px;
}

.add_button {
  background-color: #64be50;
}

.add_button:hover {
  background-color: #50a43d
}

.delete_button {
  background-color: #be5050;
}

.delete_button:hover {
  background-color: #a43d3d;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
}

.new_todo {
  width: 300px;
}

input {
  height: 35px;
}
</style>
