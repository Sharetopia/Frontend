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
      mx-6
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
    <div class="flex flex-col">
      <label class="text-xs">Zeitraum</label>
        <Popover class="relative">
    <PopoverButton>Solutions</PopoverButton>

    <PopoverPanel class="absolute z-10">
      <div class="grid grid-cols-2">
        <a href="/analytics">Analytics</a>
        <a href="/engagement">Engagement</a>
        <a href="/security">Security</a>
        <a href="/integrations">Integrations</a>
      </div>

      <img src="/solutions.jpg" alt="" />
    </PopoverPanel>
  </Popover>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Popover, PopoverButton, PopoverPanel} from "@headlessui/vue";

@Options({
  props: {},
  components: {Popover, PopoverButton, PopoverPanel},
})
export default class Searchbar extends Vue {}
</script>
