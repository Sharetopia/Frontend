<template>
  <div class="flex">
    <div class="w-1/2 px-16">
      <PhotoGallery />
    </div>
    <div class="w-1/2 px-16">
      <div class="divide-y divide-black divide-opacity-25">
        <div class="m-4 mb-8">
          <ProductTextDetail :productModel="productModel" />
          <div class="flex mt-8">
            <div class="w-max mr-6">
              <ContactDetail :userId="productModel.userId" />
            </div>
            <div class="h-36 w-full">
              <LeafletMap
                :coordinates="[47.7377921, 16.339096]"
                :name="productModel.title"
              />
            </div>
          </div>
        </div>
        <div>
          <div class="mt-8 flex justify-center">
            <DatePicker
              v-model="range"
              title-position="left"
              :columns="2"
              is-range
              range
            />
          </div>
          <div class="mt-4 flex justify-center">
            <PrimaryButton title="Anfrage stellen" />
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
import { dummyBike, ProductModel } from "../model/ProductModel";
import { Calendar, DatePicker } from "v-calendar";
import Header from "@/uiElements/Header.vue";
import Footer from "@/uiElements/Footer.vue";
import PrimaryButton from "@/uiElements/PrimaryButton.vue";

@Options({
  components: {
    PrimaryButton,
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

  productModel: ProductModel = dummyBike;
}
</script>
