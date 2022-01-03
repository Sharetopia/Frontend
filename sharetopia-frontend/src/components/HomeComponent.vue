<template>
  <div class="flex flex-wrap gap-8">
    <ProductListItemView
        :key="product.id"
        v-for="product in newestProducts"
        :productModel="product"
        @click="showProductDetail(product.id)"
        class=""
        style="width: calc(33.333333% - 1.35rem)"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import {ProductModel} from "@/model/ProductModel";
import {Routes} from "@/router/routes";
import {ProductApi} from "@/api/product";
import ProductListItemView from "@/views/ProductListItemView.vue";

@Options({
  components: {ProductListItemView},
  props: {},
})
export default class HomeComponent extends Vue {
  newestProducts: ProductModel[] = [];

  beforeMount(): void {
    this.loadNewestProducts();
  }

  async loadNewestProducts(): Promise<void> {
    this.newestProducts = await ProductApi.newestProducts();
  }

  showProductDetail(id: string): void {
    Routes.pushProductDetail(this.$router, id)
  }
}
</script>
