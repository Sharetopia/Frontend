<template>
  <div
    class="
      flex
      center-items
      border border-gray-300
      shadow-sm
      rounded-full
      p-2
      px-6
    "
  >
    <div class="flex flex-col">
      <label class="text-xs">Suche</label>
      <input type="text" />
    </div>
    <div class="flex flex-col">
      <label class="text-xs">PLZ</label>
      <input type="text" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {},
  components: {},
})
export default class Searchbar extends Vue {}
</script>
