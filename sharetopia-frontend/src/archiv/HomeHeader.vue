<template>
  <div class="h-52 w-screen flex items-start">
    <img src="../assets/logo.svg" class="z-20 mt-10 ml-5 flex-none" />

    <div class="h-44 bg-gray-300 absolute w-screen top-0 left-0"></div>

    <div class="flex-1"></div>

    <MenuBurgerButton class="z-20 m-10 flex-none" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MenuBurgerButton from "./MenuBurgerButton.vue";
import SearchComponent from "../components/SearchComponent.vue";

@Options({
  components: {
    MenuBurgerButton,
    Search: SearchComponent,
  },
})
export default class HomeHeader extends Vue {}
</script>
