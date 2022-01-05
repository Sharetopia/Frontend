import {onMounted, ref} from "vue";
import {dummyBike, ProductModel} from "@/model/ProductModel";
import {useNetwork} from "@/composables/useNetwork";

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