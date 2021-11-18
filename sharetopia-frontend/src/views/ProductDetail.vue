<template>
  <div class="home">
    <ProductTextDetail :productModel="productModel"/>
    <div class="h-36">
      <LeafletMap 
        :coordinates="productModel.coordinates"
        :name="productModel.title"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ProductTextDetail from "@/components/ProductTextDetail.vue"; // @ is an alias to /src
import LeafletMap from "@/components/LeafletMap.vue"; // @ is an alias to /src
import { ProductModel } from "../model/ProductModel";

@Options({
  components: {
    ProductTextDetail,
    LeafletMap,
  },           
})
export default class ProductDetail extends Vue {
    productModel: ProductModel = {
    id: "224132454315243523",
    title: "Canyon Grail 6",
    price: 10.99,
    description: "Ich biete hier mein Gravel Bike zum Verleih an, da ich zur Zeit einen Bruch habe und es daher nicht nutzen kann. Ich biete hier mein Gravel Bike zum Verleih an, da ich zur Zeit einen Bruch habe und es daher nicht nutzen kann.",
    tags: ["BIKE", "GRAVEL", "OUTDOOR"],
    coordinates: [48.9471455, 9.4341813]
  };
}
</script>
