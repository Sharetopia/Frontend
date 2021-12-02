<template>
  <div class="bg-transparent w-full h-screen overflow-hidden">
    <div class="flex center-items p-2 pl-6 bg-white rounded-full">
      <div class="flex flex-col flex-1">
        <input type="text" placeholder="Suche" v-model="modelValue.query" />
      </div>
      <div class="flex flex-col flex-1">
        <input type="text" placeholder="PLZ" v-model="modelValue.postalCode" />
        <Popover class="relative">
          <PopoverButton>Umkreis: {{ modelValue.radius }}km</PopoverButton>

          <PopoverPanel class="absolute z-10 p-4 bg-white rounded-b-2xl">
            <div class="flex items-center">
              <button @click="decreaseRadius()">
                <img class="h-8" src="../assets/minus_round_red.svg" />
              </button>
              <div class="px-4">{{ modelValue.radius }}km</div>
              <button @click="increaseRadius()">
                <img class="h-8" src="../assets/plus_round_red.svg" />
              </button>
            </div>
          </PopoverPanel>
        </Popover>
      </div>
      <div class="flex flex-col flex-1">
        <Popover class="relative">
          <PopoverButton>
            <div class="flex text-left flex-col">
              <div>Zeitraum</div>
              <div>
                {{ getReadableDate(modelValue.timeRange.start) }} bis
                {{ getReadableDate(modelValue.timeRange.end) }}
              </div>
            </div>
          </PopoverButton>

          <PopoverPanel class="absolute z-10">
            <div class="bg-white w-full rounded-b-xl">
              <DatePicker
                class="border-none"
                v-model="modelValue.timeRange"
                title-position="left"
                :columns="1"
                is-range
                range
              />
            </div>
            <img src="/solutions.jpg" alt="" />
          </PopoverPanel>
        </Popover>
      </div>
      <div class="flex flex-col">
        <a @click="$emit('close')">
          <img src="../assets/redButtonWithArrow.svg" />
        </a>
      </div>
    </div>
    <div class="h-full" @click="$emit('close')"></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { DatePicker } from "v-calendar";
import { SearchModel } from "../model/SearchModel";

@Options({
  props: {
    modelValue: Object,
  },
  emits: ["close", "update:modelValue"],
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    DatePicker,
  },
})
export default class Searchbar extends Vue {
  modelValue!: SearchModel;

  decreaseRadius(): void {
    if (this.modelValue.radius == 0) {
      return;
    }
    this.modelValue.radius = this.modelValue.radius - 5;
  }

  increaseRadius(): void {
    this.modelValue.radius = this.modelValue.radius + 5;
  }

  getReadableDate(date: Date): string {
    if (date == undefined) {
      return "- ";
    }
    return date.toLocaleString(undefined, {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
  }
}
</script>
