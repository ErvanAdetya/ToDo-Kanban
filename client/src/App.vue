<template>
  <div id="app">
    <div class="container">
      <nav-bar></nav-bar>
      <router-view/>
    </div>
    <new-task></new-task>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import NewTask from '@/components/NewTask'

export default {
  name: 'App',
  components: {
    NavBar,
    NewTask
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
