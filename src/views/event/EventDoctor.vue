<template>
  <ReviewForm @review-submited="addReview" />
  <ReviewList v-if="GStore.reviews" :reviews="GStore.people.doctor_com" />
</template>

<script>
import ReviewForm from "@/components/ReviewForm.vue";
import ReviewList from "@/components/ReviewList.vue";
import GStore from "@/store";
export default {
  inject: ["GStore"],
  components: { ReviewForm, ReviewList },
  methods: {
    addReview(review) {
      this.GStore.reviews.push(review);
      GStore.people.doctor_com = GStore.reviews.filter(
        (people) => GStore.people.id == people.patient_id
      );
      console.log(GStore.reviews.patient_id);
    },
  },
};
</script>
