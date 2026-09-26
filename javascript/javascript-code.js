document.querySelector('.js-name-input').addEventListener('keydown',(event) => {
  if(event.key === 'Enter') {
    addTodo();
  }
});
const savedList = localStorage.getItem('todoList');

const todoList = savedList ? JSON.parse(savedList) : [];



function renderTodoList(){
  const element = document.querySelector('.js-todo-grid');
  element.innerHTML = '';

  let i = 0;

  while(i < todoList.length){
    element.innerHTML += `
      <div class="todo-row">
        <div>${todoList[i].name}</div>
        <div>${todoList[i].date}</div>
        <button onclick="deleteTodo(${i})">Remove</button>
      </div>
    `;
    i++;
  }
}



function addTodo() {
  const element = document.querySelector('.js-todo-grid');
  element.innerHTML = '';

  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const inputDate = document.querySelector('.due-date-input');
  const date = inputDate.value;

  todoList.push({name : name, date : date});

  localStorage.setItem('todoList', JSON.stringify(todoList));

  inputElement.value = '';

  let i = 0;

  while(i < todoList.length){
    element.innerHTML += `
      <div class="todo-row">
        <div>${todoList[i].name}</div>
        <div>${todoList[i].date}</div>
        <button onclick="deleteTodo(${i})">Remove</button>
      </div>
    `;
    i++;
  }
}
function deleteAll(){
  todoList.length = 0;
  localStorage.setItem('todoList', JSON.stringify(todoList));

  const element = document.querySelector('.js-todo-grid');
  element.innerHTML = 'list emptied';
}


function deleteTodo(a){
  todoList.splice(a,1);

  localStorage.setItem('todoList', JSON.stringify(todoList));

  renderTodoList();
}

renderTodoList();


