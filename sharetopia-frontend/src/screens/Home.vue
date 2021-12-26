<template>
  <div>
    <HomeHeader />
    <div class="mt-10 flex justify-center">
      <Search class="flex-1 max-w-5xl" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MenuBurgerButton from "../uiElements/MenuBurgerButton.vue";
import Search from "../components/Search.vue";
import HomeHeader from "../components/HomeHeader.vue";

@Options({
  components: {
    MenuBurgerButton,
    Search,
    HomeHeader,
  },
})
export default class Home extends Vue {}
</script>
