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

function displayTodosList(): void {
  console.log(
    `${collection.userName}'s Todo List (${
      collection.getTodoItemsCount().incomplete
    } remaining items to do)`
  )
}

enum Commands {
  Quit = 'Quit'
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
      if (answers['command'] !== Commands.Quit) promptUser()
    })
}

promptUser()

// collection.addTodo(todoItem)
// collection.removeCompleteTodo()
// Use the new TodoCollection class feature and display a simple list of to-do items to the user
// collection.getTodoItems(true).forEach((item) => item.printDetails())
