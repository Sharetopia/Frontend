<template>
  <button class="bg-red-500 text-white py-4 px-8 rounded-full hover:bg-red-700">
    <p>{{ title }}</p>
  </button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    title: String,
  },
  components: {},
})
export default class PrimaryButton extends Vue {
  title!: string;
}
</script>
