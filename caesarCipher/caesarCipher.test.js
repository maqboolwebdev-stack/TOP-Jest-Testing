import {caesarCipher} from './caesarCipher.js';

test('should xyz to abc', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('should HeLLo to khOOr', () => {
    expect(caesarCipher('heLLo', 3)).toBe('khOOr');
});

test('should Hello, World! to Khoor, Zruog!', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
