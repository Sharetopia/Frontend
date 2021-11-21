<template>
  <div class="">
    <img src="../assets/profile_blank.png" alt="User Profile image" />
    <div>
      <StarRating :rate="userModel.rating" />
      <p>{{ userModel.forename }} {{ userModel.surname }}</p>
      <p>{{ userModel.address }}</p>
      <p>{{ userModel.postalCode }} {{ userModel.city }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { UserModel } from "../model/UserModel";
import StarRating from "./StarRating.vue";

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
