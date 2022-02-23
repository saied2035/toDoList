import {taskCompleted} from './events.js'
class toDoList {
	constructor(){
		this.taskList=[]
	}
	addTask(description) {
      const taskContainer = document.querySelector('#list');
      const id= taskContainer.children.length+1
      const li = document.createElement('li');
	  li.className = 'task';
	  const checkBox = document.createElement('input');
	  checkBox.type = 'checkbox';
	  checkBox.className = 'checkbox';
	  checkBox.addEventListener('click', taskCompleted);
	  const desc = document.createElement('input');
	  desc.className = 'description';
	  desc.value = description;
	  desc.disabled= true;
	  desc.required = true;
	  const dots = document.createElement('i');
	  dots.className = 'fa-solid fa-ellipsis-vertical';
	  checkBox.addEventListener('submit', taskCompleted);
	  li.appendChild(checkBox);
	  li.appendChild(desc);
	  li.appendChild(dots);
	  taskContainer.appendChild(li);
	  this.taskList.push({id:id,description:description,completed:false})
	  window.localStorage.setItem('tasks',JSON.stringify(this.taskList))
	}
	completeTask(index,checked) {
		this.taskList[index].completed = checked
	}
	removeTask(index) {

	}
}
export default toDoList;