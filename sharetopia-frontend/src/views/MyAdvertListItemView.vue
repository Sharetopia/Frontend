<template>
  <div class="flex w-full">
    <ProductListItemView
      class="w-2/3"
      :productModel="myAdvertModel.productModel"
    />
    <div class="flex flex-col justify-center ml-2">
      <SecondaryButton
        title="Beschreibung bearbeiten"
        image-name="edit.svg"
        @click="openModal"
      />
      <PopUp :is-open="isOpen" @close="closeModal">
        <AdvertEditComponent
          :title="'Inserat bearbeiten'"
          :productModel="myAdvertModel.productModel"
        />
      </PopUp>

      <PopUp :is-open="isRentRequestsOpen" @close="closeRentRequests">
        <RentRequestsComponent
          :rentRequestModels="myAdvertModel.rentRequests"
          :reload="emit('reload')"
        ></RentRequestsComponent>
      </PopUp>

      <SecondaryButton
        @click="openRentRequests"
        title="Mietanfragen"
        image-name="message.svg"
      />

      <PopUp :is-open="isDatePickerOpen" @close="closeDatePicker">
        <AvailableRentDatePickerComponent
          :product-model="myAdvertModel.productModel"
          :rentableDateRange="myAdvertModel.rentableDateRange"
        ></AvailableRentDatePickerComponent>
      </PopUp>

      <SecondaryButton
        @click="openDatePicker"
        title="Mietzeitraum angeben"
        image-name="clockArrow.svg"
      />

      <SecondaryButton
        class="text-red-500"
        title="Anzeige offline setzten"
        image-name="stop.svg"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import SecondaryButton from "@/uiElements/SecondaryButton.vue";
import AdvertEditComponent from "@/components/AdvertEditComponent.vue";
import PopUp from "@/uiElements/PopUp.vue";
import RentRequestsComponent from "@/components/RentRequestsComponent.vue";
import AvailableRentDatePickerComponent from "@/components/AvailableRentDatePickerComponent.vue";
import { MyAdvertModel } from "@/model/MyAdvertModel";
import { defineEmits, defineProps, ref } from "vue";
import ProductListItemView from "@/views/ProductListItemView.vue";

const emit = defineEmits(["reload"]);
const props = defineProps({
  myAdvertModel: {
    type: Object as () => MyAdvertModel,
  },
});
const isOpen = ref(false);
const isDatePickerOpen = ref(false);
const isRentRequestsOpen = ref(false);

function openModal(): void {
  isOpen.value = true;
}
function closeModal(): void {
  isOpen.value = false;
}

function openDatePicker(): void {
  isDatePickerOpen.value = true;
}

function closeDatePicker(): void {
  isDatePickerOpen.value = false;
}

function openRentRequests(): void {
  isRentRequestsOpen.value = true;
}

function closeRentRequests(): void {
  isRentRequestsOpen.value = false;
}
</script>
