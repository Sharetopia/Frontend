<template>
  <div class="bg-transparent w-full h-screen overflow-hidden">
    <div class="flex center-items p-2 px-6 bg-white rounded-full">
      <div class="flex flex-col flex-1">
        <input type="text" placeholder="Suche" />
      </div>
      <div class="flex flex-col flex-1">
        <input type="text" placeholder="PLZ" />
        <Popover class="relative">
          <PopoverButton>Umkreis: {{ radius }}km</PopoverButton>

          <PopoverPanel class="absolute z-10 p-4 bg-white rounded-2xl">
            <div class="flex items-center">
              <button @click="decreaseRadius()">
                <img class="h-8" src="../assets/minus_round_red.svg" />
              </button>
              <div class="px-4">{{ radius }}km</div>
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
                {{ getReadableDate(range.start) }} bis
                {{ getReadableDate(range.end) }}
              </div>
            </div>
          </PopoverButton>

          <PopoverPanel class="absolute z-10">
            <div class="bg-white w-full">
              <DatePicker
                v-model="range"
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
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { DatePicker } from "v-calendar";

@Options({
  props: {},
  emits: ["close"],
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    DatePicker,
  },
})
export default class Searchbar extends Vue {
  range: DateRange = {};
  radius = 10;

  decreaseRadius(): void {
    if(this.radius == 0) {
      return 
    }
    this.radius = this.radius - 5;
  }

  increaseRadius(): void {
    this.radius = this.radius + 5;
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

type DateRange = {
  start?: Date;
  end?: Date;
};
</script>
