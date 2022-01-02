export type ProductModel = {
  id: string;
  price: number;
  userId: string;
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

export const dummyBike: ProductModel = {
  id: "4637453",
  userId: "132412412",
  price: 123.23,
  title: "Fahrrad",
  description: "Ich bin schön",
  tags: ["cool", "grün"],
  address: {
    street: "Hintere Wiesen 13",
    city: "Auenwald",
    zip: "71549",
  },
  location: [
    [0, 47.7377921],
    [1, 16.339096],
  ],
};