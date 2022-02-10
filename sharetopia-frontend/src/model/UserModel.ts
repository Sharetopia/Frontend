export type UserModel = {
  id?: string;
  forename: string;
  surname: string;
  address: string;
  city: string;
  postalCode?: number;
  rating: number;
  profilePictureURL?: string;
};