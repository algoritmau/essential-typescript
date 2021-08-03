import { TodoItem } from './todoItem'
import { TodoCollection } from './todoCollection'

let todos: TodoItem[] = [
  new TodoItem(1, 'Buy Flowers'),
  new TodoItem(2, 'Get Shoes'),
  new TodoItem(3, 'Collect Tickets'),
  new TodoItem(4, 'Call Jane', true)
]

let collection: TodoCollection = new TodoCollection('Mauricio', todos)

console.clear()
console.log(`${collection.userName}'s Todo List`)

// collection.addTodo(todoItem)
collection.removeCompleteTodo()
// Use the new TodoCollection class feature and display a simple list of to-do items to the user
collection.getTodoItems(true).forEach((item) => item.printDetails())
