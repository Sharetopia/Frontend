export type ApiRentRequest = {
  fromDate: string;
  toDate: string;
  requesterUserId: string;
  rentRequestReceiverUserId: string;
  requestedProductId: string;
};
