/* eslint-disable linebreak-style */
import { taskCompleted, taskEdit, updateValue } from './events.js';

class ToDoList {
  constructor() {
    this.taskList = [];
  }

  addTask(description) {
    const taskContainer = document.querySelector('#list');
    const index = taskContainer.children.length + 1;
    const li = document.createElement('li');
    li.className = 'task';
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.className = 'checkbox';
    checkBox.addEventListener('change', (event) => taskCompleted(event, this));
    const desc = document.createElement('input');
    desc.className = 'description';
    desc.value = description;
    desc.disabled = true;
    desc.required = true;
    desc.addEventListener('keydown', (event) => updateValue(event, this));
    const dotsContainer = document.createElement('span');
    dotsContainer.className = 'dots-container';
    const dots = document.createElement('i');
    dots.className = 'fa-solid fa-ellipsis-vertical';
    dotsContainer.appendChild(dots);
    dotsContainer.addEventListener('click', (event) => taskEdit(event, this));
    li.appendChild(checkBox);
    li.appendChild(desc);
    li.appendChild(dotsContainer);
    taskContainer.appendChild(li);
    this.taskList.push({ index, description, completed: false });
    window.localStorage.setItem('tasks', JSON.stringify(this.taskList));
  }

  completeTask(index, checked) {
    this.taskList[index].completed = checked;
  }

  removeTask(index) {
    this.taskList.splice(index, 1);
    this.taskList = this.taskList.map((task, i) => (
      { index: i + 1, description: task.description, completed: task.completed }
    ));

    window.localStorage.setItem('tasks', JSON.stringify(this.taskList));
  }

  updateTaskDeskcription(index, value) {
    this.taskList[index].description = value;
    window.localStorage.setItem('tasks', JSON.stringify(this.taskList));
  }

  removeCompletedTask() {
    this.taskList = this.taskList.filter((task) => task.completed === false);
    this.taskList = this.taskList.map((task, i) => (
      { index: i + 1, description: task.description, completed: task.completed }
    ));
    window.localStorage.setItem('tasks', JSON.stringify(this.taskList));
  }
}
const taskList = new ToDoList();
export default taskList;