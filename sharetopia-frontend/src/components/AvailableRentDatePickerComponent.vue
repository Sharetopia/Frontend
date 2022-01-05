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

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import PrimaryButton from "@/uiElements/PrimaryButton.vue";
import { DatePicker } from "v-calendar";
import { useDatePicker } from "@/composables/useDatePicker";
import DatePickerComponent from "@/components/DatePickerComponent.vue";

export default {
  components: {
    DatePickerComponent,
    PrimaryButton,
  },
  setup() {
    const { datePickerModel, selectedRange } = useDatePicker();

    const submit = (): void => {
      console.log(selectedRange.value);
    };

    return { datePickerModel, submit };
  },
};
</script>
