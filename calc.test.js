import calc from "./calc";

test("adds together", () => {
  expect(calc.add(2, 3)).toBe(5);
});

test("subtracts b from a", () => {
  expect(calc.subtract(5, 2)).toBe(3);
});

test("multiplies", () => {
  expect(calc.multiply(3, 5)).toBe(15);
});

test("divides", () => {
  expect(calc.divide(20, 4)).toBe(5);
});
