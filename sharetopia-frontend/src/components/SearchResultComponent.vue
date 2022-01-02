<template>
  <div class="flex-1 flex">
    <div class="w-1/2">
      <ProductListItemView
        :key="productModel.id"
        v-for="productModel in productModels"
        :productModel="productModel"
      />
    </div>
    <div class="w-1/2"></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ProductListItemView from "@/views/ProductListItemView.vue";
import { ProductModel } from "@/model/ProductModel";
import { Factory } from "@/utils/factory";
import {Routes} from "@/router/routes";
import {ProductApi} from "@/api/product";

@Options({
  components: {
    ProductListItemView,
  },
})
export default class SearchResultComponent extends Vue {
  searchResults: ProductModel[] = []

  beforeMount(): void {
    let searchModel = Factory.createSearchModel(this.$route.query);
    console.log("Wir bekommen ein model", searchModel)
    if (!searchModel) {
      Routes.pushHomeRoute(this.$router)
    }
  }
}
</script>
