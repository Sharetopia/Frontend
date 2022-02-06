import { onMounted, ref } from "vue";
import { dummyBike, dummyCar, ProductModel } from "@/model/ProductModel";
import { useNetwork } from "@/composables/useNetwork";
import { SearchModel } from "@/model/SearchModel";
import { ApiSearchModel, ApiSearchResultModel } from "@/model/ApiSearchModel";
import { ApiRentRequest } from "@/model/ApiRentRequest";
import { API } from "aws-amplify";
import { ApiProductModel } from "@/model/ApiProductModel";
import { Factory } from "@/utils/factory";

const dummyData = false;

export function useProduct(id: string | undefined, type: string) {
  const product = ref<ProductModel | undefined>(Object(undefined));
  const { apiCall } = useNetwork();
  const loadProductById = async (id: string) => {
    if (dummyData) {
      product.value = dummyBike;
    }
    const result: ApiProductModel = await apiCall<ApiProductModel>(
      `http://localhost:8080/api/v1/products/${id}`,
      type
    );
    product.value = Factory.createProductModelFromServer(result);
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

export function useProducts() {
  const products = ref<ProductModel[]>(Object([]));
  const { apiCall } = useNetwork();
  const loadProducts = async () => {
    if (dummyData) {
      products.value = [dummyBike, dummyCar, dummyBike];
    }
    const result: ApiProductModel[] = await apiCall<ApiProductModel[]>(
      `http://localhost:8080/api/v1/products`,
      "GET"
    );
    const productModels = result.map((apiModel) =>
      Factory.createProductModelFromServer(apiModel)
    );
    console.log(productModels);
    products.value = productModels;
  };

  const uploadProduct = async (productModel: ProductModel) => {
    await apiCall<void>(
      `http://localhost:8080/api/v1/products`,
      "POST",
      productModel
    );
  };

  onMounted(() => {
    loadProducts();
  });
  return {
    products,
    loadProducts,
    uploadProduct,
  };
}

export function useProductSearch(searchModel: SearchModel | undefined) {
  const products = ref<ProductModel[]>(Object([]));
  let searchIsEmpty: boolean | undefined = undefined;
  const { apiCall } = useNetwork();
  const loadProducts = async (search: SearchModel) => {
    const apiSearchModel: ApiSearchModel = {
      term: search.query,
      distance: search.radius,
      cityIdentifier: search.postalCode,
      startDate: search.timeRange.start,
      endDate: search.timeRange.end,
    };
    products.value = [
      {
        address: {
          street: "Ludwigsburger Straße 11",
          city: "Backnang",
          zip: "71522",
        },
        description: "Mein tolles neues Fahrrad hat Bremse, Hupe und Licht.",
        id: "61dacfe64a3a9f5a282de76b",
        location: [48.923069, 9.43038],
        price: 12.99,
        tags: ["Fahrrad", "Mobilität"],
        title: "Fahrrad",
        userId: "",
      },
    ];
    if (dummyData) {
      products.value = [dummyBike, dummyBike, dummyBike, dummyCar];
    }
    const result: ApiSearchResultModel = await apiCall<ApiSearchResultModel>(
      `http://localhost:8080/api/v1/products/findNearCity`,
      "GET",
      apiSearchModel
    );
    searchIsEmpty = result.empty;
    if (!searchIsEmpty) {
      const productModels = result.content.map((apiModel) =>
        Factory.createProductModelFromServer(apiModel)
      );
      products.value = productModels;
    }
  };
  onMounted(() => {
    if (searchModel) {
      loadProducts(searchModel);
    }
  });
  return {
    products,
    searchIsEmpty,
    loadProducts,
  };
}
