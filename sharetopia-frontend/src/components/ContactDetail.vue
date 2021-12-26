<template>
  <div class="flex w-max">
    <div class="max-w-max mr-4 overflow-hidden">
      <img
        src="../assets/profile_blank.png"
        alt="User Profile image"
        class="rounded-full object-cover max-h-16 min-h-16"
      />
    </div>
    <div class="pr-4">
      <p class="text-xl font-bold">
        {{ userModel.forename }} {{ userModel.surname }}
      </p>
      <StarRating :rate="userModel.rating" class="mb-4" />
      <p>{{ userModel.address }}</p>
      <p>{{ userModel.postalCode }} {{ userModel.city }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { UserModel } from "../model/UserModel";
import StarRating from "../views/StarRating.vue";

@Options({
  components: {
    StarRating,
  },
  props: {
    userId: String,
  },
})
export default class ProductTextDetail extends Vue {
  userId!: string;
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
