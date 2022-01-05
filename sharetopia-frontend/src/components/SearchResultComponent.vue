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
    <div class="w-1/2 pl-4" v-if="locationPins.length > 0 && centerPin.valueOf()">
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

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ProductListItemView from "@/views/ProductListItemView.vue";
import { dummyBike, ProductModel } from "@/model/ProductModel";
import { Factory } from "@/utils/factory";
import { ProductApi } from "@/api/product";
import { SearchModel } from "@/model/SearchModel";
import LeafletMapComponent from "@/components/LeafletMapComponent.vue";
import { LocationPinModel } from "@/model/LocationPinModel";
import {useRouteQueries} from "@/composables/useRouteQueries";
import {useRoutes} from "@/composables/useRoutes";
import {useRoute, useRouter} from "vue-router";
import {useProductSearch} from "@/composables/useProduct";
import {useLocationPins} from "@/composables/useLocationPins";
import {watch} from "vue";

export default {
  components: {
    LeafletMapComponent,
    ProductListItemView
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const { searchModel } = useRouteQueries(route.query)
    const { products, loadProducts} = useProductSearch(searchModel)
    const { pushProductDetail } = useRoutes(router)

    const { locationPins, centerPin, createLocationPins } = useLocationPins()

    watch(products, (newValue) => {
      const products = newValue as ProductModel[]
      createLocationPins(products)
    })

    return {
      searchResults: products,
      locationPins,
      centerPin,
      showProductDetail: pushProductDetail
    }
  }
}

// @Options({
//   components: {
//     LeafletMapComponent,
//     ProductListItemView,
//   },
// })
// export default class SearchResultComponent extends Vue {
//   searchResults: ProductModel[] = [];
//
//   beforeMount(): void {
//     let searchModel = Factory.createSearchModel(this.$route.query);
//     if (searchModel) {
//       this.loadSearchResultsFor(searchModel);
//     } else {
//       Routes.pushHomeRoute(this.$router);
//     }
//   }
//
//   async loadSearchResultsFor(searchModel: SearchModel): Promise<void> {
//     this.searchResults = await ProductApi.searchFor(searchModel);
//   }
//
//   showProductDetail(id: string): void {
//     Routes.pushProductDetail(this.$router, id);
//   }
//
//   getLocationPins(): LocationPinModel[] {
//     if (!this.searchResults) {
//       return [];
//     }
//     return this.searchResults.map((value) => {
//       return {
//         name: value.title,
//         coordinates: value.location,
//         productId: value.id,
//       };
//     });
//   }
// }
</script>
