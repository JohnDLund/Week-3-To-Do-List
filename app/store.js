import List from "./Models/List.js";

let _state = {
  /** @type {List[]} */
  lists: [],
};



//NOTE You should not need to change the code from this point down

//NOTE this method will get the lists from local storage at the start of the app
function _loadState() {
  let data = JSON.parse(localStorage.getItem("TaskMaster"));
  if (data) {
    data.lists = data.lists.map(l => new List(l));
    _state = data;
  }
}
_loadState();

class Store {


  addMainList(newTaskList) {
    _state.lists.push(newTaskList)

  }

  addTask(foundListId, rawTaskData) {
    if (rawTaskData) {
      _state.lists[foundListId].task.push(rawTaskData)
    }
  }

  deleteList(id) {
    if (confirm("Delete List?") == true) {
      let indexToRemove = _state.lists.findIndex(i => i.id == id)
      _state.lists.splice(indexToRemove, 1)
    }
  }


  crossOutItems(taskName) {
    if (document.getElementById(taskName).innerHTML === "<del>" + taskName + "</del>") {
      document.getElementById(taskName).innerHTML = taskName
    } else {document.getElementById(taskName).innerHTML = "<del>" + taskName + "</del>"}
  }


  deleteTask(taskName) {
    if (confirm("Delete Task?") == true) {
      for (let i = 0; i < _state.lists.length; i++) {
        for (let y = 0; y < _state.lists[i].task.length; y++) {
          if (_state.lists[i].task[y] == taskName)
            _state.lists[i].task.splice(y, 1)
        }
      }
    }
  }


  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }

  //NOTE call saveState everytime you change the state in any way
  saveState() {
    localStorage.setItem("TaskMaster", JSON.stringify(_state));
  }

}

const store = new Store();
export default store;
