import { Auth } from "aws-amplify";
import {ProductModel, dummyBike} from "@/model/ProductModel";
import {SearchModel} from "@/model/SearchModel";

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

  public static async searchFor(searchModel: SearchModel): Promise<ProductModel[]> {
    return [dummyBike, dummyBike, dummyBike,dummyBike,dummyBike,dummyBike,dummyBike,dummyBike];

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
