import TodoService from "../services/todo-service.js";
import store from "../store.js";

//TODO Create the render function
function countRemaining() {
  let count = 0
  store.State.todos.forEach(item => {
    !item.completed ? count++ : count
  })
  return count
}

function _drawTodos() {
  let template = ""
  store.State.todos.forEach(item => template += item.todoTemplate)
  let tasksRemaining = countRemaining()
  let remainingTemplate = `<h2 class="text-center">My To Do List</h2><p>Tasks to complete: ${tasksRemaining}</p>`
  template += `</ul>
    </div>`
  document.getElementById("remaining").innerHTML = remainingTemplate.toString()
  document.getElementById("todos").innerHTML = template
}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    store.subscribe("todos", _drawTodos);
    TodoService.getTodos();
  }


  addTodo(e) {
    console.log("hellofromcontrolleradd")
    e.preventDefault();
    let form = e.target;
    let todo = {
      description: form.description.value
    };

    TodoService.addTodo(todo);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatus(todoId);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(todoId) {
    TodoService.removeTodo(todoId);
  }
}
