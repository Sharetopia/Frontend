export type UserModel = {
  id?: string;
  forename: string;
  surname: string;
  address: string;
  city: string;
  postalCode?: string;
  rating: string;
  profilePictureURL?: string;
};

export const EmptyUserModel: UserModel = {
  forename: "",
  surname: "",
  address: "",
  city: "",
  postalCode: "",
  rating: "",
  profilePictureURL: "",
};
