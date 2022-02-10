<template>
  <div class="card p-8 flex flex-col">
    <h1>Mietzeitraum angeben</h1>
    <div class="flex flex-col my-6">
      <DatePickerComponent :date-picker-model="datePickerModel" />
    </div>
    <div class="flex justify-center">
      <div class="w-2/3 flex">
        <PrimaryButton title="Speichern" class="flex-1" @click="submit()" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Options, Vue } from "vue-class-component";
import PrimaryButton from "@/uiElements/PrimaryButton.vue";
import { DatePicker } from "v-calendar";
import { useDatePicker } from "@/composables/useDatePicker";
import DatePickerComponent from "@/components/DatePickerComponent.vue";
import {defineEmits, defineProps} from "vue";
import { useMyAdverts } from "@/composables/useMyAdverts";
import {DateRange} from "@/model/SearchModel";

const props = defineProps({
  rentableDateRange: {
    type: Object as () => DateRange,
  },
  productId: String
});

const { datePickerModel, selectedRange } = useDatePicker();
const {updateRentableDates} = useMyAdverts()
const submit = (): void => {
  if(props.productId && props.rentableDateRange && props.rentableDateRange.start && props.rentableDateRange.end)
  updateRentableDates(props.productId, props.rentableDateRange.start, props.rentableDateRange.end)
};



</script>
