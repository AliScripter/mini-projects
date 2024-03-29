'use strict';

const todos = document.querySelectorAll('.todo');
const all_status = document.querySelectorAll('.status');
let dragabbleTodo = null;

todos.forEach(todo => {
  todo.addEventListener('dragstart', dragStart);
  todo.addEventListener('dragend', dragEnd);
});

function dragStart() {
  dragabbleTodo = this;
  setTimeout(() => {
    this.style.display = 'none';
  }, 0);
}

function dragEnd() {
  dragabbleTodo = null;
  setTimeout(() => {
    this.style.display = 'block';
  }, 0);
}

all_status.forEach(status => {
  status.addEventListener('dragover', dragOver);
  status.addEventListener('dragenter', dragEnter);
  status.addEventListener('dragleave', dragLeave);
  status.addEventListener('drop', dragDrop);
});

function dragOver(e) {
  e.preventDefault();
}

function dragEnter() {
  this.style.border = '1px dashed #ccc';
}
function dragLeave() {
  this.style.border = 'none';
}
function dragDrop() {
  this.style.border = 'none';

  this.appendChild(dragabbleTodo);
}

// !----- modal
const btns = document.querySelectorAll('[data-target-modal]');
const colse_modals = document.querySelectorAll('.close-modal');
const overlay = document.getElementById('overlay');

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector(btn.dataset.targetModal).classList.add('active');
    overlay.classList.add('active');
  });
});

colse_modals.forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal');
    modal.classList.remove('active');
    overlay.classList.remove('active');
  });
});

window.onclick = event => {
  if (event.target == overlay) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => modal.classList.remove('active'));
    overlay.classList.remove('active');
  }
};

// !---- CREATE TODO

const todo_submit = document.getElementById('todo_submit');

todo_submit.addEventListener('click', createTodo);

function createTodo() {
  const todo_div = document.createElement('div');
  const input_val = document.getElementById('todo_input').value;

  const text = document.createTextNode(input_val);

  todo_div.appendChild(text);
  todo_div.classList.add('todo');
  todo_div.setAttribute('draggable', 'true');

  //*---- create span
  const span = document.createElement('span');
  const span_txt = document.createTextNode('\u00D7');
  span.classList.add('close');
  span.appendChild(span_txt);

  todo_div.append(span);
  no_status.appendChild(todo_div);

  span.addEventListener('click', () => {
    span.parentElement.style.display = 'none';
  });

  todo_div.addEventListener('dragstart', dragStart);
  todo_div.addEventListener('dragend', dragEnd);

  document.getElementById('todo_input').value = '';
  todo_form.classList.remove('active');
  overlay.classList.remove('active');
}

const close_btns = document.querySelectorAll('.close');

close_btns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.style.display = 'none';
  });
});
