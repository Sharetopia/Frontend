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
import {dummyBike, ProductModel} from "@/model/ProductModel";

@Options({
  components: {
    ProductListItemView,
    MyAdvertListItemView,
    ResultListItemView: ProductListItemView,
  },
  props: {},
})
export default class MyAdvertsComponent extends Vue {
  productModels: ProductModel[] = [
    dummyBike
  ];
}
</script>
