import { onMounted, ref } from "vue";
import { dummyBike, dummyCar, ProductModel } from "@/model/ProductModel";
import { useNetwork } from "@/composables/useNetwork";
import { SearchModel } from "@/model/SearchModel";
import { ApiSearchModel } from "@/model/ApiSearchModel";
import { ApiRentRequest } from "@/model/ApiRentRequest";
import { API } from "aws-amplify";

export function useProduct(id: string | undefined, type: string) {
  const product = ref<ProductModel | undefined>(Object(undefined));
  const { apiCall } = useNetwork();
  const loadProductById = async (id: string) => {
    product.value = dummyBike;
    const result: ProductModel = await apiCall<ProductModel>(
      `http://localhost:8080/api/v1/products/${id}`,
      type
    );
    product.value = result;
  };
  onMounted(() => {
    if (id) {
      loadProductById(id);
    }
  });
  return {
    product,
    loadProductById,
  };
}

export function useProducts(type: string, product?: ProductModel | undefined) {
  const products = ref<ProductModel[]>(Object([]));
  const { apiCall } = useNetwork();
  const loadProducts = async () => {
    products.value = [dummyBike, dummyBike, dummyBike, dummyCar];
    let result: ProductModel[];
    switch (type) {
      case "GET":
        result = await apiCall<ProductModel[]>(
          `http://localhost:8080/api/v1/products`,
          type
        );
        products.value = result;
        break;
      case "POST":
        await apiCall<void>(
          `http://localhost:8080/api/v1/products`,
          type,
          product
        );
        break;
      default:
        console.log("http request type wrong or not implemented yet");
        break;
    }
  };
  onMounted(() => {
    loadProducts();
  });
  return {
    products,
    loadProducts,
  };
}

export function useProductSearch(searchModel: SearchModel | undefined) {
  const products = ref<ProductModel[]>(Object([]));
  const { apiCall } = useNetwork();
  //todo change searchmodel or keep workaround
  const search: ApiSearchModel = {
    term: searchModel!.query,
    distance: searchModel!.radius,
    cityIdentifier: searchModel!.postalCode,
    startDate: searchModel!.timeRange.start,
    endDate: searchModel!.timeRange.end,
  };

  const loadProducts = async (search: ApiSearchModel) => {
    products.value = [dummyBike, dummyBike, dummyBike, dummyCar];
    const result: ProductModel[] = await apiCall<ProductModel[]>(
      `http://localhost:8080/api/v1/products/findNearCity`,
      "GET",
      search
    );
    products.value = result;
  };
  onMounted(() => {
    if (searchModel) {
      loadProducts(search);
    }
  });
  return {
    products,
    loadProducts,
  };
}
