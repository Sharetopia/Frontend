import { onMounted, ref } from "vue";
import { useNetwork } from "@/composables/useNetwork";
import { Factory } from "@/utils/factory";
import { ApiUserModel, UserModel } from "@/model/UserModel";

export function useUser() {
  const currentUser = ref<UserModel>(Object());
  const { apiCall } = useNetwork();
  const getCurrentUser = async () => {
    const result: ApiUserModel = await apiCall<ApiUserModel>(
      `http://localhost:8080/api/v1/user`,
      "GET"
    ).then(
      (result) => {
        return result;
      },
      (error) => {
        return {
          profilePictureURL: "",
          name: "",
          postalCode: "",
        };
      }
    );
    currentUser.value = Factory.createUserModelFrom(result);
  };

  const createUser = async (
    name: string,
    profilePictureURL: string,
    postalCode: string
  ) => {
    const ApiUserModel: ApiUserModel = {
      profilePictureURL: profilePictureURL,
      name: name,
      postalCode: postalCode,
    };
    const result = await apiCall<void>(
      `http://localhost:8080/api/v1/user`,
      "POST",
      ApiUserModel
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
