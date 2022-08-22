<template>
  <router-link
    class="event-link"
    :to="{ name: 'EventDetails', params: { id: people.id } }"
  >
    <div class="event-card">
      <img src="../assets/vacc-icon.jpg" alt="vacc-icon" />
      <div id="content">
        <h2>Name: {{ people.name }} {{ people.surname }}</h2>
        <p>
          <i>
            Vaccince status: {{ people.vaccince_stat }},
            {{ people.vaccince_stat2 }}
          </i>
        </p>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "PersonCard",
  props: {
    people: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
.event-card {
  display: flex;
  flex-direction: row;
  padding: 20px;
  width: 500px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.event-card img {
  width: 150px;
  height: 150px;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.event-link {
  color: #2c3e50;
  text-decoration: none;
  text-align: left;
}
#content {
  margin-left: 28px;
}
</style>
