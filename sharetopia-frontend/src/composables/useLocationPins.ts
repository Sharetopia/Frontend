import { ref } from "vue";
import { LocationPinModel } from "@/model/LocationPinModel";
import { ProductModel } from "@/model/ProductModel";

export function useLocationPins() {
  const locationPins = ref<LocationPinModel[]>([]);
  const centerPin = ref<LocationPinModel | undefined>(Object(undefined));
  const createLocationPins = (products: ProductModel[]) => {
    locationPins.value = products.map((product) => {
      return {
        name: product.title,
        coordinates: product.location,
        productId: product.id,
      };
    });
    if (locationPins.value.length > 0) {
      centerPin.value = locationPins.value[0];
    }
  };
  return { locationPins, centerPin, createLocationPins };
}
