/* eslint-disable linebreak-style */
export const getTasks = () => JSON.parse(localStorage.tasks);

export const showToDoList = (taskList) => {
  if (!window.localStorage.tasks) {
    return;
  }
  const list = JSON.parse(window.localStorage.tasks);
  list.forEach((task) => {
    taskList.addTask(task.description);
  });
};
