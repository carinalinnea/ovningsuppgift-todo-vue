<template>
  <button @click="onClick()" id="btnSubmit" class=" btn btn-blue">{{text}}</button>
</template>

<script>
export default {
  name: 'LoginButton',
  props: {
    text: String,
  },
  methods: {
    onClick() {
      this.$emit('btn-click')
    }
  }
}
</script>

<style>

</style>