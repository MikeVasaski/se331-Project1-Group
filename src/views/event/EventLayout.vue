<template>
  <div v-if="GStore.people">
    <div id="nav">
      <router-link :to="{ name: 'EventDetails' }">Details</router-link> |
    </div>

    <router-view :people="GStore.people" />
  </div>
</template>
<script>
export default {
  inject: ["GStore"],
};
</script>
