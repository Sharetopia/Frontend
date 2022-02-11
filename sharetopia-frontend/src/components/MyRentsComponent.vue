<template>
  <div class="flex gap-y-10 flex-col w-full">
    <MyRentsListItemView
      :key="myRent.product.id"
      v-for="myRent in myRents"
      :productModel="myRent.product"
      :rentRequestModel="myRent.rentRequest"
    />
  </div>
</template>

<script lang="ts" setup>
import MyRentsListItemView from "@/views/MyRentsListItemView.vue";
import { useMyRents } from "@/composables/useRents";

const { myRents, loadMyRents } = useMyRents();
</script>
