<template>
  <div class="vacc">
    <h1><b>Lastest Status </b></h1>
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
  <button @click="update" class="btn">Update</button>
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
.btn {
  border-radius: 5px;
  border: 2px solid black;
  background-color: #ffa633;
}
</style>
