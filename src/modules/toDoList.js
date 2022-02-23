/* eslint-disable linebreak-style */
import { taskCompleted, taskEdit } from './events.js';

class ToDoList {
  constructor() {
    this.taskList = [];
  }

  addTask(description) {
    const taskContainer = document.querySelector('#list');
    const id = taskContainer.children.length + 1;
    const li = document.createElement('li');
    li.className = 'task';
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.className = 'checkbox';
    checkBox.addEventListener('click', (event) => taskCompleted(event, this));
    const desc = document.createElement('input');
    desc.className = 'description';
    desc.value = description;
    desc.disabled = true;
    desc.required = true;
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
    this.taskList.push({ id, description, completed: false });
    window.localStorage.setItem('tasks', JSON.stringify(this.taskList));
  }

  completeTask(index, checked) {
    this.taskList[index].completed = checked;
  }

  removeTask(index) {
    this.taskList.splice(index, 1);
    this.taskList = this.taskList.map((task, i) => (
      { id: i + 1, description: task.description, completed: task.completed }
    ));

    window.localStorage.setItem('tasks', JSON.stringify(this.taskList));
  }
}
const taskList = new ToDoList();
export default taskList;