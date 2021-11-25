<template>
  <HeaderSearch />
  <div class="flex">
    <div class="w-1/2"></div>
    <div class="w-1/2">
      <div class="">
        <button class="">
          <div class="flex">
            <img src="../assets/star_1.png" alt="" class="h-6" />
            <span class=""> Zurück </span>
          </div>
        </button>
      </div>
      <div class="divide-y divide-black divide-opacity-25">
        <div class="m-4">
          <ProductTextDetail :productModel="productModel" />
          <div class="flex mt-8">
            <div class="w-max">
              <ContactDetail :userId="productModel.userId" />
            </div>
            <div class="h-36 w-full">
              <LeafletMap
                :coordinates="productModel.coordinates"
                :name="productModel.title"
              />
            </div>
          </div>
        </div>
        <div>
          <div class="mt-4">
            <DatePicker
              v-model="range"
              title-position="left"
              :columns="2"
              is-range
              range
            />
          </div>
          <div class="mt-4">
            <button class="btn-red">Anfrage stellen</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ProductTextDetail from "@/components/ProductTextDetail.vue"; // @ is an alias to /src
import LeafletMap from "@/components/LeafletMap.vue";
import ContactDetail from "@/components/ContactDetail.vue";
import HeaderSearch from "@/components/HeaderSearch.vue";
import { ProductModel } from "../model/ProductModel";
import { Calendar, DatePicker } from "v-calendar";

@Options({
  components: {
    ProductTextDetail,
    LeafletMap,
    ContactDetail,
    Calendar,
    DatePicker,
    HeaderSearch,
  },
})
export default class ProductDetail extends Vue {
  range = {
    start: Date,
    end: Date,
  };

  productModel: ProductModel = {
    id: "224132454315243523",
    userId: "Dein Mutter",
    title: "Canyon Grail 6",
    price: 10.99,
    description:
      "Ich biete hier mein Gravel Bike zum Verleih an, da ich zur Zeit einen Bruch habe und es daher nicht nutzen kann. Ich biete hier mein Gravel Bike zum Verleih an, da ich zur Zeit einen Bruch habe und es daher nicht nutzen kann.",
    tags: ["BIKE", "GRAVEL", "OUTDOOR"],
    coordinates: [48.9471455, 9.4341813],
  };
}
</script>
