import { ApiRentRequest } from "@/model/ApiRentRequest";
import { useNetwork } from "@/composables/useNetwork";
import { onMounted } from "vue";

export function useRentRequest() {
  const { apiCall } = useNetwork();
  const createRentRequest = async (rentRequest: ApiRentRequest) => {
    console.log(rentRequest);
    await apiCall<void>(
      "http://localhost:8080/api/v1/rentRequest",
      "POST",
      rentRequest
    );
  };
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
