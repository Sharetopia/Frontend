import { DateRange, SearchModel } from "@/model/SearchModel";
import { LocationQuery } from "vue-router";
import { ApiDateRange, ApiProductModel } from "@/model/ApiProductModel";
import { BookingDatesModel, ProductModel } from "@/model/ProductModel";

class Factory {
  public static createSearchModel(
    locationQuery: LocationQuery
  ): SearchModel | undefined {
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
      return undefined;
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

  public static createProductModelFromServer(
    apiModel: ApiProductModel
  ): ProductModel {
    let bookingDates: BookingDatesModel | undefined;
    if (apiModel.rentableDateRange && apiModel.rents) {
      bookingDates = {
        available: Factory.createDateRangeFrom(apiModel.rentableDateRange),
        unavailable: apiModel.rents.map((rent) => {
          return Factory.createDateRangeFrom(rent.rentDuration);
        }),
      };
    }

    return {
      address: apiModel.address,
      bookingDates: bookingDates,
      description: apiModel.description,
      id: apiModel.id,
      location: apiModel.location,
      price: 12.99,
      tags: apiModel.tags,
      title: apiModel.title,
      userId: apiModel.ownerOfProductUserId,
    };
  }

  public static createDateRangeFrom(apiDateRange: ApiDateRange): DateRange {
    return {
      start: new Date(apiDateRange.fromDate),
      end: new Date(apiDateRange.toDate),
    };
  }

  public static createDateForApi(date: Date): string {
    return date.toISOString().split("T", 1)[0];
  }
}

export { Factory };
