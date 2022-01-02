<template>
  <div>
    <div class="w-full flex justify-around">
      <button type="button" v-if="!isOpen" @click="openModal" class="">
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
                <Searchbar
                  @close="closeModal"
                  @search="search"
                  v-model="searchModel"
                />
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
import SearchbarButtonView from "../views/SearchbarButtonView.vue";
import { SearchModel } from "../model/SearchModel";
import { Routes } from "../router/routes";
import { Factory } from "@/utils/factory";

@Options({
  props: {},
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    Searchbar: SearchbarView,
    SearchbarButton: SearchbarButtonView,
  },
})
export default class SearchComponent extends Vue {
  searchModel: SearchModel = {
    query: "",
    radius: 10,
    postalCode: "",
    timeRange: {
      start: new Date(),
      end: new Date(),
    },
  };
  isOpen = false;

  beforeMount(): void {
    let model = Factory.createSearchModel(this.$route.query);
    if (model) {
      this.searchModel = model;
    }
  }

  closeModal(): void {
    this.isOpen = false;
  }

  search(): void {
    console.log("es wird gesucht");
    if (this.searchModel.query === "") {
      console.log("rausgeflogen");
      // TODO: Show an Error!
      return;
    }
    Routes.pushSearchRoute(this.$router, this.searchModel);

    this.closeModal();
  }

  openModal(): void {
    this.isOpen = true;
  }
}
</script>
