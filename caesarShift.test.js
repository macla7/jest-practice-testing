import caesarShift from "./caesarShift";

test("shifts letters by x", () => {
  expect(caesarShift("abcd", 4)).toMatch(/efgh/);
});

test("shifts 'back' 52", () => {
  expect(caesarShift("abcd", -50)).toMatch(/cdef/);
});

test("shifts 28 foward", () => {
  expect(caesarShift("aBcD", 28)).toMatch(/cDeF/);
});

test("across a/z link", () => {
  expect(caesarShift("aBcD", -2)).toMatch(/yZaB/);
});
