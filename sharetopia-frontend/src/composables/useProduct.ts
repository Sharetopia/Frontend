import { onMounted, ref } from "vue";
import { dummyBike, dummyCar, ProductModel } from "@/model/ProductModel";
import { useNetwork } from "@/composables/useNetwork";
import { SearchModel } from "@/model/SearchModel";
import { ApiSearchModel, ApiSearchResultModel } from "@/model/ApiSearchModel";
import { ApiProductModel } from "@/model/ApiProductModel";
import { Factory } from "@/utils/factory";

const dummyData = false;

export function useProduct(id: string | undefined) {
  const product = ref<ProductModel | undefined>(Object(undefined));
  const { apiCall } = useNetwork();
  const loadProductById = async (id: string) => {
    if (dummyData) {
      product.value = dummyBike;
    }
    const result: ApiProductModel = await apiCall<ApiProductModel>(
      `products/${id}`,
      "GET"
    );
    product.value = Factory.createProductModelFromServer(result);
  };

  const uploadProduct = async (productModel: ProductModel) => {
    const apiModel = {
      title: productModel.title,
      description: productModel.description,
      tags: [productModel.tags],
      price: productModel.price,
      address: productModel.address,
      rentableDateRange: {
        fromDate: "2022-02-09",
        toDate: "2022-02-09",
      },
      rents: [],
    };
    const result = await apiCall<void>(`products`, "POST", apiModel);

    console.log(result);
  };

  const createEmptyProductModel = (): ProductModel => {
    return {
      id: "",
      price: 0,
      ownerOfProductUserId: "",
      title: "",
      description: "",
      tags: [],
      address: {
        street: "",
        city: "",
        zip: "",
      },
      location: [],
      bookingDates: undefined,
    };
  };

  onMounted(() => {
    if (id) {
      loadProductById(id);
    }
  });

  return {
    product,
    loadProductById,
    uploadProduct,
    createEmptyProductModel,
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
      `products`,
      "GET"
    );
    const productModels = result.map((apiModel) =>
      Factory.createProductModelFromServer(apiModel)
    );
    console.log(productModels);
    products.value = productModels;
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
  let searchIsEmpty: boolean | undefined = undefined;
  const { apiCall } = useNetwork();
  const loadProducts = async (search: SearchModel) => {
    const apiSearchModel: ApiSearchModel = {
      term: search.query,
      distance: search.radius,
      cityIdentifier: search.postalCode,
      startDate: Factory.createDateForApi(search.timeRange.start as Date),
      endDate: Factory.createDateForApi(search.timeRange.end as Date),
    };

    const result: ApiSearchResultModel = await apiCall<ApiSearchResultModel>(
      `products/findNearCity`,
      "GET",
      apiSearchModel
    );
    console.log("searched with model", apiSearchModel);

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
      console.log("search");
    }
  });
  return {
    products,
    searchIsEmpty,
    loadProducts,
  };
}
