<template>
  <div class="flex">
    <div class="w-1/2">
      <PhotoGallery />
    </div>
    <div class="w-1/2">
      <div class="">
        <button class="flex items-center pt-4 pl-4">
          <img src="../assets/backArrow.svg" alt="" class="h-6" />
          <span class="pl-2"> Zurück </span>
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
import ProductTextDetailView from "@/views/ProductTextDetailView.vue"; // @ is an alias to /src
import LeafletMapComponent from "@/components/LeafletMapComponent.vue";
import ContactDetail from "@/views/ContactDetailView.vue";
import MenuComponent from "@/components/MenuComponent.vue";
import PhotoGalleryView from "@/views/PhotoGalleryView.vue";
import { ProductModel } from "../model/ProductModel";
import { Calendar, DatePicker } from "v-calendar";
import Header from "@/uiElements/Header.vue";
import Footer from "@/uiElements/Footer.vue";

@Options({
  components: {
    FooterComponent: Footer,
    HeaderComponent: Header,
    ProductTextDetail: ProductTextDetailView,
    LeafletMap: LeafletMapComponent,
    ContactDetail,
    Calendar,
    DatePicker,
    HeaderSearch: MenuComponent,
    PhotoGallery: PhotoGalleryView,
  },
})
export default class ProductDetailComponent extends Vue {
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
