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
  inject: ["GStore"],
};
</script>

<style>
@keyframes yellowfade {
  from {
    background: yellow;
  }
  to {
    background: transparent;
  }
}
body {
  background-color: darkgray;
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
  background-color: #072e55;
  padding: 30px;
  font-size: 36px;
}
nav a {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}
nav a.router-link-exact-active {
  color: #00b8d8;
}
</style>
