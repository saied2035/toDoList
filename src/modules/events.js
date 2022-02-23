/* eslint-disable linebreak-style */
import { getTasks } from './functions.js';

export const taskAdd = (event, list) => {
  const input = document.querySelector('#task');
  if (!input.value) {
    return;
  }
  if (event.keyCode === 13 || event.type === 'click') {
    list.addTask(input.value);
    input.value = null;
  }
};

export const taskCompleted = (event, list) => {
  const checked = !event.target.parentNode.children[1].classList.contains('completed');
  const listOfTasks = document.querySelectorAll('.checkbox');
  const index = Array.from(listOfTasks).indexOf(event.target);
  event.target.parentNode.classList.toggle('disabled');
  event.target.parentNode.children[1].classList.toggle('completed');
  const tasks = getTasks();
  tasks[index].completed = checked;
  window.localStorage.setItem('tasks', JSON.stringify(tasks));
  list.completeTask(index, checked);
};

export const taskEdit = (event, list) => {
  const task = event.target.parentNode.parentNode;
  event.target.classList.toggle('fa-ellipsis-vertical');
  event.target.classList.toggle('fa-trash-can');
  if (event.target.classList.contains('fa-trash-can')) {
    task.classList.add('bg-yellow');
    task.children[1].disabled = false;
  } else {
    const icons = document.querySelectorAll('.svg-inline--fa');
    const [, ...iconsArr] = icons;
    const index = iconsArr.indexOf(event.target);
    task.classList.remove('bg-yellow');
    task.children[1].disabled = true;
    task.remove();
    list.removeTask(index);
  }
};