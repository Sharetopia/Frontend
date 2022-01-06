import { onMounted, ref } from "vue";
import { dummyBike, dummyCar, ProductModel } from "@/model/ProductModel";
import { useNetwork } from "@/composables/useNetwork";
import { SearchModel } from "@/model/SearchModel";
import { ApiSearchModel } from "@/model/ApiSearchModel";
import { ApiRentRequest } from "@/model/ApiRentRequest";

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

export function useProducts(type: string) {
  const products = ref<ProductModel[]>(Object([]));
  const { apiCall } = useNetwork();
  const loadProducts = async () => {
    products.value = [dummyBike, dummyBike, dummyBike, dummyCar];
    if (type === ("GET" || "POST")) {
      const result: ProductModel[] = await apiCall<ProductModel[]>(
        `http://localhost:8080/api/v1/products`,
        type
      );
      products.value = result;
    } else {
      console.log("type not wrong or not implemented yet");
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

export function useRentRequest(rentRequest: ApiRentRequest) {
  const { apiCall } = useNetwork();

  const createRentRequest = async (rentRequest: ApiRentRequest) => {
    await apiCall<void>(
      "http://localhost:8080/api/v1/rentRequest",
      "POST",
      rentRequest
    );
  };
  onMounted(() => {
    if (rentRequest) {
      createRentRequest(rentRequest);
    }
  });
  return {
    createRentRequest,
  };
}

export function useRentRequestDelete(id: string | undefined) {
  const { apiCall } = useNetwork();

  const deleteRentRequest = async (id: string) => {
    await apiCall<void>(
      `http://localhost:8080/api/v1/rentRequest/${id}`,
      "DELETE"
    );
  };
  onMounted(() => {
    if (id) {
      deleteRentRequest(id);
    }
  });
  return {
    deleteRentRequest,
  };
}
