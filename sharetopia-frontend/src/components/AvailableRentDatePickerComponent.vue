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
import PrimaryButton from "@/uiElements/PrimaryButton.vue";
import { useDatePicker } from "@/composables/useDatePicker";
import DatePickerComponent from "@/components/DatePickerComponent.vue";
import { defineProps, onMounted } from "vue";
import { useMyAdverts } from "@/composables/useMyAdverts";
import { DateRange } from "@/model/SearchModel";
import { ProductModel } from "@/model/ProductModel";

const props = defineProps({
  rentableDateRange: {
    type: Object as () => DateRange,
  },
  productModel: {
    type: Object as () => ProductModel,
  },
});

const { datePickerModel, selectedRange, updateDatePickerModel } =
  useDatePicker();
const { updateRentableDates } = useMyAdverts();
const submit = (): void => {
  if (
    props.productModel &&
    selectedRange.value.start &&
    selectedRange.value.end
  )
    updateRentableDates(
      props.productModel.id,
      selectedRange.value.start as Date,
      selectedRange.value.end as Date
    );
};
onMounted(() => {
  if (props.productModel) {
    updateDatePickerModel(props.productModel);
    console.log("update Model");
  }
});
</script>
