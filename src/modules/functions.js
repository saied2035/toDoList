import taskCompleted from './events.js';

const showToDoList = (list) => {
  const toDoList = document.querySelector('#list');
  list.forEach((task) => {
    const li = document.createElement('li');
    li.className = 'task';
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.className = 'checkbox';
    checkBox.addEventListener('click', taskCompleted);
    const description = document.createElement('p');
    description.className = 'description';
    description.innerText = task.description;
    const dots = document.createElement('i');
    dots.className = 'fa-solid fa-ellipsis-vertical';
    li.appendChild(checkBox);
    li.appendChild(description);
    li.appendChild(dots);
    toDoList.appendChild(li);
  });
};
export default showToDoList;