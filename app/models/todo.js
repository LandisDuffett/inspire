export default class Todo {
  constructor(data) {
    this._id = data._id
    this.user = data.user
    this.description = data.description
    this.completed = data.completed || false
  }

  get Template() {
    this.tasks.forEach((task) => template += `
    <li class="" style="text-decoration: ${task.strike};">${task.name}
        <button type="button" class="close tinierfont mt-2" aria-label="Remove" onclick="app.listController.deleteTask('${task}')">
    &times;remove</button>
    <button type="button" class="close tinierfont mt-2" aria-label="Remove" onclick="app.listController.completeTask('${task.id}')">
    &check;toggle</button>
</li>`)

    template += `</ul>
    </div>`

    return template
  }
}