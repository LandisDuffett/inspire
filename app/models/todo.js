export default class Todo {
  constructor(data) {
    this._id = data._id
    this.user = data.user
    this.description = data.description
    this.completed = data.completed || false
  }

  get todoTemplate() {
    let template =
      `<li>${this.description}
        <button type="button" class="close tinierfont mt-2" aria-label="Remove" onclick="app.todoController.removeTodo('${this._id}')">
    &times;remove</button>
    <button type="button" class="close tinierfont mt-2" aria-label="Remove" onclick="app.todoController.toggleTodoStatus('${this._id}')">
    &check;toggle</button>
</li>`

    return template
  }
}