import { onMounted, ref } from "vue";
import { useNetwork } from "@/composables/useNetwork";
import { EmptyUserModel, UserModel} from "@/model/UserModel";

export function useUser() {
  const currentUser = ref<UserModel>(Object());
  const { apiCall } = useNetwork();
  const getCurrentUser = async () => {
    currentUser.value = await apiCall<UserModel>(
      `user`,
      "GET"
    ).then(
      (result) => {
        return result;
      },
      () => {
        console.log("error")
        return EmptyUserModel;
      }
    );
  };

  const createUser = async (model: UserModel) => {
    await apiCall<void>(`user`, "POST", model);
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
