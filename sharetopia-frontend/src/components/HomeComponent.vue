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

<script lang="ts">
import ProductListItemView from "@/views/ProductListItemView.vue";
import { useProducts } from "@/composables/useProduct";
import { useRouter } from "vue-router";
import { useRoutes } from "@/composables/useRoutes";

export default {
  components: {
    ProductListItemView,
  },
  setup() {
    const router = useRouter();
    const { products } = useProducts();
    const { pushProductDetail } = useRoutes(router);

    return {
      products,
      pushProductDetail,
    };
  },
};
</script>
