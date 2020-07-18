import store from "../store.js";
import Todo from "../models/todo.js";

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/LandisDuffett/todos/",
  timeout: 8000
});

class TodoService {

  /*async getTodos() {
    console.log("Calling the Todo");
    let res = await todoApi.get();
    store.commit("todos", res.data.map(rawTodoData => new Todo(rawTodoData))).catch(err => console.error(err));
  }*/
  constructor() {
    this.getTodos()
  }
  getTodos() {
    console.log("Calling the Todo");
    todoApi.get().then(res => {
      store.commit("todos", res.data.data.map(rawTodoData => new Todo(rawTodoData)))
    }).catch(err => console.error(err))
  }

  addTodo(todo) {
    todoApi.post("", todo).then((res) => this.getTodos()).catch(err => console.error(err));
    //TODO Handle this response from the server (hint: what data comes back, do you want this?)
  }

  toggleTodoStatus(todoId) {
    let todo = store.State.todos.find(todo => todo._id == todoId);
    if (todo.completed == false) {
      todo.completed = true
    } else {
      todo.completed = false
    }
    todoApi.put(todoId, todo).then((res) => this.getTodos()).catch(err => console.error(err))
  }

  removeTodo(todoId) {
    let todo = store.State.todos.find(todo => todo._id == todoId);
    todoApi.delete(todoId).then((res) => this.getTodos()).catch(err => console.error(err))
  }
}

const todoService = new TodoService();
export default todoService;
