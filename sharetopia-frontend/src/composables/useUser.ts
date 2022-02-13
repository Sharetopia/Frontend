import { onMounted, ref } from "vue";
import { useNetwork } from "@/composables/useNetwork";
import { Factory } from "@/utils/factory";
import { UserModel } from "@/model/UserModel";

export function useUser() {
  const currentUser = ref<UserModel>(Object());
  const { apiCall } = useNetwork();
  const getCurrentUser = async () => {
    const result: UserModel = await apiCall<UserModel>(
      `user`,
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
      `user`,
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

export function useUserById() {
  const user = ref<UserModel>(Object());
  const { apiCall } = useNetwork();

  const getUserById = async (id: string) => {
    const result: UserModel = await apiCall<UserModel>(
      `user/${id}`,
      "GET"
    ).then(
      (result) => {
        console.log(result);
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
    user.value = result;
  };

  return {
    user,
    getUserById,
  };
}
