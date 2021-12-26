<template>
  <div class="flex rounded-3xl shadow-xl">
    <div class="w-1/3">
      <img
        src="@/assets/TestImage1.png"
        alt="Vorschaubild"
        class="h-full object-cover rounded-tl-3xl rounded-bl-3xl"
      />
    </div>
    <div class="w-2/3 p-5">
      <ProductTextDetail :productModel="productModel" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { ProductModel } from "../model/ProductModel";
import ProductTextDetailView from "./ProductTextDetailView.vue";

@Options({
  components: {
    ProductTextDetail: ProductTextDetailView,
  },
  props: {
    productModel: Object,
  },
})
export default class ResultListItemView extends Vue {
  productModel!: ProductModel;
}
</script>
