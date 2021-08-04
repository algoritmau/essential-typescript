import { TodoItem } from './todoItem'
import { TodoCollection } from './todoCollection'
import * as inquirer from 'inquirer'

let todos: TodoItem[] = [
  new TodoItem(1, 'Buy Flowers'),
  new TodoItem(2, 'Get Shoes'),
  new TodoItem(3, 'Collect Tickets'),
  new TodoItem(4, 'Call Jane', true)
]

let collection: TodoCollection = new TodoCollection('Mauricio', todos)
let shouldShowCompleteTodos = true

function displayTodosList(): void {
  console.log(
    `${collection.userName}'s Todo List (${
      collection.getTodoItemsCount().incomplete
    } items to do)`
  )

  // Allows the user to toggle the filter to include or exclude completed items
  collection
    .getTodoItems(shouldShowCompleteTodos)
    .forEach((item) => item.printDetails())
}

enum Commands {
  Add = 'Add New Task',
  Toggle = 'Show/Hide Completed',
  Quit = 'Quit'
}

function promptAdd(): void {
  console.clear()

  inquirer
    .prompt({
      type: 'input',
      name: 'add',
      message: 'Enter task'
    })
    .then((answers) => {
      if (answers['add'] !== '') {
        collection.addTodo(answers['add'])
      }

      promptUser()
    })
}

function promptUser(): void {
  console.clear()
  displayTodosList()

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
          shouldShowCompleteTodos = !shouldShowCompleteTodos
          promptUser()
          break

        case Commands.Add:
          promptAdd()
          break

        default:
          break
      }
    })
}

promptUser()
