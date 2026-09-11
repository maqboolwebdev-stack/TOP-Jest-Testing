import { capitalize } from './capitalize.js';

test('capitalize the string', () => {
  expect(capitalize('ali')).toBe('Ali');
});

test('leaves an already-capitalize word unchanged', () => {
  expect(capitalize('Hello')).toBe('Hello');
});

test('capitalizes only the first character, leaving the rest untouched', () => {
  expect(capitalize('javaScript')).toBe('JavaScript');
});

test("handles a single character string", () => {
    expect(capitalize("a")).toBe("A");
});

test("handles an empty string", () => {
    expect(capitalize("")).toBe("");
});
