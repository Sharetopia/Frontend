import { onMounted, ref } from "vue";
import { useNetwork } from "@/composables/useNetwork";
import { Factory } from "@/utils/factory";
import {ApiMyAdvertModel, MyAdvertModel} from "@/model/MyAdvertModel";

export function useMyAdverts() {
  const myAdverts = ref<MyAdvertModel[]>([]);
  const { apiCall } = useNetwork();
  const loadMyAdverts = async () => {
    const result: ApiMyAdvertModel[] = await apiCall<ApiMyAdvertModel[]>(
      `http://localhost:8080/api/v1/user/offeredProductsOverview`,
      "GET"
    );
    const myAdvertsModel = result.map((apiModel) =>
      Factory.createMyAdvertModelFrom(apiModel)
    );
    console.log(myAdvertsModel);
    myAdverts.value = myAdvertsModel;
  };

  onMounted(() => {
    loadMyAdverts();
  });
  return {
    myAdverts,
    loadMyAdverts,
  };
}

