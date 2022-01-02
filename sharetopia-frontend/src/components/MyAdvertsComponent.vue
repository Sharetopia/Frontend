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
import { ProductModel } from "@/model/ProductModel";

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
    {
      id: "1243",
      userId: "1231",
      title: "Janniks Motorrad",
      price: 12.99,
      description: "Ich liebe mein Motorrad!",
      tags: ["Cool", "Gelb"],
      coordinates: [21.546, 24.98],
    },
    {
      id: "42343432",
      userId: "1223432432431",
      title: "Niklas stinkendes Motorrad",
      price: 122.99,
      description: "Ich hasse mein Motorrad!",
      tags: ["Shit", "braun"],
      coordinates: [21.546, 24.98],
    },
  ];
}
</script>
