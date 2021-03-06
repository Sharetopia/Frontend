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
    expect(searchModel).toMatchObject(expectedSearchModel);
  });

  it("should not create a searchModel from wrong locationQuery", () => {
    const locationQuery = { query: "Fahrrad", radius: "10" };
    const { searchModel } = useRouteQueries(locationQuery);
    expect(searchModel).toBeUndefined();
  });

  it("should extract the productId from locationQuery", () => {
    const locationQuery = { id: "123456" };
    const { productId } = useRouteQueries(locationQuery);
    const expectedValue = "123456";
    expect(productId).toMatch(expectedValue);
  });
});
