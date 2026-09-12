import {add, subtract, divide, multiply} from './calculator.js';

test('should add 2 + 2 to equal to 4', () => {
    expect(add(2, 2)).toBe(4);
});

test('should subtract 3 - 4 to equal to -1', () => {
    expect(subtract(3, 4)).toBe(-1);
})

test('should divide 3 / 4 to equal .75"', () => {
    expect(divide(3, 4)).toBe(.75);
})

test('should multiply 4 * 4 to equal 16', () => {
    expect(multiply(4, 4)).toBe(16);
})
