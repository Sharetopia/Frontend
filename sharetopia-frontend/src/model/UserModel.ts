export type UserModel = {
  id: string;
  forename: string;
  surname: string;
  address: string;
  city: string;
  postalCode?: number;
  rating: number;
  profilePictureURL?: string;
};

export type ApiUserModel = {
  id?: string;
  profilePictureURL: string;
  name: string;
  postalCode: string;
};
