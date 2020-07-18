export default class Todo {
  constructor(data) {
    this._id = data._id
    this.user = data.user
    this.description = data.description
    this.completed = data.completed || false
  }

  get todoTemplate() {
    let template =
      `<li><input type="checkbox" name="toggle" value="completed" ${this.completed ? 'checked' : ''} onclick="app.todoController.toggleTodoStatus('${this._id}')">
  <label for="toggle">${this.description}</label>
        <button type="button" class="close tinyfont mt-2" aria-label="Remove" onclick="app.todoController.removeTodo('${this._id}')">
    &times;remove</button>
</li>`

    return template
  }
}