<template>
  <div class="flex w-max">
    <div class="max-w-max mr-4 overflow-hidden">
      <img
        src="../assets/profile_blank.png"
        alt="User Profile image"
        class="rounded-full object-cover max-h-12 min-h-12"
      />
    </div>
    <div class="pr-4" v-if="props.userId">
      <p class="caption">{{ user.forename }} {{ user.surname }}</p>
      <StarRating :rate="4" class="mb-4 mt-2" />
      <p v-if="!props.hideAddress">{{ user.address }}</p>
      <p v-if="!props.hideAddress">{{ user.postalCode }} {{ user.city }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import StarRating from "../views/StarRatingView.vue";
import { defineProps, onMounted, watch } from "vue";
import { useUserById } from "@/composables/useUser";

const props = defineProps({
  userId: String,
  hideAddress: Boolean,
});

const { user, getUserById } = useUserById();

watch(
  () => props.userId,
  () => {
    console.log(props.userId);
    if (props.userId) {
      console.log(props.userId);
      getUserById(props.userId);
      console.log(user);
    }
  }
);
</script>
