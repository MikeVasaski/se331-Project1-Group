<template>
  <div class="detail">
    <h1>Name: {{ people.name }} {{ people.surname }}</h1>
    <p><b>Age: </b>{{ people.age }}</p>
    <p><b>Address: </b>{{ people.hometown }}</p>
  </div>
  <button @click="update" class="btn">Update</button>
</template>
<script>
export default {
  props: ['people'],
  inject: ['GStore'],
  methods: {
    update() {
      this.GStore.flashMessage = 'You are successfully update details '
      setTimeout(() => {
        this.GStore.flashMessage = ''
      }, 5000)
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>
<style scoped>
.detail h1,
p {
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
