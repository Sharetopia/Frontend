<template>
  <div class="flex w-max">
    <ResultListItemView :productModel="productModel" class="" />
    <div class="flex flex-col">
      <p class="text-amber-600 ml-6 mt-4" style="color: rgb(217 119 6);">Deine Anfrage wurde noch nicht bestätigt.</p>
      <SecondaryButton
          title="Email schreiben"
          image-name="Mail.png"
          @click="openModal"
          class="ml-2 mt-4"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ProductListItemView from "@/views/ProductListItemView.vue";
import { ProductModel } from "@/model/ProductModel";
import SecondaryButton from "@/uiElements/SecondaryButton.vue";
import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import AdvertEditComponent from "@/components/AdvertEditComponent.vue";
import PopUp from "@/uiElements/PopUp.vue";
import RentRequestsComponent from "@/components/RentRequestsComponent.vue";
import AvailableRentDatePickerComponent from "@/components/AvailableRentDatePickerComponent.vue";

@Options({
  components: {
    AvailableRentDatePickerComponent,
    RentRequestsComponent,
    SecondaryButton,
    ResultListItemView: ProductListItemView,
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    AdvertEditComponent,
    PopUp,
  },
  props: {
    productModel: Object,
  },
})
export default class ContactDetailView extends Vue {
  productModel!: ProductModel;
  isOpen = false;
  isDatePickerOpen = false;
  isRentRequestsOpen = false;

  openModal(): void {
    this.isOpen = true;
  }
  closeModal(): void {
    this.isOpen = false;
  }

  openDatePicker(): void {
    this.isDatePickerOpen = true;
  }

  closeDatePicker(): void {
    this.isDatePickerOpen = false;
  }

  openRentRequests(): void {
    this.isRentRequestsOpen = true;
  }

  closeRentRequests(): void {
    this.isRentRequestsOpen = false;
  }
}
</script>
