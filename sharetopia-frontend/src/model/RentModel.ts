import { DateRange } from "@/model/SearchModel";

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
