<template>
  <div id="output" class="container"  v-if="todos.length > 0" > 
    <!-- loopar ut alla todos -->
    <p v-for="todo in todos" :key="todo.id">
      <Todo @toggle-completed="$emit('toggle-completed', todo.id)" @delete-todo="$emit('delete-todo', todo.id)" :todo="todo" />
      
    </p>
    
  </div>
</template>

<script>
import Todo from './Todo'

export default {
  name: 'Todos',
  props: {
    todos: Array,
  },
  components: {
    Todo,
  },
  emits: ['delete-todo', 'toggle-completed'],
}
</script>

<style scoped>

</style>