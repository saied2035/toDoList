import './style.css';
import '@fortawesome/fontawesome-free/js/all.js';
import showToDoList from './modules/functions.js';
import enter from './images/enter.svg';

document.querySelector('#enter').src = enter;
const toDoList = [
  {
    description: 'task1',
    completed: false,
    index: 1,
  },
  {
    description: 'task2',
    completed: false,
    index: 2,
  },
  {
    description: 'task3',
    completed: false,
    index: 3,
  },
  {
    description: 'task4',
    completed: false,
    index: 4,
  },
  {
    description: 'task5',
    completed: false,
    index: 5,
  },
];

showToDoList(toDoList);
