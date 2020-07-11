import _listService from "../Services/ListService.js";
import _store from "../store.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let template = ""
  _store.State.lists.forEach(i => template += i.Template)
  document.getElementById("taskListCard").innerHTML = template
}

// function _drawTasks() {
//   let template = ""
//   _store.State.lists.forEach(i => template += i.Template)
//   document.getElementById("tasks").innerHTML += template
// }

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }

  addMainList(event) {
    event.preventDefault()
    let rawListData = {
      list: event.target.createNewList.value
    }
    _listService.addMainList(rawListData)
    event.target.reset()
    _drawLists()
    _store.saveState()
  }

  addTask(event, listId) {
    event.preventDefault()
    let rawTaskData = event.target.createNewTask.value
    _listService.addTask(rawTaskData, listId)
    event.target.reset()
    _drawLists()
    _store.saveState()
  }

  crossOutItem(task) {
     _listService.crossOutItems(task)
    _drawLists
    _store.saveState()
  }

  deleteList(id) {
    _listService.deleteList(id)
    _drawLists()
    _store.saveState()
  }

  deleteTask(task) {
    _listService.deleteTask(task)
    _drawLists()
    _store.saveState()
  }



  //TODO: Your app will need the ability to create, and delete both lists and listItems

}
