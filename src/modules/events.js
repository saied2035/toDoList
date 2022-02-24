/* eslint-disable linebreak-style */
import { getTasks, checkTaskStyle } from './functions.js';

export const taskAdd = (event, list) => {
  const input = document.querySelector('#task');
  const ul = input.parentNode.children[4];
  if (!input.value) {
    return;
  }
  if (event.keyCode === 13 || event.type === 'click') {
    list.addTask(input.value);
    ul.classList.remove('dn');
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
  checkTaskStyle(event.target.parentNode);
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
    list.removeTask(index);
    if (!list.taskList.length) {
      task.parentNode.classList.add('dn');
    }
    task.remove();
  }
};

export const updateValue = (event, list) => {
  const icon = event.target.parentNode.children[2];
  if (!event.target.value) {
    event.target.placeholder = "the task shouldn't be empty. Please, add value.";
    return;
  }
  if (event.keyCode === 13) {
    event.target.disabled = true;
    event.target.parentNode.classList.remove('bg-yellow');
    icon.children[0].classList.toggle('fa-ellipsis-vertical');
    icon.children[0].classList.toggle('fa-trash-can');
    const descriptions = document.querySelectorAll('.description');
    const index = Array.from(descriptions).indexOf(event.target);
    list.updateTaskDeskcription(index, event.target.value);
  }
};

export const removeCompleted = (event, list) => {
  const completedTasks = document.querySelectorAll('.disabled');
  Array.from(completedTasks).forEach((task) => task.remove());
  list.removeCompletedTask();
  if (!list.taskList.length) {
    const ul = document.querySelector('.list');
    ul.classList.add('dn');
  }
};