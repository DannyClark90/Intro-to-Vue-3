app.component("review-form", {
  template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="name" required>

    <label for="review">Review:</label>      
    <textarea id="review" v-model="review" required></textarea>

    <label for="rating">Rating:</label>
    <select id="rating" v-model.number="rating" required>
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>

     <label for="reccommended">Would you reccommend this product?:</label>
    <select id="reccommended" v-model="recommended" required>
      <option>Yes</option>
      <option>No</option>
    </select>

    <input class="button" type="submit" value="Submit">
  </form>`,
  data() {
    return {
      name: "",
      review: "",
      rating: null,
      recommended: null,
    };
  },
  methods: {
    onSubmit() {
      if (this.name && this.review && this.rating) {
        let review = {
          name: this.name,
          review: this.review,
          rating: this.rating,
          recommended: this.recommended === "Yes" ? true : false,
        };
        this.$emit("review-submitted", review);
        this.name = "";
        this.review = "";
        this.rating = null;
        this.recommended = null;
      } else {
        alert("Please fill out all fields.");
      }
    },
  },
});
