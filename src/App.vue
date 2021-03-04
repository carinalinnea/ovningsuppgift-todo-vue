<template>
  <div>
    <Navbar @toggle-add-todo="toggleAddTodo" :showAddTodo="showAddTodo"/>
    <div v-show="showAddTodo">
      <Form @add-todo="addTodo" />
    </div>
    
    <Todos @toggle-completed="toggleCompleted" @delete-todo="deleteTodo" :todos='todos'/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Form from './components/Form'
import Todos from './components/Todos'

export default {
  name: 'App',
  components: {
    Navbar,
    Form,
    Todos
  },
  data() {
    return {
      todos: [],
      showAddTodo: false
    }
  },
  methods: {
    toggleAddTodo() {
      this.showAddTodo = !this.showAddTodo
    },
    // lägg till en todo, klearar inte fältet dock...
    addTodo(todo) {
      this.todos = [...this.todos, todo]
    },
    // ta bort en todo
    deleteTodo(id) {
      if(confirm('Är du säker på att du vill ta bort?')) {
        this.todos = this.todos.filter((todo) => todo.id !== id)
      }
    },
    // toggla mellan genomstruken/inte genomstruken
    toggleCompleted(id) {
      this.todos = this.todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo)
    },
  },
  created() {
    this.todos = [
      {id: 1, todo: 'Simma', completed: false},
      {id: 2, todo: 'Sjunga', completed: true},
      {id: 3, todo: 'Läkarbesök', completed: true}
    ]
    
  }
}
</script>

<style>

.btn-green {
  background-color: rgb(36, 163, 31);
  color: #fff;
  border-radius: 0.7rem;
}
</style>
