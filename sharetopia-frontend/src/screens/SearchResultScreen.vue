<template>
  <div>
    <HeaderSearch />
    <div class="flex">
      <div class="w-1/2">
        <ResultListItem
          :key="productModel.id"
          v-for="productModel in productModels"
          :productModel="productModel"
        />
      </div>
      <div class="w-1/2"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HeaderSearch from "@/components/HeaderSearch.vue";
import ResultListItemView from "@/views/ResultListItemView.vue";
import { ProductModel } from "../model/ProductModel";

@Options({
  components: {
    HeaderSearch,
    ResultListItem: ResultListItemView,
  },
})
export default class SearchResultScreen extends Vue {
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
