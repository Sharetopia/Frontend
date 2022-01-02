import { SearchModel } from "@/model/SearchModel";
import { LocationQuery, LocationQueryValue } from "vue-router";

class Factory {
  public static createSearchModel(
    locationQuery: LocationQuery
  ): SearchModel | null {
    const query = locationQuery["query"];
    const postalCode = locationQuery["postalCode"];
    const radius = locationQuery["radius"];
    const start = locationQuery["start"];
    const end = locationQuery["end"];

    if (
      typeof query !== "string" ||
      typeof postalCode !== "string" ||
      typeof radius !== "string" ||
      typeof start !== "string" ||
      typeof end !== "string"
    ) {
      return null;
    }

    return {
      postalCode: postalCode,
      query: query,
      radius: Number(radius),
      timeRange: {
        start: new Date(start),
        end: new Date(end),
      },
    };
  }
}

export { Factory };
