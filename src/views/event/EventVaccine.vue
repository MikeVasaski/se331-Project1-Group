<template>
  <p><b>Lastest Status </b></p>
  <p><b>First dose </b></p>
  <p><b>Vaccine Name : </b>{{ people.vaccine_name }}</p>
  <p><b>Date : </b>{{ people.vaccine_date }}</p>
  <p><b>Second dose </b></p>
  <p><b>Vaccine Name : </b> {{ people.vaccine_name2 }}</p>
  <p><b>Date : </b> {{ people.vaccine_date2 }}</p>
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
