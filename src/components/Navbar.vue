<template>
  <nav class="navbar d-flex justify-content-center">
    <h1 class="nav-text mt-2 text-white">Detta borde du göra-lista || strunta i det</h1>
    <LoginButton @btn-click="$emit('toggle-add-todo')" class="btn-blue" :text="showAddTodo ? 'Logga ut' : 'Logga in'"
     />
  </nav>
</template>

<script>
import LoginButton from './LoginButton'

export default {
  name: 'Navbar',
  props: {
    title: String,
    showAddTodo: Boolean
  },
  components: {
    LoginButton
  }
}
</script>

<style scoped>
nav {
  background-color: rgb(14, 13, 13);
  display: flex;
}
.btn-blue{
  background: rgb(22, 98, 211);
  color: #fff;
  margin-left: 30px;
}

</style>