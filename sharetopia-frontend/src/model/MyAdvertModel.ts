import { DateRange } from "@/model/SearchModel";
import { AddressModel, ProductModel } from "@/model/ProductModel";
import { RentModel, RentRequestModel } from "@/model/RentModel";

export type MyAdvertModel = {
  productModel: ProductModel;
  rentableDateRange: DateRange;
  rents: RentModel[];
  rentRequests: RentRequestModel[];
};

export type ApiRentModel = {
  renterUserId: string;
  rentDuration: {
    fromDate: string;
    toDate: string;
  };
  rentId: string;
};

export type ApiMyAdvertModel = {
  id: string;
  ownerOfProductUserId: string;
  title: string;
  description: string;
  tags: string[];
  price: number;
  address: {
    street: string;
    city: string;
    zip: string;
  };
  location: number[];
  rentableDateRange: {
    fromDate: string;
    toDate: string;
  };
  rents: ApiRentModel[];
  rentRequests: [
    {
      id: string;
      fromDate: string;
      toDate: string;
      requesterUserId: string;
      rentRequestReceiverUserId: string;
      requestedProductId: string;
      status: string;
    }
  ];
};
