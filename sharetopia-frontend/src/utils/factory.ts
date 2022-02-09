import { DateRange, SearchModel } from "@/model/SearchModel";
import { LocationQuery } from "vue-router";
import { ApiDateRange, ApiProductModel } from "@/model/ApiProductModel";
import { BookingDatesModel, ProductModel } from "@/model/ProductModel";
import {
  ApiMyAdvertModel,
  ApiRentModel,
  MyAdvertModel,
} from "@/model/MyAdvertModel";

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

  public static createMyAdvertModelFrom(apiMyAdvertModel: {
    address: { zip: string; city: string; street: string };
    price: number;
    description: string;
    ownerOfProductUserId: string;
    location: number[];
    id: string;
    title: string;
    rents: {
      renterUserId: string;
      rentDuration: { fromDate: string; toDate: string };
      rentId: string;
    }[];
    rentableDateRange: { fromDate: string; toDate: string };
    rentRequests: {
      fromDate: string;
      requestedProductId: string;
      rentRequestReceiverUserId: string;
      requesterUserId: string;
      toDate: string;
      id: string;
      status: string;
    }[];
    tags: string[];
  }): MyAdvertModel {
    return {
      productModel: {
        id: apiMyAdvertModel.id,
        userId: apiMyAdvertModel.ownerOfProductUserId,
        title: apiMyAdvertModel.title,
        description: apiMyAdvertModel.description,
        tags: apiMyAdvertModel.tags,
        price: apiMyAdvertModel.price,
        address: apiMyAdvertModel.address,
        location: apiMyAdvertModel.location,
      },
      rentableDateRange: Factory.createDateRangeFrom(
        apiMyAdvertModel.rentableDateRange
      ),
      rents: apiMyAdvertModel.rents.map((apiRentModel) => {
        return {
          rentUserId: apiRentModel.renterUserId,
          rentDuration: Factory.createDateRangeFrom(apiRentModel.rentDuration),
          rentId: apiRentModel.rentId,
        };
      }),
      rentRequests: apiMyAdvertModel.rentRequests.map((apiRentRequestModel) => {
        return {
          id: apiRentRequestModel.id,
          range: Factory.createDateRangeFrom(apiRentRequestModel),
          requestUserId: apiRentRequestModel.requesterUserId,
          rentRequestReceiverUserId:
            apiRentRequestModel.rentRequestReceiverUserId,
          requestedProductId: apiRentRequestModel.requestedProductId,
          status: apiRentRequestModel.status,
        };
      }),
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
