<template>
  <div class="flex card cursor-pointer hover:bg-gray-100">
    <div class="w-1/3">
      <img
        :src="getImage()"
        alt="Vorschaubild"
        class="h-full object-cover rounded-tl-3xl rounded-bl-3xl"
      />
    </div>
    <div class="w-2/3 p-5">
      <ProductTextDetail :product="productModel" />
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
export default class ProductListItemView extends Vue {
  productModel!: ProductModel;

  getImage() {
    if (this.productModel) {
      if (this.productModel.title == "Auto") {
        var images = require.context("../assets/", false);
        return images("./" + "auto.jpeg");
      }
    }
    var images2 = require.context("../assets/", false);
    return images2("./" + "TestImage1.png");
  }
}
</script>
