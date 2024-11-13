const {
  multiplication,
  concatOdds,
  cartCheckout,
  nextPage,
} = require("./index");

test("Multiply 5 and 6 equals to 30", () => {
  expect(multiplication(5, 6)).toBe(30);
});

test("Multiply 6 and 6 equals to 36", () => {
  expect(multiplication(6, 6)).toBe(36);
});

test("Multiply -10 and 3 equals to -30", () => {
  expect(multiplication(-10, 3)).toBe(-30);
});

test("Concatenate these two arrays", () => {
  expect(concatOdds([1, 2, 7, 7, 4], [5, 6, 3, 8])).toStrictEqual([1, 3, 5, 7]);
});

test("Concatenate these two arrays", () => {
  expect(concatOdds([1, 2, 3, 4], [5, 6, 7, 8])).toStrictEqual([1, 3, 5, 7]);
});

test("Concatenate these two arrays", () => {
  expect(concatOdds([1, 2, 3, 4], [5, 6, 7, 8, 9])).toStrictEqual([1, 3, 5, 7, 9]);
});

test("if cart is empty, display message", () => {
  expect(cartCheckout(true)).toBe(true);
});

test("if cart is full, display message", () => {
  expect(cartCheckout(false)).toBe(true)
});

test("if yes, display message for sign-in page", () => {
  expect(nextPage(true)).toBe(true);
});
