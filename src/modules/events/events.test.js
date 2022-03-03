/**
 * @jest-environment jsdom
 */
import { taskAdd, taskEdit } from "./events";
import taskList from "../toDoList/toDoList.js";

beforeEach(() => {
  document.body.innerHTML =
    '<div id="container">' +
    '<div id="list-container">' +
    '<p id="title">today\'s To Do</p>' +
    '<i class="fa-solid fa-arrows-rotate"></i>' +
    '<input required id="task"  type="text" placeholder="Add to your list..." />' +
    '<img id="enter" src="#" alt="enter image">' +
    '<ul class="list"></ul>' +
    '<button id="clear" type="button">Clear all completed</button>' +
    "</div>" +
    "</div>";
});

describe("add tasks", () => {
  it("check if add task works", () => {
    //Arrange
    const input = document.querySelector("#task");
    input.value = "saied";
    const event = {};
    //Act
    const result = taskAdd(event, taskList);
    //Assert
    expect(result).toBe("working!");
  });

  it("empty case", () => {
    const input = document.querySelector("#task");
    input.value = "";
    const event = {};
    const result = taskAdd(event, taskList);
    expect(result).toBe("it's empty");
  });
  it("click event test", () => {
    // Arrange
    const input = document.querySelector("#task");
    input.value = "saied";
    const event = { type: "click" };

    // Act
    const htmlResult = taskAdd(event, taskList);
    const storageResult = JSON.parse(localStorage.tasks)[0].description;

    // Assert
    const ul = document.querySelector(".list").children;
    const li = document.querySelector(".task");
    const checkLi = Array.from(ul).includes(li);
    expect(htmlResult).toBe("done");
    expect(storageResult).toBe("saied");
    expect(checkLi).toBe(true);
  });
});

describe("remove tasks", () => {
  it("check remove", () => {
    //arrange
    const input = document.querySelector("#task");

    input.value = "remove task";
    const event = {
    	type: 'click',
      target: {
        parentNode: {
          parentNode: input,
          classList: ["svg-inline--fa","fa-trash-can"]
        },

      },
    };
    taskAdd(event, taskList);
    const ul = document.querySelector(".list");
    const li = ul.children[0]
    const removeButton = document.querySelector(".dots-container");
    const dotsIcon = removeButton.children[0];
    dotsIcon.classList.toggle("fa-ellipsis-vertical");
    dotsIcon.classList.toggle("fa-trash-can");
    removeButton.click();
    //act
    const check = () => taskEdit(event, taskList);
    check();
    //assert
    expect(check).toBe();
  });
});
