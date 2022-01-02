import { Auth } from "aws-amplify";

type Product = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  address: Address;
  location: number[][];
};

type Address = {
  street: string;
  city: string;
  zip: string;
};

const dummyBike: Product = {
  id: "4637453",
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

class ProductApi {
  public async findById(id: string): Promise<Product> {
    return dummyBike;

    const token = (await Auth.currentSession()).getAccessToken();
    const res = await fetch(`http://localhost:8080/api/v1/products/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.getJwtToken()}`,
      },
    });
    return res.json();
  }

  public async searchFor(
    query: string,
    postalCode: string,
    radius: number,
    startDate: string,
    endDate: string
  ): Promise<Product[]> {
    return [dummyBike, dummyBike];

    const token = (await Auth.currentSession()).getAccessToken();
    const res = await fetch(`http://localhost:8080/api/v1/search/${query}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.getJwtToken()}`,
      },
    });
    return res.json();
  }

  // AB HIER RATEN
}

export { Product, ProductApi };
