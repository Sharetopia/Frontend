<template>
  <div class="flex center-items p-2 px-6">
    <div class="flex flex-col flex-1">
      <input type="text" placeholder="Suche" />
    </div>
    <div class="flex flex-col flex-1">
      <input type="text" placeholder="PLZ" />
    </div>
    <div class="flex flex-col flex-1">
      <label class="text-xs">Zeitraum</label>
      <Popover class="relative">
        <PopoverButton>Solutions</PopoverButton>

        <PopoverPanel class="absolute z-10 bg-white">
          <div class="grid grid-cols-2">
            <a href="/analytics">Analytics</a>
            <a href="/engagement">Engagement</a>
            <a href="/security">Security</a>
            <a href="/integrations">Integrations</a>
          </div>
        </PopoverPanel>
      </Popover>
    </div>
    <div class="flex flex-col">
      <a @click="$emit('close')">
        <img src="../assets/redButtonWithArrow.svg" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";

@Options({
  props: {},
  emits: ["close"],
  components: { Popover, PopoverButton, PopoverPanel },
})
export default class Searchbar extends Vue {}
</script>
