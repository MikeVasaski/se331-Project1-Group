<template>
  <div v-if="people">
    <h1>{{ people.name }} {{ people.surname }}</h1>
  </div>
</template>

<script>
import EventService from "../service/EventService";
export default {
  props: ["id"],
  data() {
    return {
      people: null,
    };
  },
  created() {
    EventService.getPeople(this.id)
      .then((response) => {
        this.people = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
