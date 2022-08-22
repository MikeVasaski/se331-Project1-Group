<template>
  <div>
    <form class="review-form" @submit.prevent="onSubmit">
      <h3>Doctor's Suggestion Form</h3>
      <label for="date">Date:</label>
      <input id="date" v-model="date" />

      <label for="name">Doctor's Name:</label>
      <input id="name" v-model="name" />

      <label for="suggestion">Suggestion:</label>
      <textarea id="suggestion" v-model="suggestion"></textarea>

      <input class="button" type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import GStore from "@/store";
export default {
  inject: ["GStore"],
  data() {
    return {
      patient_id: "",
      name: null,
      suggestion: "",
      date: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.name === "" || this.suggestion === "" || this.date === "") {
        alert("This Form is incomplete. Please fill out evert field.");
        return;
      }
      let productReview = {
        name: this.name,
        suggestion: this.suggestion,
        date: this.date,
        patient_id: GStore.event.id,
      };
      this.$emit("review-submited", productReview);
      this.patient_id = "";
      this.name = "";
      this.suggestion = "";
      this.date = "";
      this.GStore.flashMessage = "Doctor's suggestion successfully! ";
      setTimeout(() => {
        this.GStore.flashMessage = "";
      }, 3000);
    },
  },
};
</script>

<style scoped>
input {
  text-align: center;
}
body {
  background-color: #f2f2f2;
  margin: 0px;
  font-family: tahoma;
  color: #282828;
}
.review-form {
  display: flex;
  flex-direction: column;
  width: 425px;
  padding: 20px;
  margin: 40px;
  border: 2px solid #000000;
  background-color: #add8e6;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
  margin: auto;
  padding: 3%;
}
.review-container {
  width: 425px;
  padding: 20px;
  background-color: rgb(255, 255, 255);
  -webkit-box-shadow: 0px 2px 20px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 20px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 20px -12px rgba(0, 0, 0, 0.57);
  margin-left: 40px;
  border: 2px solid #ffffff;
}
.review-container li {
  margin-top: 15px;
}
.review-form .button {
  display: block;
  margin: 30px auto;
}
select {
  height: 40px;
  font-size: 20px;
  background-color: white;
  cursor: pointer;
}
textarea {
  width: 95%;
  height: 70px;
  padding: 10px;
  font-size: 20px;
  margin-bottom: 20px;
}
ul {
  list-style-type: none;
}
.button {
  margin: 30px;
  background-color: #39495c;
  border-radius: 5px;
  font-size: 18px;
  width: 100px;
  height: 60px;
  color: white;
  padding: 20px;
  box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
    inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
    inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
  text-align: center;
  cursor: pointer;
}
</style>
