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
    <div class="w-1/2 pl-4">
      <LeafletMapComponent
          class="top-8 right-0 mb-4 sticky"
          style="height: calc(100vh - 4rem)"
          :center="[47.7377921, 16.339096]"
          :pins="getLocationPins()"
          :zoom="10"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ProductListItemView from "@/views/ProductListItemView.vue";
import { dummyBike, ProductModel } from "@/model/ProductModel";
import { Factory } from "@/utils/factory";
import { Routes } from "@/router/routes";
import { ProductApi } from "@/api/product";
import { SearchModel } from "@/model/SearchModel";
import LeafletMapComponent from "@/components/LeafletMapComponent.vue";
import {LocationPinModel} from "@/model/LocationPinModel";

@Options({
  components: {
    LeafletMapComponent,
    ProductListItemView,
  },
})
export default class SearchResultComponent extends Vue {
  searchResults: ProductModel[] = []

  beforeMount(): void {
    let searchModel = Factory.createSearchModel(this.$route.query);
    if(searchModel) {
      this.loadSearchResultsFor(searchModel)
    } else {
      Routes.pushHomeRoute(this.$router)
    }
  }

  async loadSearchResultsFor(searchModel: SearchModel): Promise<void> {
    this.searchResults = await ProductApi.searchFor(searchModel)
  }

  showProductDetail(id: string): void {
    Routes.pushProductDetail(this.$router, id)
  }

  getLocationPins(): LocationPinModel[] {
    if(!this.searchResults) {
      return []
    }
    return this.searchResults.map((value => {
      return {
        name: value.title,
        coordinates: value.location,
        productId: value.id
      }
    }))
  }
}
</script>
