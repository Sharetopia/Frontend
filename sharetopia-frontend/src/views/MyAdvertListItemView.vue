<template>
  <div class="flex w-max">
    <ResultListItemView :productModel="productModel" />
    <SecondaryButton
      title="Beschreibung bearbeiten"
      image-name="burgerMenu.svg"
      @click="openModal"
    />
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal">
        <div class="fixed inset-0 z-10 overflow-hidden">
          <div class="min-h-screen px-4 text-center">
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75" />
            </TransitionChild>

            <span class="inline-block h-screen" aria-hidden="true">
              &#8203;
            </span>

            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <div
                class="
                  inline-block
                  w-full
                  overflow-hidden
                  text-left
                  align-middle
                  transition-all
                  transform
                  mt-16
                "
              >
                <!-- Write here the content of the modal -->
                <AdvertEditComponent :productModel="productModel" />
              </div>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
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

@Options({
  components: {
    SecondaryButton,
    ResultListItemView: ProductListItemView,
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    AdvertEditComponent,
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
