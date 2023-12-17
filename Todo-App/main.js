const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const todoItemTemplate = document.getElementById('todo-item-template');

const todos = JSON.parse(localStorage.getItem('todos') ?? '[]');
window.todos = todos;
todos.forEach(addTodo);

function addTodo(todo) {
  const todoItem = renderTodoItem(todo);
  todoList.prepend(todoItem);
}

function updateLocalStorage() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodoItem(todo) {
  const todoItem = todoItemTemplate.content.cloneNode(true).firstElementChild;
  todoItem.querySelector('.todo-text').textContent = todo.text;

  todoItem.querySelector('a').addEventListener('click', () => {
    todoItem.remove();
    const indexToRemove = todos.indexOf(todo);
    todos.splice(indexToRemove, 1);
    updateLocalStorage();
  });

  if (todo.isDone) {
    todoItem.querySelector('.todo-text').classList.add('done');
    todoItem.querySelector('.todo-checkbox').checked = true;
  }

  todoItem.querySelector('.todo-checkbox').addEventListener('change', () => {
    todo.isDone = !todo.isDone;
    todoItem.querySelector('.todo-text').classList.toggle('done');
    updateLocalStorage();
  });

  return todoItem;
}

todoForm.addEventListener('submit', event => {
  event.preventDefault();

  const todoText = todoInput.value;
  if (todoText === '') return;

  const todo = {
    text: todoText,
    addedOn: new Date().toISOString(),
    isDone: false,
  };

  addTodo(todo);
  todos.push(todo);
  updateLocalStorage();
  todoInput.value = '';
});
