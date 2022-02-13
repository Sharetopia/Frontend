<template>
  <div class="flex flex-wrap gap-8">
    <ProductListItemView
      :key="product.id"
      v-for="product in products"
      :productModel="product"
      @click="pushProductDetail(product.id)"
      class=""
      style="width: calc(33.333333% - 1.35rem)"
    />
  </div>
</template>

<script lang="ts" setup>
import ProductListItemView from "@/views/ProductListItemView.vue";
import { useProducts } from "@/composables/useProduct";
import { useRouter } from "vue-router";
import { useRoutes } from "@/composables/useRoutes";
import { useUser } from "@/composables/useUser";
import { watch } from "vue";

const router = useRouter();
const { products } = useProducts();
const { pushProductDetail } = useRoutes(router);
const { currentUser } = useUser();

watch(currentUser, (value) => {
  if (!value.forename) {
    useRoutes(router).pushProfileEditRoute();
  }
});
</script>
