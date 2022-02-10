import { useNetwork } from "@/composables/useNetwork";
import {onMounted, ref} from "vue";
import {ApiCreateRentRequestModel, ApiMyRentModel, MyRentModel} from "@/model/RentModel";
import {Factory} from "@/utils/factory";
import {dummyBike, dummyCar, ProductModel} from "@/model/ProductModel";
import {ApiProductModel} from "@/model/ApiProductModel";

export function useRentRequest() {
  const { apiCall } = useNetwork();
  const createRentRequest = async (startDate: Date, endDate: Date, productId: string) => {
    const requestModel: ApiCreateRentRequestModel = {
      fromDate: Factory.createDateForApi(startDate),
      toDate: Factory.createDateForApi(endDate),
      requestedProductId: productId,
    };
    console.log(requestModel);
    await apiCall<void>(
      "http://localhost:8080/api/v1/rentRequest",
      "POST",
        requestModel
    );
  };
  return {
    createRentRequest,
  };
}

export function useMyRents() {
  const myRents = ref<MyRentModel[]>(Object([]));
  const { apiCall } = useNetwork();
  const loadMyRents = async () => {
    const result: ApiMyRentModel[] = await apiCall<ApiMyRentModel[]>(
        `http://localhost:8080/api/v1/user/requestedProductsOverview`,
        "GET"
    );
    const rentsModel = result.map((apiModel) =>
        Factory.createMyRentModelFrom(apiModel)
    );
    console.log(rentsModel);
    myRents.value = rentsModel;
  };

  onMounted(() => {
    loadMyRents();
  });

  return {
    myRents,
    loadMyRents
  }
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

export function useRentAccept(
  id: string | undefined,
  rentRequestId: string | undefined,
  isAccepted: boolean | undefined
) {
  const { apiCall } = useNetwork();
  const updateRentRequest = async (
    id: string,
    rentRequestId: string,
    isAccepted: boolean
  ) => {
    await apiCall<void>(
      `http://localhost:8080/api/v1/products/${id}/rent/${rentRequestId}?isAccepted=${isAccepted}`,
      "POST"
    );
  };
  onMounted(() => {
    if (id && rentRequestId && isAccepted !== undefined) {
      updateRentRequest(id, rentRequestId, isAccepted);
    }
  });
  return {
    updateRentRequest,
  };
}
