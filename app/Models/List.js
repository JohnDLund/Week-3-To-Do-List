import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data.id || generateId()
    this.list = data.list || "New Task List"
    /**@type {string[]} */
    this.task = data.task || []
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you



  get Template() {
    let template = 
  /*html*/ `

<div class="col-xs-12 col-md-6 col-xl-3">
<div class="card m-3" style="width: 18rem;">
  <div class="card-header font-weight-bold">
    ${this.list}
    <p><button class="btn btn-sm btn-danger" onclick="app.listController.deleteList('${this.id}')">Delete List</button></p>
  </div>
  
  <form class="m-3" onsubmit="app.listController.addTask(event, '${this.id}')">
    <div class="form-group">
      <label for="createNewTask"></label>
      <input type="text" name="createNewTask" class="form-control" placeholder="Create a new task...">
    </div>
    <button type="submit" class="btn btn-sm btn-primary">Create New Task</button>
  </form>
  <ul class="list-group list-group-flush">
`

    this.task.forEach(i => template +=
 /*html*/ `

      <li class="list-group-item">
        <i onclick="app.listController.crossOutItem('${i}')" class="fa fa-check px-3"></i>
        <span id="${i}">${i}</span>
        <i onclick="app.listController.deleteTask('${i}')" class="fa fa-times px-3"></i>
      </li>
    `
    )

    template +=
      `
    </ul>
  </div>
</div>
  `

    return template
  }






}


