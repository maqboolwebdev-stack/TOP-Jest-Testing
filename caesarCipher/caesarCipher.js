export function caesarCipher(str, shift) {
  return str.split('').map(char => {
    const code = char.charCodeAt(0);

    // Lowercase letters (a-z: 97 to 122)
    if (code >= 97 && code <= 122) {
      return String.fromCharCode(((code - 97 + shift) % 26 + 26) % 26 + 97);
    }

    // Uppercase letters (A-Z: 65 to 90)
    if (code >= 65 && code <= 90) {
      return String.fromCharCode(((code - 65 + shift) % 26 + 26) % 26 + 65);
    }

    // Non-alphabetical characters (spaces, punctuation) remain unchanged
    return char;
  }).join('');
}

// Tests
console.log(caesarCipher('xyz', 3));  
console.log(caesarCipher('HeLLo', 3));
console.log(caesarCipher('Hello, World!', 3));
