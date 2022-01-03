export type ProductModel = {
  id: string;
  price: number;
  userId: string;
  title: string;
  description: string;
  tags: string[];
  address: AddressModel;
  location: number[];
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
  description: "Ich bin schön und sowas von",
  tags: ["cool", "grün"],
  address: {
    street: "Hintere Wiesen 13",
    city: "Auenwald",
    zip: "71549",
  },
  location: [47.7377921, 16.339096],
};

export const dummyCar: ProductModel = {
  id: "463744223",
  userId: "132412412",
  price: 12.23,
  title: "Auto",
  description: "Ich bin hässlich",
  tags: ["cool", "grün"],
  address: {
    street: "Hintere Wiesen 13",
    city: "Auenwald",
    zip: "71549",
  },
  location: [47.7377921, 15.339096],
};
