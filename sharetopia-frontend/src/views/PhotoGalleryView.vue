<template>
  <div class="py-4">
    <div class="flex h-2/3">
      <div class="w-2/3">
        <img
          src="../assets/TestImage1.png"
          alt="Bild1"
          class="h-1/2 w-full pr-4 pb-4 object-cover rounded-tl-3xl"
        />
        <div class="h-1/2 flex">
          <img
            src="../assets/TestImage2.png"
            alt="Bild1"
            class="w-1/2 pr-4 pb-4 object-cover"
          />
          <img
            src="../assets/TestImage3.png"
            alt="Bild1"
            class="w-1/2 pr-4 pb-4 object-cover"
          />
        </div>
      </div>
      <div class="w-1/3 h-2/3">
        <img
          src="../assets/TestImage4.png"
          alt="Bild1"
          class="w-full pb-4 object-cover rounded-tr-3xl"
        />
      </div>
    </div>
    <img
      src="../assets/TestImage5.png"
      alt="Bild1"
      class="h-1/3 w-full object-cover rounded-b-3xl"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {},
  emits: [],
  components: {},
})
export default class PhotoGalleryView extends Vue {}
</script>
