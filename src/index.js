import './style.css';
import '@fortawesome/fontawesome-free/js/all.js';
import {showToDoList} from './modules/functions.js';
import toDoList from './modules/toDoList.js'
import {taskAdd} from './modules/events.js'
import enter from './images/enter.svg';

document.querySelector('#enter').src = enter;
export const taskList = new toDoList()

document.querySelector('#task').addEventListener('keypress',(event) => taskAdd(event,taskList))
document.querySelector('#enter').addEventListener('click',(event) => taskAdd(event,taskList))
showToDoList(taskList);