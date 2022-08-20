<template>
  <h1>Airline ID: {{ airline.id }}</h1>
  <p>
    Name: {{ airline.AirlineName }} on {{ airline.email }} @ address:
    {{ airline.address }}
  </p>
</template>

<script>
export default {
  props: ["airline"],
};
</script>
