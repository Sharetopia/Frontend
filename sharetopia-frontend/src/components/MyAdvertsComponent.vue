<template>
  <div class="">
    <MyAdvertListItemView
      :key="productModel.id"
      v-for="productModel in productModels"
      :productModel="productModel"
    />
    Hier kommen meine Inserate ding rein

    <PopUp :is-open="isDatePickerOpen" @close="closeDatePicker">
      <AvailableRentDatePickerComponent></AvailableRentDatePickerComponent>
    </PopUp>

    <SecondaryButton
      @click="openDatePicker"
      title="Mietzeitraum angeben"
      image-name="burgerMenu.svg"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ProductListItemView from "@/views/ProductListItemView.vue";
import MyAdvertListItemView from "@/views/MyAdvertListItemView.vue";
import { dummyBike, ProductModel } from "@/model/ProductModel";
import SecondaryButton from "@/uiElements/SecondaryButton.vue";
import PopUp from "@/uiElements/PopUp.vue";
import AvailableRentDatePickerComponent from "@/components/AvailableRentDatePickerComponent.vue";

@Options({
  components: {
    AvailableRentDatePickerComponent,
    PopUp,
    SecondaryButton,
    ProductListItemView,
    MyAdvertListItemView,
    ResultListItemView: ProductListItemView,
  },
  props: {},
})
export default class MyAdvertsComponent extends Vue {
  productModels: ProductModel[] = [dummyBike];
  isDatePickerOpen = false;

  openDatePicker(): void {
    this.isDatePickerOpen = true;
  }

  closeDatePicker(): void {
    this.isDatePickerOpen = false;
  }
}
</script>
