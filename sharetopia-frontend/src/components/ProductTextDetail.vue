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
  props: {},
})
export default class ProductTextDetail extends Vue {
  color = "text-white";
  productModel: ProductModel = {
    id: "224132454315243523",
    title: "Canyon Grail 6",
    price: 10.99,
    description:
      "Ich biete hier mein Gravel Bike zum Verleih an, da ich zur Zeit einen Bruch habe und es daher nicht nutzen kann. Ich biete hier mein Gravel Bike zum Verleih an, da ich zur Zeit einen Bruch habe und es daher nicht nutzen kann.",
    tags: ["BIKE", "GRAVEL", "OUTDOOR"],
  };
}
</script>
