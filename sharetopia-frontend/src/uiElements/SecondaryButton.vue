<template>
  <button class="flex rounded-lg hover:bg-gray-300 p-4 items-center h-12">
    <img :src="getImageUrl(imageName)" class="mr-6 h-6" />
    <p class="">{{ title }}</p>
  </button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    title: String,
    imageName: String,
  },
  components: {},
})
export default class PrimaryButton extends Vue {
  title!: string;
  imageName!: string;

  getImageUrl(imageName: string): string {
    var images = require.context("../assets/", false);
    return images("./" + imageName);
  }
}
</script>
