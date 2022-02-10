import { DateRange } from "@/model/SearchModel";
import { ProductModel } from "@/model/ProductModel";

export type RentModel = {
  rentUserId: string;
  rentDuration: DateRange;
  rentId: string;
};

export type RentRequestModel = {
  id: string;
  range: DateRange;
  requestUserId: string;
  rentRequestReceiverUserId: string;
  requestedProductId: string;
  status: string;
};

export type ApiCreateRentRequestModel = {
  fromDate: string;
  toDate: string;
  requestedProductId: string;
};

export type MyRentModel = {
  rentRequest: RentRequestModel;
  product: ProductModel;
};

export type ApiMyRentModel = {
  rentRequest: {
    id: string;
    fromDate: string;
    toDate: string;
    requesterUserId: string;
    rentRequestReceiverUserId: string;
    requestedProductId: string;
    status: string;
  };
  product: ProductModel;
};
