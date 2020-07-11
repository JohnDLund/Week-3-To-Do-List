import List from "../Models/List.js";
import store from "../store.js";

//Public
class ListService {
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change


  constructor() {
    console.log("hellow from services")
  }

  addMainList(rawListData) {
    let newList = new List(rawListData)
    store.addMainList(newList)
  }

  addTask(rawTaskData, listId) {
    let foundListId = store.State.lists.findIndex(list => list.id == listId)
    store.addTask(foundListId, rawTaskData)
  }

  crossOutItems(task) {
    store.crossOutItems(task)
  }

  deleteList(id) {
    store.deleteList(id)
  }

  deleteTask(task) {
    store.deleteTask(task)
  }



}



const SERVICE = new ListService();
export default SERVICE;
