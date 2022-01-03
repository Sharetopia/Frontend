<template>
  <div v-if="productModel !== undefined" class="flex">
    <div class="w-1/2 px-16">
      <PhotoGallery />
    </div>
    <div class="w-1/2 px-16">
      <div class="divide-y divide-black divide-opacity-25">
        <div class="m-4 mb-8">
          <ProductTextDetail :productModel="productModel" />
          <div class="flex mt-8">
            <div class="w-max mr-6">
              <ContactDetail :userId="getUserId()" />
            </div>
            <div class="h-36 w-full">
              <LeafletMap
                :pins="[getLocationPin()]"
                :center="getLocation()"
                :coordinates="getLocation()"
                :zoom="15"
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
import { dummyBike, dummyCar, ProductModel } from "../model/ProductModel";
import { Calendar, DatePicker } from "v-calendar";
import Header from "@/uiElements/Header.vue";
import Footer from "@/uiElements/Footer.vue";
import PrimaryButton from "@/uiElements/PrimaryButton.vue";
import { LocationPinModel } from "@/model/LocationPinModel";
import { ProductApi } from "@/api/product";

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
  productModel: ProductModel | undefined = dummyCar;

  beforeMount(): void {
    let productId = this.$route.query["id"];
    if (typeof productId == "string") this.loadProductModelBy(productId);
  }

  async loadProductModelBy(id: string): Promise<void> {
    console.log("das geht");
    ProductApi.findById(id).then((model) => {
      console.log(model);
      this.productModel = model;
    });
    console.log("das nicht");
  }

  getLocationPin(): LocationPinModel | undefined {
    if (this.productModel)
      return {
        name: this.productModel.title,
        coordinates: this.productModel.location,
        productId: this.productModel.id,
      };
  }

  getUserId(): string | undefined {
    if (this.productModel) return this.productModel.userId;
  }

  getLocation(): number[] | undefined {
    if (this.productModel) return this.productModel.location;
  }
}
</script>
