import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data.id || generateId();
    this.list = data.list || "New Task List"
    this.taskItem = data.taskItem || "new Task Item"
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you



  get Template() {
    let template = /*html*/ `

<div class="col-4">
<div class="card m-3" style="width: 18rem;">
  <div class="card-header">
    ${this.list}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><i onclick="app.listController.crossOutItem()" class="fa fa-check px-3"></i>${this.taskItem}<i onclick="app.listController.deleteListItem()" class="fa fa-times px-3"></i></li>
  </ul>
  <form class="m-3" onsubmit="app.listController.addTask(event)">
    <div class="form-group">
      <label for="createNewTaskList"></label>
      <input type="text" name="createNewTask" class="form-control" placeholder="Create a new task...">
    </div>
    <button type="submit" class="btn btn-primary">Create New Task</button>
  </form>
</div>
  </div>
`
    return template

  }

}

