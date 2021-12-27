<template>
  <div class="layout">
    <Header :show-menu-button="true" :show-searchbar="true" class="flex-none" />
    <div class="flex-1">
      <router-view></router-view>
    </div>
    <Footer class="flex-none" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MenuBurgerButton from "../archiv/MenuBurgerButton.vue";
import SearchComponent from "../components/SearchComponent.vue";
import Header from "@/uiElements/Header.vue";
import Footer from "@/uiElements/Footer.vue";

@Options({
  components: {
    Footer: Footer,
    Header: Header,
    MenuBurgerButton,
    Search: SearchComponent,
  },
})
export default class MainScreen extends Vue {}
</script>
