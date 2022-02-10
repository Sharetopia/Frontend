import { onMounted, ref } from "vue";
import { useNetwork } from "@/composables/useNetwork";
import { Factory } from "@/utils/factory";
import { ApiUserModel, UserModel } from "@/model/UserModel";

export function useUser() {
  const currentUser = ref<UserModel>(Object());
  const { apiCall } = useNetwork();
  const getCurrentUser = async () => {
    const result: UserModel = await apiCall<UserModel>(
      `http://localhost:8080/api/v1/user`,
      "GET"
    ).then(
      (result) => {
        return result;
      },
      (error) => {
        return {
          forename: "",
          surname: "",
          address: "",
          city: "",
          postalCode: "",
          rating: "",
          profilePictureURL: "",
        };
      }
    );
    currentUser.value = result;
  };

  const createUser = async (model: UserModel) => {
    const result = await apiCall<void>(
      `http://localhost:8080/api/v1/user`,
      "POST",
      model
    );
  };

  onMounted(() => {
    getCurrentUser();
  });

  return {
    currentUser,
    getCurrentUser,
    createUser,
  };
}
