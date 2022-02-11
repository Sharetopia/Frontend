import { expect } from "chai";
import { useRouteQueries } from "@/composables/useRouteQueries";

describe("useRouteQueries.ts", () => {
  it("should create a searchModel from locationQuery", () => {
    const locationQuery = {
      query: "Fahrrad",
      radius: "10",
      postalCode: "71549",
      start: "Fri Feb 11 2022",
      end: "Fri Feb 11 2022",
    };
    const { searchModel } = useRouteQueries(locationQuery);
    const expectedSearchModel = {
      postalCode: "71549",
      query: "Fahrrad",
      radius: 10,
      timeRange: {
        start: new Date(2022, 1, 11),
        end: new Date(2022, 1, 11),
      },
    };
    expect(searchModel).to.deep.equals(
      expectedSearchModel,
      "The search model does not match."
    );
  });

  it("should not create a searchModel from wrong locationQuery", () => {
    const locationQuery = { query: "Fahrrad", radius: "10" };
    const { searchModel } = useRouteQueries(locationQuery);
    expect(searchModel).to.deep.equals(
      undefined,
      "The search is not undefined"
    );
  });

  it("should extract the productId from locationQuery", () => {
    const locationQuery = { id: "123456" };
    const { productId } = useRouteQueries(locationQuery);
    const expectedValue = "123456";
    expect(productId).to.deep.equals(
      expectedValue,
      "The product id does not match."
    );
  });
});
