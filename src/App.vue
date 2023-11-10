<template>
  <div id="app">
    <Navbar />
    <div style="width: 100%; height: 3.75em;" />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
  setup() {
    
  }
}
</script>

<style>
#app {
  font-family: 'Noto Sans KR';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

input::placeholder {
    font-family: 'Noto Sans KR';
}

button {
  font-family: 'Noto Sans KR';
}
</style>
