<template>
  <div v-if="productModel.value" class="flex">
    <div class="w-1/2 px-16">
      <PhotoGallery />
    </div>
    <div class="w-1/2 px-16">
      <div class="divide-y divide-black divide-opacity-25">
        <div class="m-4 mb-8">
          <ProductTextDetail :productModel="productModel.value" />
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
              :min-date="getStartDate()"
              :max-date="getEndDate()"
              :disabled-dates="getBookedDates()"
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
import { ref } from "vue";
import { DateRange } from "@/model/SearchModel";

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
  productModel = ref<ProductModel | undefined>(Object(undefined));

  beforeMount(): void {
    let productId = this.$route.query["id"];
    if (typeof productId == "string") this.loadProductModelBy(productId);
  }

  async loadProductModelBy(id: string): Promise<void> {
    console.log("das geht");
    ProductApi.findById(id).then((model) => {
      //console.log(model);
      this.productModel.value = model;
      console.log(this.productModel.value);
    });
    console.log("das nicht");
  }

  getLocationPin(): LocationPinModel | undefined {
    if (this.productModel.value)
      return {
        name: this.productModel.value.title,
        coordinates: this.productModel.value.location,
        productId: this.productModel.value.id,
      };
  }

  getUserId(): string | undefined {
    console.log(this.productModel.value);
    if (this.productModel.value) return this.productModel.value.userId;
  }

  getLocation(): number[] | undefined {
    if (this.productModel.value) return this.productModel.value.location;
  }

  getStartDate(): Date | undefined {
    if (this.productModel.value)
      return this.productModel.value.bookingDates?.available.start as Date;
  }

  getEndDate(): Date | undefined {
    if (this.productModel.value)
      return this.productModel.value.bookingDates?.available.end as Date;
  }

  getBookedDates(): DateRange[] | undefined {
    if (this.productModel.value)
      return this.productModel.value.bookingDates?.unavailable as DateRange[];
  }
}
</script>
