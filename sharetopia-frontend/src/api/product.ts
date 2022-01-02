import { Auth } from "aws-amplify";
import {ProductModel} from "@/model/ProductModel";

const dummyBike: ProductModel = {
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
  public static async findById(id: string): Promise<ProductModel> {
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

  public static async searchFor(productModel: ProductModel): Promise<ProductModel[]> {
    return [];

    const token = (await Auth.currentSession()).getAccessToken();
    const res = await fetch(`http://localhost:8080/api/v1/search/test`, {
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

export { ProductApi };
