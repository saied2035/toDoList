/**
 * @jest-environment jsdom
 */
import {
  taskAdd, taskEdit, taskCompleted, removeCompleted,
} from './events.js';
import taskList from '../toDoList/toDoList.js';

document.body.innerHTML = '<div id="container">'
  + '<div id="list-container">'
  + '<p id="title">today\'s To Do</p>'
  + '<i class="fa-solid fa-arrows-rotate"></i>'
  + '<input required id="task"  type="text" placeholder="Add to your list..." />'
  + '<img id="enter" src="#" alt="enter image">'
  + '<ul class="list"></ul>'
  + '<button id="clear" type="button">Clear all completed</button>'
  + '</div>'
  + '</div>';

describe('add tasks', () => {
  it('check if add task works', () => {
    // Arrange
    const input = document.querySelector('#task');
    input.value = 'saied';
    const event = {};
    // Act
    const result = taskAdd(event, taskList);
    // Assert
    expect(result).toBe('working!');
  });

  it('empty case', () => {
    const input = document.querySelector('#task');
    input.value = '';
    const event = {};
    const result = taskAdd(event, taskList);
    expect(result).toBe("it's empty");
  });
  it('click event test', () => {
    // Arrange
    const input = document.querySelector('#task');
    input.value = 'saied';
    const event = { type: 'click' };

    // Act
    const htmlResult = taskAdd(event, taskList);
    const storageResult = JSON.parse(localStorage.tasks)[0].description;

    // Assert
    const ul = document.querySelector('.list').children;
    const li = document.querySelector('.task');
    const checkLi = Array.from(ul).includes(li);
    expect(htmlResult).toBe('done');
    expect(storageResult).toBe('saied');
    expect(checkLi).toBe(true);
  });
});

describe('remove tasks', () => {
  it('check remove', () => {
    // arrange
    const removeButton = document.querySelector('.dots-container');
    const dotsIcon = removeButton.children[0];
    const event = {
      type: 'click',
      target: dotsIcon,
    };
    dotsIcon.classList.toggle('fa-ellipsis-vertical');
    dotsIcon.classList.toggle('fa-trash-can');
    // act
    taskEdit(event, taskList);
    // assert
    const ul = document.querySelector('.list');
    expect(ul.children.length).toBe(0);
  });
});

describe('check edit', () => {
  it('editable', () => {
    // Arrange
    const input = document.querySelector('#task');
    input.value = 'edit task';
    let event = {
      type: 'click',
    };

    taskAdd(event, taskList);

    const removeButton = document.querySelector('.dots-container');
    const dotsIcon = removeButton.children[0];
    event = {
      type: 'click',
      target: dotsIcon,
    };
    // Act
    const check = () => taskEdit(event, taskList);
    check();
    const description = document.querySelector('.description');
    expect(description.disabled).toBe(false);
  });
});

describe('check completed status', () => {
  it('completed', () => {
    // Arrange
    const input = document.querySelector('#task');
    input.value = 'completed task';
    let event = {
      type: 'click',
    };

    taskAdd(event, taskList);

    const checkbox = document.querySelector('.checkbox');

    event = {
      type: 'click',
      target: checkbox,
    };
    taskCompleted(event, taskList);
    const completedTask = JSON.parse(localStorage.tasks)[0].completed;
    expect(completedTask).toBe(true);
  });
});

describe('clear all task', () => {
  it('clear all', () => {
    // Arrange
    const input = document.querySelector('#task');
    input.value = 'completed all tasks';
    const checkboxes = document.querySelectorAll('.checkbox');

    Array.from(checkboxes).forEach((checkbox) => {
      const event = {
        type: 'click',
        target: checkbox,
      };
      taskCompleted(event, taskList);
    });
    const event = { type: 'click' };
    removeCompleted(event, taskList);
    expect(taskList.taskList.length).toBe(1);
  });
});
