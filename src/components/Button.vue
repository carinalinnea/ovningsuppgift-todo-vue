<template>
  <button @click="onClick()" id="btnSubmit" class=" btn btn-green">{{text}}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
  },
  methods: {
    onClick() {
      this.$emit('btn-click')
      // console.log('click')
    }
  }
}
</script>

<style>

</style>