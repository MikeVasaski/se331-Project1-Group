<template>
  <h1>People' vaccinated</h1>
  <div class="home">
    <PersonCard
      v-for="people in peoples"
      :key="people.id"
      :people="people"
    ></PersonCard>
  </div>
  <div class="pagination">
    <div class="btn">
      <router-link
        id="page-prev"
        :to="{
          name: 'home',
          query: { page: page - 1 }
        }"
        rel="prev"
        v-if="page != 1"
      >
        Prev Page</router-link
      >
    </div>
    <div class="btn">
      <router-link
        id="page-next"
        :to="{
          name: 'home',
          query: { page: page + 1 }
        }"
        rel="next"
        v-if="hasNextPage"
      >
        Next Page</router-link
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import PersonCard from '@/components/PersonCard.vue'
import EventService from '@/service/EventService'
export default {
  name: 'HomeView',
  props: {
    page: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    }
  },
  components: {
    PersonCard
  },
  data() {
    return {
      peoples: null,
      totalPeoples: 0
    }
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    EventService.getPeoples(6, parseInt(routeTo.query.page) || 1)
      .then((response) => {
        next((comp) => {
          comp.peoples = response.data
          comp.totalPeoples = response.headers['x-total-count']
        })
      })
      .catch(() => {
        next({ name: 'NetworkError' })
      })
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    EventService.getPeoples(6, parseInt(routeTo.query.page) || 1)
      .then((response) => {
        this.peoples = response.data
        this.totalPeoples = response.headers['x-total-count']
        next()
      })
      .catch(() => {
        next({ name: 'NetworkError' })
      })
  },
  computed: {
    hasNextPage() {
      let totalPages = Math.ceil(this.totalPeoples / 6)
      return this.page < totalPages
    }
  }
}
</script>
<style scoped>
h1 {
  color: #ffa633;
}
.home {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.pagination {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 16px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #fff;
  padding: 10px;
}
#page-prev {
  text-align: left;
}
#page-next {
  text-align: right;
}
.btn {
  border-radius: 5px;
  border: 2px solid #4fb2aa;
  background-color: #4fb2aa;
}
</style>
