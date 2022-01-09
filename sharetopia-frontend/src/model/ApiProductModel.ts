export type ApiProductModel = {
  address: {
    street: string;
    city: string;
    zip: string;
  };
  description: string;
  id: string;
  location: number[];
  ownerOfProductUserId: string;
  rentableDateRange: ApiDateRange;
  rents: [
    {
      rentDuration: ApiDateRange;
      rentId: string;
      rentUserId: string;
    }
  ];
  tags: string[];
  title: string;
};

export type ApiDateRange = {
  fromDate: string;
  toDate: string;
};
