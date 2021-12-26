<template>
  <div class="layout">
    <HeaderComponent
      :show-menu-button="true"
      :show-searchbar="true"
      class="flex-none"
    />
    <div class="flex-1">
      <div class="">Ich werde einmal Meine Inserate anzeigen</div>
      <!--      <Search class="flex-1 max-w-5xl" />-->
    </div>
    <Footer class="flex-none" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";

@Options({
  components: {
    HeaderComponent,
    FooterComponent,
  },
  props: {},
})
export default class AdvertsScreen extends Vue {}
</script>
