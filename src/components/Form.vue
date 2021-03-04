<template>
  <form @submit="onSubmit" id="todoForm" class="container">
        <div class="input-group my-3">
            <input  type="text" v-model="text" name="text" id="todoInput" class="form-control" placeholder="Lägg till en sak till listan...">
            <Button text="Lägg till"/>
        </div>
        <!-- two-way-binding -->
        <!-- {{text}} -->

        
        <div id="todoInput-error" class="text-red"></div>
        
    </form>
</template>

<script>
import Button from './Button'

export default {
  name: 
  'Form',

  data() {
    return {
      text: '',
      completed: false,
    }
  },
  components: {
    Button
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()
      if(!this.text) {
        alert('Hörrö,du måste skriva i en text också!')
        return
      }
      const newTodo = {
        id: Math.floor(Math.random() * 100000),
        todo: this.text,
        completed: this.completed
        
      }
      // console.log(newTodo)
      this.$emit('add-todo', newTodo);

      this.todo = ''
      this.completed = false
      
     
    }
      

  }
}

</script>

<style scoped>
input {
  border-radius: 0.7rem;
  box-shadow: 5px 5px 10px 0 #333;
  box-shadow: 5px 5px 7px 0 rgb(87, 165, 230);
  padding: 1.5rem 0.5rem;
  font-size: 1.3rem;
}
input:hover {
  box-shadow: 5px 5px 10px 2px rgb(87, 165, 230);
}
input:active {
  box-shadow: 5px 5px 6px 0 rgb(87, 165, 230);
}
button {
  overflow: hidden;
}
.text-red {
  color: red;
  font-weight: 800;
  background-color: #fff;
  border-radius: 5px;
  padding-left: 10px;
  font-size: 2rem;
  display: flex;
  justify-content: center;
}
</style>