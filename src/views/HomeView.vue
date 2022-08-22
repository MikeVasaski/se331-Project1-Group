<template>
  <div class="home">
    <h1>People' vaccinated</h1>
    <PersonCard
      v-for="people in peoples"
      :key="people.id"
      :people="people"
    ></PersonCard>
    <div class="pagination">
      <router-link
        id="page-prev"
        :to="{
          name: 'home',
          query: { page: page - 1 },
        }"
        rel="prev"
        v-if="page != 1"
      >
        Prev Page</router-link
      >
      <router-link
        id="page-next"
        :to="{
          name: 'home',
          query: { page: page + 1 },
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

import PersonCard from "@/components/PersonCard.vue";
import EventService from "@/service/EventService";
export default {
  name: "HomeView",
  props: {
    page: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
  },
  components: {
    PersonCard,
  },
  data() {
    return {
      peoples: null,
      totalPeoples: 0,
    };
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    EventService.getPeoples(5, parseInt(routeTo.query.page) || 1)
      .then((response) => {
        next((comp) => {
          comp.peoples = response.data;
          comp.totalPeoples = response.headers["x-total-count"];
        });
      })
      .catch(() => {
        next({ name: "NetworkError" });
      });
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    EventService.getPeoples(5, parseInt(routeTo.query.page) || 1)
      .then((response) => {
        this.peoples = response.data;
        this.totalPeoples = response.headers["x-total-count"];
        next();
      })
      .catch(() => {
        next({ name: "NetworkError" });
      });
  },
  computed: {
    hasNextPage() {
      let totalPages = Math.ceil(this.totalPeoples / 5);
      return this.page < totalPages;
    },
  },
};
</script>
<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}
#page-prev {
  text-align: left;
}
#page-next {
  text-align: right;
}
</style>
