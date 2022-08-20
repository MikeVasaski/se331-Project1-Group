<template>
  <h1>{{ people.name }} {{ people.surname }}</h1>
  <p>{{ people.age }}</p>
  <p>{{ people.hometown }}</p>
  <p>{{ people.vaccince_stat }}</p>
  <p>{{ people.vaccine_name }}</p>
  <p>{{ people.vaccine_date }}</p>

  <button @click="update">Update</button>
</template>
<script>
export default {
  props: ["people"],
  inject: ["GStore"],
  methods: {
    update() {
      this.GStore.flashMessage = "You are successfully update details ";
      setTimeout(() => {
        this.GStore.flashMessage = "";
      }, 5000);
      this.$router.push({
        name: "home",
      });
    },
  },
};
</script>
