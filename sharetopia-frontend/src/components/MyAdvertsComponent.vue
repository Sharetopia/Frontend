<template>
  <div class="">
    <MyAdvertListItemView
      :key="productModel.id"
      v-for="productModel in productModels"
      :productModel="productModel"
    />
    Hier kommen meine Inserate ding rein

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
import RentRequestsComponent from "@/components/RentRequestsComponent.vue";

@Options({
  components: {
    RentRequestsComponent,
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
}
</script>
