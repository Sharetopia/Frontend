<template>
  <div class="flex">
    <img
      v-for="index in getNumberOfFilledStars()"
      :key="index"
      src="../assets/star_1.png"
      alt=""
      class="h-6"
    />
    <img
      v-for="index in getNumberOfUnfilledStars()"
      :key="index"
      src="../assets/star_2.png"
      alt=""
      class="h-6"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    rate: Number,
  },
})
export default class StarRating extends Vue {
  rate!: number;

  getNumberOfUnfilledStars(): number {
    return 5 - this.rate;
  }

  getNumberOfFilledStars(): number {
    return this.rate;
  }
}
</script>
