import { add } from "../src/add.js";

describe("add", () => {
  it("adds two numbers", () => {
    expect(add(1, 2)).toBe(3);
  });
  it("adds two negative numbers", () => {
    expect(add(-1, -2)).toBe(-3);
  });
  it("adds a positive and a negative number", () => {
    expect(add(1, -2)).toBe(-1);
  });
});
