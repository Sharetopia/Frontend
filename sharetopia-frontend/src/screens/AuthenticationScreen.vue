<template>
  <div class="layout">
    <Header class="flex-none" />
    <div class="flex-1 mt-10 flex justify-center">
      <router-view></router-view>
    </div>
    <FooterComponent class="flex-none" />
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
    FooterComponent: Footer,
    Header,
    MenuBurgerButton,
    Search: SearchComponent,
  },
})
export default class Authentication extends Vue {}
</script>
