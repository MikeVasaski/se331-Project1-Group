<template>
  <div class="vacc">
    <p><b>Lastest Status </b></p>
    <p><b>First dose </b></p>
    <p>
      Vaccine Name: <i>{{ people.vaccine_name }}</i>
    </p>
    <p>
      Date: <i>{{ people.vaccine_date }}</i>
    </p>
    <p><b>Second dose </b></p>
    <p>
      Vaccine Name: <i>{{ people.vaccine_name2 }}</i>
    </p>
    <p>
      Date: <i>{{ people.vaccine_date2 }}</i>
    </p>
  </div>
  <button @click="update">Update</button>
</template>
<script>
export default {
  props: ["people"],
};
</script>
<style scoped>
.vacc p {
  justify-content: center;
  align-items: center;
  margin: 12px 0px;
  text-align: left;
}
</style>
