<template>
  <div class="">
    Ich werde einmal ein Footer werden
    <div class="w-screen flex justify-center">
      <img
        src="../assets/share-banner.png"
        alt="share-banner"
        class="h-36 md:h-52"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  props: {},
})
export default class FooterComponent extends Vue {}
</script>
