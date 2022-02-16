<template>
  <div>
    <div class="w-full flex justify-around">
      <button type="button" v-if="!isOpen" @click="openModal" class="">
        <SearchbarButton :searchModel="searchModel" />
      </button>
    </div>
    <PopUp :is-open="isOpen" @close="closeModal">
      <Searchbar
        @close="closeModal"
        @search="search"
        v-model="searchModel"
      ></Searchbar>
    </PopUp>
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
import { Factory } from "@/utils/factory";
import PopUp from "@/uiElements/PopUp.vue";
import { useRoutes } from "@/composables/useRoutes";
import { useAnalytics } from "@/composables/useAnalytics";

@Options({
  props: {},
  components: {
    PopUp,
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

  mounted(): void {
    useAnalytics("Search", "SearchComponent.vue");
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
    useRoutes(this.$router).pushSearchRoute(this.searchModel);

    this.closeModal();
  }

  openModal(): void {
    this.isOpen = true;
  }
}
</script>
