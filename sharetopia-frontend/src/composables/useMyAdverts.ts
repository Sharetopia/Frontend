import { onMounted, ref } from "vue";
import { useNetwork } from "@/composables/useNetwork";
import { Factory } from "@/utils/factory";
import { ApiMyAdvertModel, MyAdvertModel } from "@/model/MyAdvertModel";

export function useMyAdverts() {
  const myAdverts = ref<MyAdvertModel[]>([]);
  const { apiCall } = useNetwork();
  const loadMyAdverts = async () => {
    const result: ApiMyAdvertModel[] = await apiCall<ApiMyAdvertModel[]>(
      `user/offeredProductsOverview`,
      "GET"
    );
    const myAdvertsModel = result.map((apiModel) =>
      Factory.createMyAdvertModelFrom(apiModel)
    );
    console.log(myAdvertsModel);
    myAdverts.value = myAdvertsModel;
  };

  const updateRentableDates = async (
    productId: string,
    startDate: Date,
    endDate: Date
  ) => {
    const apiRentableDateRange = {
      rentableDateRange: {
        fromDate: Factory.createDateForApi(startDate),
        toDate: Factory.createDateForApi(endDate),
      },
    };
    console.log(apiRentableDateRange);
    const result = await apiCall<void>(
      `products/${productId}`,
      "PATCH",
      apiRentableDateRange
    );
    console.log(result);
  };

  onMounted(() => {
    loadMyAdverts();
  });
  return {
    myAdverts,
    loadMyAdverts,
    updateRentableDates,
  };
}
