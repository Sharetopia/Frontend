<template>
  <div class="layout">
    <HeaderComponent
      :show-searchbar="true"
      :show-menu-button="true"
      class="flex-none"
    />
    <div class="flex-1 flex">
      <div class="w-1/2">
        <ResultListItem
          :key="productModel.id"
          v-for="productModel in productModels"
          :productModel="productModel"
        />
      </div>
      <div class="w-1/2"></div>
    </div>
    <Footer class="flex-none" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ResultListItemView from "@/views/ResultListItemView.vue";
import { ProductModel } from "../model/ProductModel";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

@Options({
  components: {
    FooterComponent,
    HeaderComponent,
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
