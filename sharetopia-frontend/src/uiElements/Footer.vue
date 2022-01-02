<template>
  <div class="h-52 mt-32">
    <div class="flex justify-center">
      <div>
        <img
          src="../assets/share-banner-with-bottom.png"
          alt="share-banner"
          class="h-36 md:h-52"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  props: {},
})
export default class Footer extends Vue {}
</script>
