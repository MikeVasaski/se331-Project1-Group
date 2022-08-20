<template>
  <div v-if="GStore.passenger">
    <div id="nav">
      <router-link :to="{ name: 'EventDetails' }">Details</router-link> |
      <router-link :to="{ name: 'airlines' }">Airlines</router-link> |
    </div>

    <router-view :passenger="GStore.passenger" :airline="GStore.airline" />
  </div>
</template>
<script>
export default {
  inject: ["GStore"],
};
</script>
