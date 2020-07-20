<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <Navbar />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data() {
    return {
      title: 'My first Vue app, woo :)'
    }
  },
}
</script>

<style>
h1 {
  color: #444;
  font-weight: normal;
  text-align: center;
}
</style>
