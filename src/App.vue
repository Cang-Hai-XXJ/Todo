<template>
  <div id="App">
    <Header></Header>
    <Todo></Todo>
  </div>
</template>

<script>
import Header from './todo/header.vue'
import Todo from './todo/todo.vue'
export default {
  components: {
    Header,
    Todo,
  },
  data() {
    return {
      text: 'hot',
    }
  },
}
</script>

<style scoped>
#App {
}
</style>