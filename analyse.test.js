import analyse from "./analyse";
const obj = analyse([1, 8, 3, 4, 2, 6]);

test("returns object of array attributes", () => {
  // trying different matchers out here is all
  expect(obj["average"]).toBeTruthy();
  expect(obj["min"]).toBeTruthy();
  expect(obj).toHaveProperty("max");
  expect(obj).toHaveProperty("length");
});

test("returns proper mean", () => {
  expect(obj.average).toBe(4);
});

test("returns proper min", () => {
  expect(obj.min).toBe(1);
});

test("returns proper mean", () => {
  expect(obj.max).toBe(8);
});

test("return length of arr", () => {
  expect(obj.length).toBe(6);
});
