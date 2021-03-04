<template>
  <div @dblclick="$emit('toggle-completed', todo.id)" :class="[todo.completed ? 'completed' : '', 'todo']">
    <h3>{{todo.todo}}</h3>
    <button @click="$emit('delete-todo', todo.id)" class="btn btn-danger">Ta bort</button>
  </div>
  
</template>

<script>
export default {
  name: 'Todo',
  props: {
    todo: Object,
  },
  
}
</script>

<style scoped>
.todo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 1rem;
  border-radius: 0.7rem;
  box-shadow: 5px 5px 10px 0 #333;
  margin: 1.5rem 0;
  box-shadow: 5px 5px 7px 0 rgb(87, 165, 230);
}
.todo:hover {
  box-shadow: 5px 5px 10px 2px rgb(87, 165, 230);
}
.todo:active {
  box-shadow: 5px 5px 6px 0 rgb(87, 165, 230);
}
.completed h3{
  text-decoration: line-through;
  color: rgb(36, 163, 31);
}
.todo {
  flex: 1;
  cursor: pointer;
}
</style>