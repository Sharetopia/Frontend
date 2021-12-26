<template>
  <div class="flex flex-col min-h-screen">
    <Header :show-menu-button="true" class="flex-none" />
    <div class="flex-1">
      Hallo
      <!--      <Search class="flex-1 max-w-5xl" />-->
    </div>
    <Footer class="flex-none" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MenuBurgerButton from "../archiv/MenuBurgerButton.vue";
import SearchComponent from "../components/SearchComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

@Options({
  components: {
    Footer: FooterComponent,
    Header: HeaderComponent,
    MenuBurgerButton,
    Search: SearchComponent,
  },
})
export default class HomeScreen extends Vue {}
</script>
