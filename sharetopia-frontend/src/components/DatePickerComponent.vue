<template>
  <div>
    <DatePicker
      v-model="$props.datePickerModel.pickedRange"
      title-position="left"
      :columns="2"
      :min-date="datePickerModel.availableDateRange?.start"
      :max-date="datePickerModel.availableDateRange?.end"
      :disabled-dates="datePickerModel.unAvailableDateRanges"
      is-range
      range
    />
  </div>
</template>

<script lang="ts" setup>
import { DatePickerModel } from "@/model/DatePickerModel";
import { DatePicker } from "v-calendar";
import { defineProps } from "vue";

const props = defineProps({
  datePickerModel: {
    type: Object as () => DatePickerModel,
  },
});

</script>
