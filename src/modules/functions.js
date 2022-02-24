/* eslint-disable linebreak-style */
export const getTasks = () => JSON.parse(localStorage.tasks);
export const checkTaskStyle = (task) => {
  if (!task.classList.contains('bg-yellow')) return;
  task.classList.remove('bg-yellow');
  task.children[1].disabled = true;
  const icon = task.children[2];
  icon.children[0].classList.toggle('fa-ellipsis-vertical');
  icon.children[0].classList.toggle('fa-trash-can');
};
export const showToDoList = (taskList) => {
  if (!window.localStorage.tasks) {
    return;
  }
  const list = getTasks();
  const ul = document.querySelector('.list');
  if (!list.length) {
    ul.classList.add('dn');
  }
  list.forEach((task) => {
    taskList.loadTask(task);
  });
};
