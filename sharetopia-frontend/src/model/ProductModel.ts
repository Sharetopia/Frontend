export type ProductModel = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  address: AddressModel;
  location: number[][];
};

export type AddressModel = {
  street: string;
  city: string;
  zip: string;
};