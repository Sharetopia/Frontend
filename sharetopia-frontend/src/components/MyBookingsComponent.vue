<template>
  <div class="">
    <MyBookingsListItemView
        :key="productModel.id"
        v-for="productModel in products"
        :productModel="productModel"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import {ProductModel} from "@/model/ProductModel";
import MyBookingsListItemView from "@/views/MyBookingsListItemView.vue";

@Options({
  components: {MyBookingsListItemView},
  props: {},
})
export default class MyBookingsComponent extends Vue {
  products: ProductModel[] = [{
    address: {street: 'Ludwigsburger Straße 11', city: 'Backnang', zip: '71522'},
    description: "Mein tolles neues Fahrrad hat Bremse, Hupe und Licht.",
    id: "61dacfe64a3a9f5a282de76b",
    location: [48.923069, 9.43038],
    price: 12.99,
    tags: ['Fahrrad', 'Mobilität'],
    title: "Fahrrad",
    userId: ""
  }
      ];
}
</script>
