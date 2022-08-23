<template>
  <div id="nav">
    <router-link :to="{ name: 'EventDetails' }">Details</router-link> |
    <router-link :to="{ name: 'Vaccine' }">Vaccine Status</router-link> |
    <router-link :to="{ name: 'Doctor' }">Doctor Suggestion</router-link>
  </div>
  <div class="content" v-if="GStore.people">
    <router-view :people="GStore.people" />
  </div>
</template>
<script>
export default {
  inject: ["GStore"],
};
</script>
<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
  font-size: 24px;
  background-color: aliceblue;
  margin-left: 25%;
  margin-right: 25%;
  padding: 3px 12px;
}
#nav {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 24px;
  margin-top: 24px;
}
#nav a {
  text-decoration: none;
}
#nav a.router-link-exact-active {
  color: #fff;
  text-shadow: 1px 1px #2e46fd;
}
</style>
