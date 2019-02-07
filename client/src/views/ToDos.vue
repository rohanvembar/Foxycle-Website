<template>
    <div>
        <h1 class="title">Things To Do</h1>
        <div class="todos">
            <table>
                <tr v-for="(t, index) in mytodos" v-bind:key="index">
                    <td v-if="!t.complete">{{t.title}}</td>
                    <td v-if="!t.complete">{{t.dueDate}}</td>
                    <td v-if="t.complete" class="completed_todo">{{t.title}}</td>
                    <td v-if="t.complete" class="completed_todo">{{t.dueDate}}</td>
                    <td><button class="button delete_button" v-on:click="deleteTodoItem(t)">
                        <font-awesome-icon icon="trash" />
                        </button>
                    </td>
                    <td>
                      <button v-if="!t.complete" class="button complete_button"  v-on:click="completeTodoItem(t)">
                        <font-awesome-icon icon="check-circle" />
                      </button>
                    </td>
                </tr>
                <tr>
                    <td><input class="new_todo" type="text" v-model="title" placeholder="new todo item..."/></td>
                    <td><input type="date" v-model="dueDate"/></td>
                    <td>
                      <button class="button add_button" v-on:click="addTodo">
                        <font-awesome-icon icon="plus" />
                      </button>
                    </td>
                </tr>
                <tr>
                    <td class="error_message">{{!this.title_error ? "" : this.title_error}}</td>
                    <td class="error_message">{{!this.dueDate_error ? "" : this.dueDate_error}}</td>
                </tr>            
            </table>  
        </div>
    </div>
</template>

 <script lang="ts">
import Vue from "vue";
import axios, { AxiosResponse } from "axios";
import { APIConfig } from "../utils/api.utils";
import { Component, Prop } from "vue-property-decorator";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { iUser } from '@/models/user.interface';
library.add(faTrash, faPlus, faCheckCircle)
Vue.component("font-awesome-icon", FontAwesomeIcon)

@Component
export default class ToDos extends Vue {
  title: string = "";
  dueDate: string = "";
  title_error: string | boolean = false;
  dueDate_error: string | boolean = false;
  mytodos: ToDo[] = [];
  error: string | boolean = false;

  created() {
    this.error = false;
    axios.get(APIConfig.buildUrl("/todos"), {
      headers : {
        "token" : this.$store.state.userToken
      }
    }).then((response: AxiosResponse) => {
      this.mytodos = response.data;
      console.log(response.data)
      this.$emit("success");
    }).catch((response: AxiosResponse) => {
      this.error = "bad";
    });     
  }

  parseDate(date: string) {
    var splitDate = date.split("-");
    var day = splitDate[2];
    var month = splitDate[1];
    var year = splitDate[0];
    return month + "/" + day + "/" + year;
  }
  deleteTodoItem(todo: ToDo) {
    const id = todo.id;
    console.log(id);
    this.error = false;
    axios.delete(APIConfig.buildUrl("/todos/"+id), {})
    .then((response: AxiosResponse<DeleteResponse>) => {
      console.log("deleting a todo");
      const deletedTodo = response.data;

      this.mytodos = this.mytodos.filter(mytodo => {
        return mytodo.id != deletedTodo.id;
      });

      this.$emit("success");
    }).catch((response: AxiosResponse) => {
      this.error = "bad";
    });     
  }

  completeTodoItem(todo: ToDo) {
    const id = todo.id;
    this.error = false;
    console.log(this.$store.state.userToken);
    axios.put(APIConfig.buildUrl("/todos/"+id), {}, {
      headers : {
        "token" : this.$store.state.userToken
      }
    }).then((response: AxiosResponse<CompletedResponse>) => {
      console.log("completing a todo");
      const completedTodo = response.data;

      this.mytodos = this.mytodos.map(function(mytodo) { 
        return mytodo.id == completedTodo.id ? completedTodo : mytodo; 
      });

      console.log(completedTodo);
      console.log(this.mytodos);
      this.$emit("success");
    }).catch((response: AxiosResponse) => {
      console.log("catch");
      this.error = "bad";
    });  
  }

  addTodo(event: any) {
    this.title_error = this.title === "" ? "please enter task name" : false;
    this.dueDate_error =
         this.dueDate === "" ? "please enter valid task duedate" : false;
    if (this.title_error || this.dueDate_error) {
      return;
    }
    this.error = false;
    console.log(this.$store.state.userToken);
    axios.post(APIConfig.buildUrl("/todos"), {
      title: this.title,
      dueDate: this.parseDate(this.dueDate)
    }, {
      headers : {
        "token" : this.$store.state.userToken
      }
    }).then((response: AxiosResponse<ToDoResponse>) => {
      console.log("Pushing to mytodos");
      this.mytodos.push(response.data);
      console.log(this.mytodos);
      this.title = "";
      this.dueDate = "";
      this.$emit("success");
    }).catch((response: AxiosResponse) => {
      console.log("catch");
      this.error = "bad";
    });
  }
}
interface ToDo {
  id: number | undefined;
  title: string;
  complete: boolean;
  dueDate: string | undefined;
 // user: iUser;
}
interface ToDoResponse {
  id: number;
  title: string;
  complete: boolean;
  dueDate: string;
}
interface CompletedResponse {
  id: number;
  title: string;
  dueDate: string;
  complete: boolean;
}
interface DeleteResponse {
  id: number;
  title: string;
  dueDate: string;
  complete: boolean;
}
interface AllToDoResponse {
  todos: ToDo[];
}

</script>

 <style scoped>
table {
  border-collapse: collapse;
}
tr {
  align-items: center;
  border: none;
}
th,
td {
  border-collapse: collapse;
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
  background-color: #50a43d;
}
.delete_button {
  background-color: #be5050;
}
.delete_button:hover {
  background-color: #a43d3d;
}
.complete_button {
  background-color: #1161d1;
}
.complete_button:hover {
  background-color: #063e8d;
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
.completed_todo {
  text-decoration: line-through;
}
</style>
