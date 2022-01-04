<template>
  <div class="flex w-max">
    <ResultListItemView :productModel="productModel" />
    <SecondaryButton
      title="Beschreibung bearbeiten"
      image-name="burgerMenu.svg"
      @click="openModal"
    />
    <PopUp :is-open="isOpen" @close="closeModal">
      <AdvertEditComponent :productModel="productModel" />
    </PopUp>
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

@Options({
  components: {
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

  openModal(): void {
    this.isOpen = true;
  }
  closeModal(): void {
    this.isOpen = false;
  }
}
</script>
