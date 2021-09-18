import capitalize from "./capitalize";

test("capitalizes string", () => {
  expect(capitalize("abcd")).toMatch(/Abcd/);
});
