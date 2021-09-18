import reverseString from "./reverseString";

test("reverses string", () => {
  expect(reverseString("abCdE")).toMatch(/EdCba/);
});
