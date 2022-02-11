<template>
  <div class="flex-1 flex">
    <div class="w-1/2 pr-4">
      <ProductListItemView
        :key="searchResult.id"
        v-for="searchResult in searchResults"
        :productModel="searchResult"
        @click="showProductDetail(searchResult.id)"
        class="mb-6"
      />
    </div>
    <div
      class="w-1/2 pl-4"
      v-if="locationPins.length > 0 && centerPin.valueOf()"
    >
      <LeafletMapComponent
        class="top-8 right-0 mb-4 sticky"
        style="height: calc(100vh - 4rem)"
        :center="centerPin.valueOf()"
        :pins="locationPins"
        :zoom="10"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouteQueries } from "@/composables/useRouteQueries";
import { useRoutes } from "@/composables/useRoutes";
import { useRoute, useRouter } from "vue-router";
import { useProductSearch } from "@/composables/useProduct";
import { useLocationPins } from "@/composables/useLocationPins";
import { watch } from "vue";
import { ProductModel } from "@/model/ProductModel";

const route = useRoute();
const router = useRouter();
const { searchModel } = useRouteQueries(route.query);
const { products, loadProducts } = useProductSearch(searchModel);
const { pushProductDetail } = useRoutes(router);

const { locationPins, centerPin, createLocationPins } = useLocationPins();

watch(products, (newValue) => {
  const products = newValue as ProductModel[];
  createLocationPins(products);
});
</script>
