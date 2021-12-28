import { Auth } from "aws-amplify";

type Product = {
  title: string;
  description: string;
  tags: string[];
};

class ProductApi {
  public async findById(id: string): Promise<Product> {
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
}

export { Product, ProductApi };
