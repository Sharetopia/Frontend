<template>
  <div v-if="product.valueOf()" class="flex">
    <div class="w-1/2 px-16">
      <PhotoGalleryView />
    </div>
    <div class="w-1/2 px-16">
      <div class="divide-y divide-black divide-opacity-25">
        <div class="m-4 mb-8">
          <ProductTextDetailView :product="product.valueOf()" />
          <div class="flex mt-8">
            <div class="w-max mr-6">
              <ContactDetail :userId="product.valueOf().ownerOfProductUserId" />
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
            <PrimaryButton title="Anfrage stellen" @click="requestRent" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ProductTextDetailView from "@/views/ProductTextDetailView.vue"; // @ is an alias to /src
import LeafletMapComponent from "@/components/LeafletMapComponent.vue";
import ContactDetail from "@/components/ContactDetailView.vue";
import PhotoGalleryView from "@/views/PhotoGalleryView.vue";
import DatePickerComponent from "@/components/DatePickerComponent.vue";
import PrimaryButton from "@/uiElements/PrimaryButton.vue";
import { ProductModel } from "@/model/ProductModel";
import { watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useRouteQueries } from "@/composables/useRouteQueries";
import { useLocationPins } from "@/composables/useLocationPins";
import { useDatePicker } from "@/composables/useDatePicker";
import { useProduct } from "@/composables/useProduct";
import { useRentRequest } from "@/composables/useRents";
import { useRoutes } from "@/composables/useRoutes";
import { useAnalytics } from "@/composables/useAnalytics";

const route = useRoute();
const router = useRouter();
const { productId } = useRouteQueries(route.query);
const { product } = useProduct(productId);
const { locationPins, centerPin, createLocationPins } = useLocationPins();
const { datePickerModel, updateDatePickerModel } = useDatePicker();
const { createRentRequest } = useRentRequest();
const { pushMyBookingsRoute } = useRoutes(router);

watch(product, (newValue) => {
  if (newValue) {
    createLocationPins([newValue as ProductModel]);
    updateDatePickerModel(newValue as ProductModel);
  }
});

async function requestRent() {
  const startDate = datePickerModel.value.pickedRange.start as Date;
  const endDate = datePickerModel.value.pickedRange.end as Date;
  if (product.value && startDate && endDate) {
    createRentRequest(startDate, endDate, product.value.id);
    pushMyBookingsRoute();
  }
}

useAnalytics("Product Detail", "ProductDetailComponent.vue");
</script>
