<template>
  <div class="home">
    <EventCard
      v-for="passenger in passengers"
      :key="passenger.id"
      :passenger="passenger"
    ></EventCard>
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

import EventCard from "@/components/EventCard.vue";
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
    EventCard,
  },
  data() {
    return {
      passengers: null,
      totalPassengers: 0, //<--- Added this to store totalEvents
    };
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    EventService.getPassengers(3, parseInt(routeTo.query.page) || 1)
      .then((response) => {
        next((comp) => {
          comp.passengers = response.data;
          comp.totalPassengers = response.headers["x-total-count"];
        });
      })
      .catch(() => {
        next({ name: "NetworkError" });
      });
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    EventService.getPassengers(3, parseInt(routeTo.query.page) || 1)
      .then((response) => {
        this.passengers = response.data;
        this.totalPassengers = response.headers["x-total-count"];
        next();
      })
      .catch(() => {
        next({ name: "NetworkError" });
      });
  },
  computed: {
    hasNextPage() {
      let totalPages = Math.ceil(this.totalPassengers / this.perPage);
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
