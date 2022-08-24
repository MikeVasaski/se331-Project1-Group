<template>
  <div class="topnav">
    <div id="flashMessage" v-if="GStore.flashMessage">
      {{ GStore.flashMessage }}
    </div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
  </div>
  <router-view />
</template>

<script>
export default {
  inject: ['GStore']
}
</script>

<style>
@keyframes yellowfade {
  from {
    background: #ffa633;
  }
  to {
    background: transparent;
  }
}
body {
  background-color: #3b5a9d;
}
#flashMessage {
  animation-name: yellowfade;
  animation-duration: 5s;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #130d35;
  display: flex;
  flex-direction: column;
}
nav {
  text-align: left;
  background-color: #4fb2aa;
  padding: 30px;
  font-size: 36px;
}
nav a {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}
nav a.router-link-exact-active {
  color: #ffa633;
}
</style>
