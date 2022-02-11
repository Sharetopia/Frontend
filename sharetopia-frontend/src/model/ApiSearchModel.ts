import { ApiProductModel } from "@/model/ApiProductModel";

export type ApiSearchModel = {
  term: string;
  distance: number;
  cityIdentifier: string;
  startDate?: string;
  endDate?: string;
};

export type ApiSearchResultModel = {
  content: ApiProductModel[];
  empty: boolean;
};
