<template>
  <form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="name" />

    <label for="review">Review:</label>
    <textarea id="review" v-model="review"></textarea>
    <label for="rating">Rating:</label>
    <select id="rating" v-model.number="rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>

    <input class="button" type="submit" value="Submit" />
  </form>

  <div class="review-container">
    <h3>Reviews:</h3>
    <ul>
      <li v-for="(review, index) in reviews" :key="index">
        {{ review.name }} gave this {{ review.rating }} stars
        <br />
        "{{ review.review }}"
        <br />
        <p>Would recommend: {{ review.wouldRecommend ? "yes" : "no" }}</p>
      </li>
    </ul>
  </div>

  <review-form @review-submitted="addReview"></review-form>
</template>

<script>
export default {
  props: ["people"],
  reviews: {
    type: Array,
    required: true,
  },

  methods: {
    data() {
      return {
        name: "",
        review: "",
        rating: null,
        wouldRecommend: false,
      };
    },
    methods: {
      onSubmit() {
        if (this.name === "" || this.review === "" || this.rating === null) {
          alert("Review is incomplete. Please fill out every field.");
          return;
        }
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating,
          wouldRecommend: this.wouldRecommend,
        };
        this.$emit("review-submitted", productReview);

        this.name = "";
        this.review = "";
        this.rating = null;
        this.wouldRecommend = false;
      },
    },
  },
  addReview(review) {
    this.reviews.push(review);
  },
};
</script>
