export type ApiSearchModel = {
  term: string;
  distance: number;
  cityIdentifier: string;
  startDate?: Date;
  endDate?: Date;
};
