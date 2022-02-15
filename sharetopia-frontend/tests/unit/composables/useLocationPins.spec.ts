import { useLocationPins } from "@/composables/useLocationPins";
import { ProductModel } from "@/model/ProductModel";

describe("useLocationPins.ts", () => {
  it("should create Location Pins from productModels", () => {
    const { locationPins, createLocationPins } = useLocationPins();
    const expectedLocationPins = [
      {
        name: "Fahrrad",
        // The coordinates have to be switched
        coordinates: [16.339096, 47.7377921],
        productId: "4637453",
      },
      {
        name: "Auto",
        // The coordinates have to be switched
        coordinates: [15.339096, 47.7377921],
        productId: "463744223",
      },
    ];
    createLocationPins([dummyBike, dummyCar]);

    expect(locationPins.value).toMatchObject(
      expectedLocationPins);
  });

  it("should use as center location pin the first product, because this would be the most suitable", () => {
    const { centerPin, createLocationPins } = useLocationPins();
    const expectedLocationPins = [
      {
        name: "Fahrrad",
        coordinates: [16.339096, 47.7377921],
        productId: "4637453",
      },
      {
        name: "Auto",
        coordinates: [15.339096, 47.7377921],
        productId: "463744223",
      },
    ];
    createLocationPins([dummyBike, dummyCar]);

    expect(centerPin.value).toMatchObject(
      expectedLocationPins[0]);
  });
});

const dummyBike: ProductModel = {
  id: "4637453",
  ownerOfProductUserId: "132412412",
  price: 123.23,
  title: "Fahrrad",
  description: "Ich bin schön und sowas von",
  tags: ["cool", "grün"],
  address: {
    street: "Hintere Wiesen 13",
    city: "Auenwald",
    zip: "71549",
  },
  location: [47.7377921, 16.339096],
  bookingDates: {
    available: {
      start: new Date("2021-12-01"),
      end: new Date("2022-02-01"),
    },
    unavailable: [
      {
        start: new Date("2021-12-05"),
        end: new Date("2021-12-15"),
      },
      {
        start: new Date("2022-01-05"),
        end: new Date("2022-01-10"),
      },
    ],
  },
};

const dummyCar: ProductModel = {
  id: "463744223",
  ownerOfProductUserId: "132412412",
  price: 12.23,
  title: "Auto",
  description: "Ich bin hässlich",
  tags: ["cool", "grün"],
  address: {
    street: "Hintere Wiesen 13",
    city: "Auenwald",
    zip: "71549",
  },
  location: [47.7377921, 15.339096],
  bookingDates: {
    available: {
      start: new Date("2021-12-01"),
      end: new Date("2022-02-01"),
    },
    unavailable: [
      {
        start: new Date("2021-12-05"),
        end: new Date("2021-12-15"),
      },
      {
        start: new Date("2022-01-05"),
        end: new Date("2022-01-10"),
      },
    ],
  },
};
