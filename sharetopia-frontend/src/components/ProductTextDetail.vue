<template>
  <div class="p-4">
    <div class="flex items-center">
      <h1 class="font-semibold text-black font-sans text-4xl flex-none">
        {{ productModel.title }}
      </h1>
      <div class="flex-grow"></div>
      <div class="flex-none text-3xl">
        {{ productModel.price }}€ <span class="text-lg">/day</span>
      </div>
    </div>
    <div class="space-x-4">
      <div
        v-for="tag in productModel.tags"
        :key="tag"
        class="inline-block bg-gray-500 p-2 rounded-md my-4"
        :class="color"
      >
        {{ tag }}
      </div>
    </div>
    <p>{{ productModel.description }}</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { ProductModel } from "../model/ProductModel";

@Options({
  props: {
    productModel: Object,
  },
})
export default class ProductTextDetail extends Vue {
  productModel!: ProductModel;
  color = "text-white";
}
</script>
