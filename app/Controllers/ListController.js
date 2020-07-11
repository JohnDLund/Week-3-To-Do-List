import _listService from "../Services/ListService.js";
import _store from "../store.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let template = ""
  _store.State.lists.forEach(i => template += i.Template)
  document.getElementById("taskListCard").innerHTML = template
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
    console.log("hellow from controller")
  }

  addMainList(event) {
    event.preventDefault()
    let rawListData = {
      list: event.target.createNewList.value
    }
    _listService.addMainList(rawListData)
    event.target.reset()
    _drawLists()
  }

  addTask(event, listId) {
    event.preventDefault()
    let rawTaskData = {
      taskItem: event.target.createNewTask.value
    }
    _listService.addTask(rawTaskData, listId)
    event.target.reset()
    _drawLists()


  }



  //TODO: Your app will need the ability to create, and delete both lists and listItems

}
