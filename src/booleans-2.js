function negate(a) {
  return !a;
}

function both(a, b) {
  return !!(a && b);
}

function either(a, b) {
  return a || b;
}

function none(a, b) {
  return !(a || b);
}

function one(a, b) {
  return a !== b;
}

function truthiness(a) {
  return Boolean(a);
}

function isEqual(a, b) {
  return a === b;
}

function isGreaterThan(a, b) {
  return a > b;
}

function isLessThanOrEqualTo(a, b) {
  return a <= b;
}

function isOdd(a) {
  return !(a % 2 === 0);
}

function isEven(a) {
  return a % 2 === 0;
}

function isSquare(a) {
  const squareRoot = Math.sqrt(a);
  return Number.isInteger(squareRoot);
}

function startsWith(char, string) {
  return string.charAt(0) === char;
}

function containsVowels(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  return Array.from(string).some(char => vowels.includes(char));
}

function isLowerCase(string) {
  return string.toLowerCase() === string;
}

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
