<template>
  <div class="card p-8 flex flex-col">
    <h1>Mietzeitraum angeben</h1>
    <div class="flex flex-col my-6">
      <DatePicker
        model-value="range"
        title-position="left"
        :columns="2"
        is-range
        range
      />
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

@Options({
  components: { PrimaryButton, DatePicker },
  props: {},
})
export default class ProfileEditComponent extends Vue {
  range = {
    start: Date,
    end: Date,
  };
  submit = (): void => {
    console.log(this.range);
  };
}
</script>
