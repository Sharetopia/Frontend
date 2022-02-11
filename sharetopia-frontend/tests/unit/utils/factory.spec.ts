import { expect } from "chai";
import { Factory } from "@/utils/factory.ts";
import { MyAdvertModel } from "@/model/MyAdvertModel";
import { MyRentModel } from "@/model/RentModel";

describe("Factory.ts", () => {
  it("should create a Date string for api from JS Date object", () => {
    // The month is created by index so 0 is january and 10 is november.
    const date = new Date(2022, 10, 12, 12, 0, 0, 0);
    const expectedOutput = "2022-11-12";
    const output = Factory.createDateForApi(date);
    expect(output).to.equals(expectedOutput, "The date format is not correct.");
  });

  it("should create MyAdvertModel from ApiMyAdvertModel object", () => {
    const apiModel = apiMyAdvertModel;
    const expectedOutput = expectedMyAdvertModel;
    const output = Factory.createMyAdvertModelFrom(apiModel);
    expect(output).to.deep.equals(
      expectedOutput,
      "The my rent model is not correct"
    );
  });

  it("should create MyRentModel from ApiMyRentModel object", () => {
    const apiModel = apiMyRentModel;
    const expectedOutput = expectedMyRentModel;
    const output = Factory.createMyRentModelFrom(apiModel);
    expect(output).to.deep.equals(
      expectedOutput,
      "The my rent model is not correct"
    );
  });
});

const expectedMyRentModel: MyRentModel = {
  product: {
    id: "string",
    price: 0,
    ownerOfProductUserId: "string",
    title: "string",
    description: "string",
    tags: ["string"],
    address: {
      street: "string",
      city: "string",
      zip: "string",
    },
    location: [9.43038, 48.923069],
  },
  rentRequest: {
    id: "string",
    range: {
      start: new Date(2022, 1, 9, 1, 0, 0, 0),
      end: new Date(2022, 1, 9, 1, 0, 0, 0),
    },
    requestUserId: "string",
    rentRequestReceiverUserId: "string",
    requestedProductId: "string",
    status: "string",
  },
};

const apiMyRentModel = {
  rentRequest: {
    id: "string",
    fromDate: "2022-02-09",
    toDate: "2022-02-09",
    requesterUserId: "string",
    rentRequestReceiverUserId: "string",
    requestedProductId: "string",
    status: "string",
  },
  product: {
    id: "string",
    ownerOfProductUserId: "string",
    title: "string",
    description: "string",
    tags: ["string"],
    price: 0,
    address: {
      street: "string",
      city: "string",
      zip: "string",
    },
    location: [9.43038, 48.923069],
  },
};

const apiMyAdvertModel = {
  id: "string",
  ownerOfProductUserId: "string",
  title: "string",
  description: "string",
  tags: ["string"],
  price: 2,
  address: {
    street: "string",
    city: "string",
    zip: "string",
  },
  location: [9.43038, 48.923069],
  rentableDateRange: {
    fromDate: "2022-02-09",
    toDate: "2022-02-09",
  },
  rents: [
    {
      renterUserId: "string",
      rentDuration: {
        fromDate: "2022-02-09",
        toDate: "2022-02-09",
      },
      rentId: "string",
    },
  ],
  rentRequests: [
    {
      id: "string",
      fromDate: "2022-02-09",
      toDate: "2022-02-09",
      requesterUserId: "string",
      rentRequestReceiverUserId: "string",
      requestedProductId: "string",
      status: "string",
    },
  ],
};

const expectedMyAdvertModel: MyAdvertModel = {
  productModel: {
    address: apiMyAdvertModel.address,
    description: apiMyAdvertModel.description,
    id: apiMyAdvertModel.id,
    location: apiMyAdvertModel.location,
    ownerOfProductUserId: apiMyAdvertModel.ownerOfProductUserId,
    price: apiMyAdvertModel.price,
    tags: apiMyAdvertModel.tags,
    title: apiMyAdvertModel.title,
  },
  rentRequests: [
    {
      id: apiMyAdvertModel.rentRequests[0].id,
      range: {
        start: new Date(2022, 1, 9, 1, 0, 0, 0),
        end: new Date(2022, 1, 9, 1, 0, 0, 0),
      },
      requestUserId: apiMyAdvertModel.rentRequests[0].requesterUserId,
      rentRequestReceiverUserId:
        apiMyAdvertModel.rentRequests[0].rentRequestReceiverUserId,
      requestedProductId: apiMyAdvertModel.rentRequests[0].requestedProductId,
      status: apiMyAdvertModel.rentRequests[0].status,
    },
  ],
  rentableDateRange: {
    start: new Date(2022, 1, 9, 1, 0, 0, 0),
    end: new Date(2022, 1, 9, 1, 0, 0, 0),
  },
  rents: [
    {
      rentUserId: apiMyAdvertModel.rents[0].renterUserId,
      rentDuration: {
        start: new Date(2022, 1, 9, 1, 0, 0, 0),
        end: new Date(2022, 1, 9, 1, 0, 0, 0),
      },
      rentId: apiMyAdvertModel.rents[0].rentId,
    },
  ],
};
