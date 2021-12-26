<template>
  <div class="h-52 w-screen flex items-center">
    <img src="../assets/logo.svg" class="flex-none" />
    <div class="flex-1"></div>
    <MenuComponent v-if="showMenuButton" class="flex-none" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MenuComponent from "@/components/MenuComponent.vue";

@Options({
  components: { MenuComponent },
  props: {
    showMenuButton: Boolean,
    showSearchbar: Boolean,
  },
})
export default class HeaderComponent extends Vue {
  showMenuButton!: boolean;
  showSearchbar!: boolean;
}
</script>
