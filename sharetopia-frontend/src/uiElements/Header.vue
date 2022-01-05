<template>
  <div class="h-32 w-full flex items-center">
    <button @click="pushHome" v-if="homeLinkActive">
      <img src="../assets/logo.svg" class="flex-none" />
    </button>
    <img src="../assets/logo.svg" class="flex-none" v-if="!homeLinkActive" />
    <div class="flex-1">
      <SearchComponent v-if="showSearchbar" />
    </div>
    <MenuComponent v-if="showMenuButton" class="flex-none" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MenuComponent from "@/components/MenuComponent.vue";
import SearchComponent from "@/components/SearchComponent.vue";
import { useRoutes } from "@/composables/useRoutes";

@Options({
  components: { SearchComponent, MenuComponent },
  props: {
    showMenuButton: Boolean,
    showSearchbar: Boolean,
    homeLinkActive: Boolean,
  },
})
export default class Header extends Vue {
  showMenuButton!: boolean;
  showSearchbar!: boolean;
  homeLinkActive!: boolean;

  pushHome(): void {
    useRoutes(this.$router).pushHomeRoute();
  }
}
</script>
