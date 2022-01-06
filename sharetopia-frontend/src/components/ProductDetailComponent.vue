<template>
  <div v-if="product.valueOf()" class="flex">
    <div class="w-1/2 px-16">
      <PhotoGalleryView />
    </div>
    <div class="w-1/2 px-16">
      <div class="divide-y divide-black divide-opacity-25">
        <div class="m-4 mb-8">
          <ProductTextDetailView :productModel="product.valueOf()" />
          <div class="flex mt-8">
            <div class="w-max mr-6">
              <ContactDetail :userId="product.valueOf().userId" />
            </div>
            <div
              class="h-36 w-full"
              v-if="locationPins.length > 0 && centerPin.valueOf()"
            >
              <LeafletMapComponent
                :pins="locationPins"
                :center="centerPin.valueOf()"
                :zoom="15"
              />
            </div>
          </div>
        </div>
        <div>
          <div class="mt-8 flex justify-center">
            <DatePickerComponent
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

<script lang="ts" setup>
import ProductTextDetailView from "@/views/ProductTextDetailView.vue"; // @ is an alias to /src
import LeafletMapComponent from "@/components/LeafletMapComponent.vue";
import ContactDetail from "@/views/ContactDetailView.vue";
import PhotoGalleryView from "@/views/PhotoGalleryView.vue";
import DatePickerComponent from "@/components/DatePickerComponent.vue";
import PrimaryButton from "@/uiElements/PrimaryButton.vue";
import { ProductModel } from "@/model/ProductModel";
import { watch } from "vue";
import { useRoute } from "vue-router";
import { useRouteQueries } from "@/composables/useRouteQueries";
import { useLocationPins } from "@/composables/useLocationPins";
import { useDatePicker } from "@/composables/useDatePicker";
import { useProduct } from "@/composables/useProduct";

const route = useRoute();
const { productId } = useRouteQueries(route.query);
const { product } = useProduct(productId);
const { locationPins, centerPin, createLocationPins } = useLocationPins();
const { datePickerModel, updateDatePickerModel } = useDatePicker();

watch(product, (newValue) => {
  if (newValue) {
    createLocationPins([newValue as ProductModel]);
    updateDatePickerModel(newValue as ProductModel);
  }
});
</script>
