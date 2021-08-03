"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const todoCollection_1 = require("./todoCollection");
let todos = [
    new todoItem_1.TodoItem(1, 'Buy Flowers'),
    new todoItem_1.TodoItem(2, 'Get Shoes'),
    new todoItem_1.TodoItem(3, 'Collect Tickets'),
    new todoItem_1.TodoItem(4, 'Call Jane', true)
];
let collection = new todoCollection_1.TodoCollection('Mauricio', todos);
console.clear();
console.log(`${collection.userName}'s Todo List (${collection.getTodoItemsCount().incomplete} remaining items to do)`);
// collection.addTodo(todoItem)
// collection.removeCompleteTodo()
// Use the new TodoCollection class feature and display a simple list of to-do items to the user
collection.getTodoItems(true).forEach((item) => item.printDetails());
