import {onMounted, ref} from "vue";
import {dummyBike, dummyCar, ProductModel} from "@/model/ProductModel";
import {useNetwork} from "@/composables/useNetwork";
import {SearchModel} from "@/model/SearchModel";

export function useProduct(id: string | undefined) {
    const product = ref<ProductModel | undefined>(Object(undefined));
    const { apiCall } = useNetwork()
    const loadProductById = async (id: string) => {
        product.value = dummyBike;
        const result: ProductModel = await apiCall<ProductModel>(
            `http://localhost:8080/api/v1/products/${id}`
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

export function useProducts() {
    const products = ref<ProductModel[]>(Object([]));
    const { apiCall } = useNetwork()
    const loadProducts = async () => {
        products.value = [dummyBike, dummyBike, dummyBike, dummyCar];
        const result: ProductModel[] = await apiCall<ProductModel[]>(
            `http://localhost:8080/api/v1/products/}`
        );
        products.value = result;
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
    const { apiCall } = useNetwork()
    const loadProducts = async (searchModel: SearchModel) => {
        products.value = [dummyBike, dummyBike, dummyBike, dummyCar];
        const result: ProductModel[] = await apiCall<ProductModel[]>(
            `http://localhost:8080/api/v1/products/${searchModel.query}`
        );
        products.value = result;
    };
    onMounted(() => {
        if (searchModel) {
            loadProducts(searchModel);
        }
    });
    return {
        products,
        loadProducts,
    };
}