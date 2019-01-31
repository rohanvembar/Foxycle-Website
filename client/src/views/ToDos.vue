<template>
    <div align="left" style="padding:20px">
        <table style="width:30%">
            <tr>
                <th><u>Item</u></th>
                <th><u>Due Date</u></th>
            </tr>
            <tr v-for="(item, index) in todoItems" :key="index">
                <td>{{ item.name }}</td>
                <td>{{ item.duedate }}</td>
            </tr>
        </table>
        <br>
        <form>
            Item to do: <input type="text" placeholder="What's the item to do?" v-model="name"/>
            <br>
            Due date: <input type="date" v-model="duedate"/>
            <button type="button" v-on:click="createItem()">Create</button>
        </form>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component
export default class Todos extends Vue {
    todoItems: TodoArray[] = [];
    createItem() {
        this.todoItems.push({name: this.name, duedate: this.duedate});
    }
}
interface TodoArray {
    name: string;
    duedate: Date;
}

</script>
