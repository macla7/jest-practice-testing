const calc = (() => {
  const add = (x, y) => x + y;
  const subtract = (a, b) => a - b;
  const multiply = (i, j) => i * j;
  const divide = (d, e) => d / e;

  return { add, subtract, multiply, divide };
})();

export default calc;
