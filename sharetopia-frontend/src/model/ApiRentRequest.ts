export type ApiRentRequest = {
  fromDate: Date;
  toDate: Date;
  requesterUserId: string;
  rentRequestReceiverUserId: string;
  requestedProductId: string;
};
