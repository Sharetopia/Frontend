<template>
  <div class="flex w-max">
    <div class="max-w-max mr-4 overflow-hidden">
      <img
        src="../assets/profile_blank.png"
        alt="User Profile image"
        class="rounded-full object-cover max-h-12 min-h-12"
      />
    </div>
    <div class="pr-4">
      <p class="caption">{{ userModel.forename }} {{ userModel.surname }}</p>
      <StarRating :rate="userModel.rating" class="mb-4 mt-2" />
      <p v-if="!hideAddress">{{ userModel.address }}</p>
      <p v-if="!hideAddress">{{ userModel.postalCode }} {{ userModel.city }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { UserModel } from "../model/UserModel";
import StarRatingView from "./StarRatingView.vue";

@Options({
  components: {
    StarRating: StarRatingView,
  },
  props: {
    userId: String,
    hideAddress: Boolean,
  },
})
export default class ContactDetailView extends Vue {
  userId!: string;
  hideAddress!: boolean;
  userModel: UserModel = {
    id: "Dein Mutter",
    forename: "Jannik",
    surname: "Smidt",
    address: "Hintere Wiesen 9",
    city: "Auenwald",
    postalCode: 71549,
    rating: 1,
  };
}
</script>
