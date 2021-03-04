const form = document.querySelector('#todoForm');
const input = document.querySelector('#todoInput');
const output = document.querySelector('#output');

// array att spara allt vi hämtar i
let todos = [];

// hämtning av 10 todos
const fetchTodos = () => {
  fetch('http://jsonplaceholder.typicode.com/posts/?_limit=10')
  .then(res => res.json())
  .then(data => {
    todos = data;
    // funktion för att visa alla todos
    listTodos();
  })
}
// kör funktionen för att få hem 10 todos
fetchTodos();

// skriv ut ny todos 
const listTodos = () => {
  
  // töm listan först
  output.innerHTML = '';

  // för varje todo vill jag skapa en ny och lägga till i listan
  todos.forEach(todo => {
    let _todo = todo.completed ?  `
      <div id="${todo.id}" class="todo completed">
        <h3 class="title">${todo.title}</h3>
        <button class="btn btn-danger">Ta bort</button>
      </div>
      `
      : `
      <div id="${todo.id}" class="todo">
        <h3 class="title">${todo.title}</h3>
        <button class="btn btn-danger">Ta bort</button>
      </div>
      `
    output.insertAdjacentHTML('beforeend', _todo);
  })
}

// skapa en todo och simulera skickande av data till jsonplaceholder
const createTodo = (title) => {

  fetch('http://jsonplaceholder.typicode.com/posts/?_limit=10',{
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
      title,
      completed: false
    })
  })
  .then(res => res.json())
  .then(data => {
    todos.unshift(data);
    listTodos();
  })

}

// validera input
const validateInput = () => {
  const todoInput = document.querySelector('#todoInput');
  const todoInputError = document.querySelector('#todoInput-error');

  if(todoInput.value === '') {
    todoInputError.innerText = 'Hörrö,du måste skriva i en text också!';
    
  }
  else {
    todoInputError.innerText = '';
    createTodo(input.value);
  }
}

// kör validering och submitta
form.addEventListener('submit', function(e) {
  e.preventDefault();

  // kör validering
  validateInput();
  // töm input
  input.value = '';
})

// lyssna på ett klick-event för att toggla och kalla på funktionen
output.addEventListener('click', e => {

  // kolla om innehåller klassen 'title' för att toggla
  if(e.target.classList.contains('title'))
  toggleComplete(e.target.parentNode.id)

  // kolla om innehåller klassen 'btn-danger' för att ta bort från listan
  if(e.target.classList.contains('btn-danger') && e.target.parentNode.classList.contains('completed'))
    deleteTodo(e.target.parentNode.id)

})

// funktionen för att toggla
const toggleComplete = (id) => {
  todos.map(todo => {
    if(todo.id == id) {
      todo.completed = !todo.completed
    }
    listTodos();
    return todo
  })

}
// funktion för att ta bort en todo
const deleteTodo = id => {
 
  todos = todos.filter(todo => todo.id !=id);
  listTodos();
}