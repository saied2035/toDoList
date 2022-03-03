/**
 * @jest-environment jsdom
 */
import {taskAdd} from './events'
import taskList from '../toDoList/toDoList.js'

beforeEach(() => {
  document.body.innerHTML= '<div id="container">' +
        '<div id="list-container">' +
            '<p id="title">today\'s To Do</p>'+
            '<i class="fa-solid fa-arrows-rotate"></i>' +
            '<input required id="task"  type="text" placeholder="Add to your list..." />' +
            '<img id="enter" src="#" alt="enter image">'+
            '<ul class="list"></ul>'+
            '<button id="clear" type="button">Clear all completed</button>' +
        '</div>'+      
    '</div>'
});

describe('add tasks', () => {

	it('check if add task works', () => {
		//Arrange
		const input = document.querySelector('#task');
		input.value='saied' 
		const event = {}
		//Act
		const result = taskAdd(event,taskList)
		//Assert
		expect(result).toBe("working!")
	})

	it('empty case', () => {
		const input = document.querySelector('#task'); 
		input.value = ''
		const event = {}
		const result = taskAdd(event,taskList)
		expect(result).toBe("it's empty")
	})
})

