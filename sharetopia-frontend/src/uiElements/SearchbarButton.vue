<template>
  <div
    class="
      flex
      center-items
      p-2
      pl-6
      bg-white
      rounded-full
      border border-gray-300
      text-left
      mx-12
    "
  >
    <div class="flex flex-1 divide-x items-center">
      <div class="flex flex-col flex-1">
        <p>{{ searchModel.query }}</p>
      </div>
      <div class="flex flex-col flex-none px-6">
        <p class="text-sm">{{ searchModel.postalCode }}</p>
        <p class="text-sm">{{ searchModel.radius }}km</p>
      </div>
      <div class="flex flex-col flex-1 px-6">
        <p>
          {{ getReadableDate(searchModel.timeRange.start) }} -
          {{ getReadableDate(searchModel.timeRange.end) }}
        </p>
      </div>
    </div>
    <div class="flex-none flex flex-col">
      <a>
        <img src="../assets/redButtonWithArrow.svg" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { SearchModel } from "../model/SearchModel";

@Options({
  props: {
    searchModel: Object,
  },
  emits: ["close"],
  components: {},
})
export default class SearchbarButton extends Vue {
  searchModel!: SearchModel;

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
