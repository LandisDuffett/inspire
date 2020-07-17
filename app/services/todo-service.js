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

  getTodos() {
    console.log("Calling the Todo");
    todoApi.get().then(res => {
      store.commit("todos", res.data.data.map(rawTodoData => new Todo(rawTodoData)))
      console.log(store.State.todos)
    }).catch(err => console.error(err))
  }

  addTodo(todo) {
    todoApi.post("", todo);
    //TODO Handle this response from the server (hint: what data comes back, do you want this?)
  }

  toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo._id == todoId);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    todoApi.put(todoId, todo);
    //TODO do you care about this data? or should you go get something else?
  }

  removeTodoAsync(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?
  }
}

const todoService = new TodoService();
export default todoService;
