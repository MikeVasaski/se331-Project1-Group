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
            Vaccince status:
            <b>{{ people.vaccince_stat }}, {{ people.vaccince_stat2 }}</b>
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
  border: 3px solid #4fb2aa;
  border-radius: 10px;
  background-color: #e8d3a3;
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
  color: black;
  text-decoration: none;
  text-align: left;
}
.event-card #content {
  margin-top: 16px;
  margin-left: 28px;
}
</style>
