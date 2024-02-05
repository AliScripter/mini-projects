'use strict';
const $ = document;
const inputEl = $.getElementById('itemInput');
const addButtonEl = $.getElementById('addButton');
const clearButtonEl = $.getElementById('clearButton');
const todoListEl = $.getElementById('todoList');
let todosArray = [];

function addNewTodo() {
  let newTodoTitle = inputEl.value;
  if (newTodoTitle) {
    let newTodoObj = {
      id: todosArray.length + 1,
      title: newTodoTitle,
      complete: false,
    };
    
    inputEl.value = '';
    todosArray.push(newTodoObj);
    setLocalStorage(todosArray);
    todosGenerator(todosArray);
    inputEl.focus();
  } else {
    alert(`Please Enter the current value !`);
  }
}

function setLocalStorage(todosList) {
  localStorage.setItem('todos', JSON.stringify(todosList));
}

function todosGenerator(todosList) {
  let newTodoLiElem, newTodoLabalElem, newTodoCompleteBtn, newTodoDeleteBtn;

  todoListEl.innerHTML = '';

  todosList.forEach(function (todo) {
    newTodoLiElem = $.createElement('li');
    newTodoLiElem.className = 'completed well';

    newTodoLabalElem = $.createElement('label');
    newTodoLabalElem.innerHTML = todo.title;

    newTodoCompleteBtn = $.createElement('button');
    newTodoCompleteBtn.className = 'btn btn-success';
    newTodoCompleteBtn.innerHTML = 'Complete';
    newTodoCompleteBtn.setAttribute('onclick', `editTodo(${todo.id})`);

    newTodoDeleteBtn = $.createElement('button');
    newTodoDeleteBtn.className = 'btn btn-danger';
    newTodoDeleteBtn.innerHTML = 'Delete';
    newTodoDeleteBtn.setAttribute('onclick', `removeTodo(${todo.id})`);

    if (todo.complete) {
      newTodoLiElem.className = 'uncompleted well';
      newTodoCompleteBtn.innerHTML = 'Uncomplete';
    }

    newTodoLiElem.append(
      newTodoLabalElem,
      newTodoCompleteBtn,
      newTodoDeleteBtn
    );
    todoListEl.append(newTodoLiElem);
  });
}

function editTodo(todoId) {
  let localStorageTodos = JSON.parse(localStorage.getItem('todos'));
  todosArray = localStorageTodos;

  todosArray.forEach(function (todo) {
    if (todo.id === todoId) {
      todo.complete = !todo.complete;
    }
  });
  setLocalStorage(todosArray);
  todosGenerator(todosArray);
}

function removeTodo(todoId) {
  let localStorageTodos = JSON.parse(localStorage.getItem('todos'));
  todosArray = localStorageTodos;

  let mainTodoIndex = todosArray.findIndex(function (todo) {
    return todo.id === todoId;
  });

  todosArray.splice(mainTodoIndex, 1);
  setLocalStorage(todosArray);
  todosGenerator(todosArray);
}

function getLocalStorage() {
  let localStorageTodos = JSON.parse(localStorage.getItem('todos'));

  if (localStorageTodos) {
    todosArray = localStorageTodos;
  } else todosArray = [];

  todosGenerator(todosArray);
}

function clearTodos() {
  todosArray = [];
  todosGenerator(todosArray);
  localStorage.removeItem('todos');
}

addButtonEl.addEventListener('click', addNewTodo);
inputEl.addEventListener('keyup', e => {
  if (e.code === 'Enter') {
    addNewTodo();
  }
});
window.addEventListener('load', getLocalStorage);
clearButtonEl.addEventListener('click', clearTodos);
