<template>
  <div v-if="product.valueOf()" class="flex">
    <div class="w-1/2 px-16">
      <PhotoGallery />
    </div>
    <div class="w-1/2 px-16">
      <div class="divide-y divide-black divide-opacity-25">
        <div class="m-4 mb-8">
          <ProductTextDetail :productModel="product.valueOf()" />
          <div class="flex mt-8">
            <div class="w-max mr-6">
              <ContactDetail :userId="product.valueOf().userId" />
            </div>
            <div
              class="h-36 w-full"
              v-if="locationPins.length > 0 && centerPin.valueOf()"
            >
              <LeafletMap
                :pins="locationPins"
                :center="centerPin.valueOf()"
                :zoom="15"
              />
            </div>
          </div>
        </div>
        <div>
          <div class="mt-8 flex justify-center">
            <DatePickerComponent v-if="datePickerModel"
              :date-picker-model="datePickerModel"
            ></DatePickerComponent>
          </div>
          <div class="mt-4 flex justify-center">
            <PrimaryButton title="Anfrage stellen" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ProductTextDetailView from "@/views/ProductTextDetailView.vue"; // @ is an alias to /src
import LeafletMapComponent from "@/components/LeafletMapComponent.vue";
import ContactDetail from "@/views/ContactDetailView.vue";
import PhotoGalleryView from "@/views/PhotoGalleryView.vue";
import { ProductModel } from "../model/ProductModel";
import PrimaryButton from "@/uiElements/PrimaryButton.vue";
import { watch } from "vue";
import { useRoute } from "vue-router";
import DatePickerComponent from "@/components/DatePickerComponent.vue";
import {useRouteQueries} from "@/composables/useRouteQueries";
import {useLocationPins} from "@/composables/useLocationPins";
import {useDatePicker} from "@/composables/useDatePicker";
import {useProduct} from "@/composables/useProduct";

export default {
  components: {
    DatePickerComponent,
    PrimaryButton,
    ProductTextDetail: ProductTextDetailView,
    LeafletMap: LeafletMapComponent,
    ContactDetail,
    PhotoGallery: PhotoGalleryView,
  },
  setup() {
    const route = useRoute();
    const { productId } = useRouteQueries(route.query);
    const { product } = useProduct(productId);
    const { locationPins, centerPin, createLocationPins } = useLocationPins();
    const { datePickerModel, createDatePickerModel } = useDatePicker()

    watch(product, (newValue) => {
      if (newValue) {
        createLocationPins([newValue as ProductModel]);
        createDatePickerModel(newValue as ProductModel)
      }
    });
    
    return {
      product,
      locationPins,
      centerPin,
      datePickerModel
    };
  },
};

</script>
