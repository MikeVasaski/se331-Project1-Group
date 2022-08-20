<template>
  <router-link
    class="event-link"
    :to="{ name: 'EventDetails', params: { id: passenger.id } }"
  >
    <div class="event-card">
      <h4>{{ passenger.first_name }} on {{ passenger.last_name }}</h4>
      <span>{{ passenger.email }}</span>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "EventCard",
  props: {
    passenger: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
