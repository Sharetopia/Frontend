export type SearchModel = {
  query: string;
  postalCode: string;
  radius: number;
  timeRange: DateRange;
};

export type DateRange = {
  start?: Date;
  end?: Date;
};
