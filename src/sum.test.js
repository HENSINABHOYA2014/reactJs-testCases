import sum from './sum';

test('testing for sum function', () => {
  let a=10;
  let b=20;
  let output=30
  expect(sum(a, b)).toBe(output);
});

test('testing for sum function 2', () => {
  let a=110;
  let b=220;
  let output=330
  expect(sum(a, b)).toBe(output);
});