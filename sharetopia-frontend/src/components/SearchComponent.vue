<template>
  <div>
    <div class="">
      <button type="button" @click="openModal" class="w-full">
        <SearchbarButton :searchModel="searchModel" />
      </button>
    </div>
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
                <Searchbar @close="closeModal()" v-model="searchModel" />
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
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
} from "@headlessui/vue";
import SearchbarView from "../views/SearchbarView.vue";
import SearchbarButton from "../uiElements/SearchbarButton.vue";
import { SearchModel } from "../model/SearchModel";

@Options({
  props: {},
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    Searchbar: SearchbarView,
    SearchbarButton,
  },
})
export default class SearchComponent extends Vue {
  searchModel: SearchModel = {
    query: "Gravel Bike Test",
    radius: 10,
    postalCode: "71549",
    timeRange: {
      start: new Date(),
      end: new Date(),
    },
  };

  isOpen = false;
  closeModal(): void {
    this.isOpen = false;
  }
  openModal(): void {
    this.isOpen = true;
  }
}
</script>
