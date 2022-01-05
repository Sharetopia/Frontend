<template>
  <div class="layout">
    <Header
      :show-menu-button="true"
      :show-searchbar="true"
      :home-link-active="true"
      class="flex-none"
    />
    <div class="flex-1 grow">
      <router-view></router-view>
    </div>
    <footer>
      <Footer class="flex-none" />
    </footer>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MenuBurgerButton from "../archiv/MenuBurgerButton.vue";
import SearchComponent from "../components/SearchComponent.vue";
import Header from "@/uiElements/Header.vue";
import Footer from "@/uiElements/Footer.vue";
import { Auth } from "aws-amplify";
import {useRoutes} from "@/composables/useRoutes";

@Options({
  components: {
    Footer: Footer,
    Header: Header,
    MenuBurgerButton,
    Search: SearchComponent,
  },
})
export default class MainScreen extends Vue {
  beforeMount(): void {
    this.checkUserLoggedIn();
  }

  async checkUserLoggedIn(): Promise<void> {
    try {
      await Auth.currentAuthenticatedUser();
    } catch {
      useRoutes(this.$router).pushLoginRoute()
    }
  }
}
</script>
