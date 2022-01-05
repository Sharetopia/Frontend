<template>
  <div>
    <DatePicker
      v-model="datePickerModel.pickedRange"
      title-position="left"
      :columns="2"
      :min-date="datePickerModel.availableDateRange.start"
      :max-date="datePickerModel.availableDateRange.end"
      :disabled-dates="datePickerModel.unAvailableDateRanges"
      is-range
      range
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { DatePickerModel } from "@/model/DatePickerModel";
import { DatePicker } from "v-calendar";
import { Ref } from "vue";

@Options({
  props: {
    datePickerModel: Object,
  },
  components: {
    DatePicker,
  },
})
export default class LeafletMapComponent extends Vue {
  datePickerModel!: DatePickerModel;
}
</script>
