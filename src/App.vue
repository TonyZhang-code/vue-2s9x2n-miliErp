<template>
  <div id="app">
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar
  },
}
</script>

<style>
body {
  background-color: #f2f2f2; /* 这将设置整个页面的背景色为浅灰色 */
}
</style>
