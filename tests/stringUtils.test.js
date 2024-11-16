// tests/stringUtils.test.js
const { capitalize } = require('../src/stringUtils');

test('capitalize should capitalize the first letter', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('capitalize should capitalize the first letter second case', () => {
  expect(capitalize('HELLO')).toBe('Hello');
});
