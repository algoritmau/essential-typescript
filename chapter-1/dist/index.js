"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const todoCollection_1 = require("./todoCollection");
const inquirer = require("inquirer");
let todos = [
    new todoItem_1.TodoItem(1, 'Buy Flowers'),
    new todoItem_1.TodoItem(2, 'Get Shoes'),
    new todoItem_1.TodoItem(3, 'Collect Tickets'),
    new todoItem_1.TodoItem(4, 'Call Jane', true)
];
let collection = new todoCollection_1.TodoCollection('Mauricio', todos);
let shouldShowCompleteTodos = true;
function displayTodosList() {
    console.log(`${collection.userName}'s Todo List (${collection.getTodoItemsCount().incomplete} items to do)`);
    // Allows the user to toggle the filter to include or exclude completed items
    collection
        .getTodoItems(shouldShowCompleteTodos)
        .forEach((item) => item.printDetails());
}
var Commands;
(function (Commands) {
    Commands["Add"] = "Add New Task";
    Commands["Complete"] = "Complete Task";
    Commands["Toggle"] = "Show/Hide Completed";
    Commands["Purge"] = "Remove Completed Tasks";
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
function promptAdd() {
    console.clear();
    inquirer
        .prompt({
        type: 'input',
        name: 'add',
        message: 'Enter task'
    })
        .then((answers) => {
        if (answers['add'] !== '') {
            collection.addTodo(answers['add']);
        }
        promptUser();
    });
}
function promptComplete() {
    console.clear();
    inquirer
        .prompt({
        type: 'checkbox',
        name: 'complete',
        message: 'Marks Tasks Complete',
        choices: collection.getTodoItems(shouldShowCompleteTodos).map((item) => ({
            name: item.task,
            value: item.id,
            checked: item.complete
        }))
    })
        .then((answers) => {
        let completedTasks = answers['complete'];
        collection
            .getTodoItems(true)
            .forEach((item) => collection.markComplete(item.id, completedTasks.find((id) => id === item.id) != undefined));
        promptUser();
    });
}
function promptUser() {
    console.clear();
    displayTodosList();
    inquirer
        .prompt({
        type: 'list',
        name: 'command',
        message: 'Choose option',
        choices: Object.values(Commands)
    })
        .then((answers) => {
        switch (answers['command']) {
            case Commands.Toggle:
                shouldShowCompleteTodos = !shouldShowCompleteTodos;
                promptUser();
                break;
            case Commands.Add:
                promptAdd();
                break;
            case Commands.Complete:
                if (collection.getTodoItemsCount().incomplete > 0) {
                    promptComplete();
                }
                else {
                    promptUser();
                }
                break;
            case Commands.Purge:
                collection.removeCompleteTodo();
                promptUser();
                break;
            default:
                break;
        }
    });
}
promptUser();
