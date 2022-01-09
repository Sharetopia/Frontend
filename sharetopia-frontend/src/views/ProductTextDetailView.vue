<template>
  <div class="">
    <div class="flex items-center">
      <h1 class="flex-none truncate">
        {{ product.title }}
      </h1>
      <div class="flex-grow"></div>
      <div class="flex-none text-2xl">
        {{ product.price }}€ <span class="text-lg">/day</span>
      </div>
    </div>
    <div class="space-x-4">
      <div
        v-for="tag in product.tags"
        :key="tag"
        class="
          inline-block
          smallText
          px-2
          py-0
          rounded-md
          my-4
          text-white
          bg-gray-500
        "
        :class="getBackgroundColor()"
      >
        {{ tag }}
      </div>
    </div>
    <p>{{ product.description }}</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { ProductModel } from "@/model/ProductModel";

@Options({
  props: {
    product: Object,
  },
})
export default class ProductTextDetailView extends Vue {
  product!: ProductModel;

  getBackgroundColor(): string {
    let value = Math.random() * 10;

    switch (value) {
      case 1:
        return "bg-red-600";
      case 2:
        return "bg-lime-600";
      case 4:
        return "bg-green-600";
      case 5:
        return "bg-emerald-600";
      case 3:
        return "bg-cyan-600";
      case 6:
        return "bg-sky-600";
      case 7:
        return "bg-violet600";
      case 8:
        return "bg-rose-600";
      case 9:
        return "bg-indigo-600";
      default:
        return "bg-stone-600";
    }
  }
}
</script>
