import { DateRange } from "@/model/SearchModel";

export type RentRequestModel = {
  renterId: string;
  timeRange: DateRange;
  accepted?: boolean;
};
