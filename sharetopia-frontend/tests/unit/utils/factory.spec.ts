import { expect } from "chai";
import { Factory } from "@/utils/factory.ts";

describe("Factory.ts", () => {
  it("create Date string for server from JS Date object", () => {
    // The month is created by index so 0 is january and 10 is november.
    const date = new Date(2022, 10, 12, 12, 0, 0, 0);
    const expectedOutput = "2022-11-12";
    const output = Factory.createDateForApi(date);
    expect(output).to.equals(expectedOutput, "The date format is not correct.");
  });
});
