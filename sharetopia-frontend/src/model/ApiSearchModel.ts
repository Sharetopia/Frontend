import { ApiProductModel } from "@/model/ApiProductModel";

export type ApiSearchModel = {
  term: string;
  distance: number;
  cityIdentifier: string;
  startDate?: Date;
  endDate?: Date;
};

export type ApiSearchResultModel = {
  content: ApiProductModel[];
  empty: boolean;
};
