<template>
  <div>
    <div class="h-52 w-screen flex flex-row-reverse">
      <div class="h-44 bg-gray-300 absolute w-screen top-0 left-0"></div>
      <div class="z-10 absolute top-9 left-0 w-screen flex justify-center">
        <img src="../assets/share-banner.png" alt="share-banner" class="h-52" />
      </div>
      <MenuBurgerButton class=""/>
    </div>
    <div class=""></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MenuBurgerButton from "../components/MenuBurgerButton.vue";

@Options({
  components: {
    MenuBurgerButton,
  },
})
export default class Home extends Vue {}
</script>
