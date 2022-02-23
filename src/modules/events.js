import {getTasks} from './functions.js'
import {taskList} from '../index.js'
export const taskAdd = (event,list) => {
	const input = document.querySelector('#task')
	if(!input.value){
		return
	}
	if(event.keyCode===13 || event.type==='click'){
     list.addTask(input.value)
     input.value=null
	}
}

export const taskCompleted = (event) => {
	
   let checked = !event.target.parentNode.children[1].classList.contains('completed')
   const listOfTasks = document.querySelectorAll('.checkbox')
   const index = Array.from(listOfTasks).indexOf(event.target)
   event.target.parentNode.classList.toggle('disabled')
   event.target.parentNode.children[1].classList.toggle('completed')
   const tasks = getTasks()
   tasks[index].completed= checked
   window.localStorage.setItem('tasks',JSON.stringify(tasks))
   taskList.completeTask(index,checked)
};
