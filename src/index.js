/* eslint-disable linebreak-style */
import './style.css';
import '@fortawesome/fontawesome-free/js/all.js';
import { showToDoList } from './modules/functions.js';
import taskList from './modules/toDoList.js';
import { taskAdd, removeCompleted } from './modules/events.js';
import enter from './images/enter.svg';

document.querySelector('#enter').src = enter;

document.querySelector('#task').addEventListener('keypress', (event) => taskAdd(event, taskList));
document.querySelector('#enter').addEventListener('click', (event) => taskAdd(event, taskList));
document.querySelector('#clear').addEventListener('click', (event) => removeCompleted(event, taskList));
showToDoList(taskList);
