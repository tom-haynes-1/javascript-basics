/* eslint-disable no-plusplus */
const getNthElement = (index, array) => {
  return array
    .slice(index % array.length, (index % array.length) + 1)
    .concat()[0];
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  const stringItems = numbers.map(item => {
    return item.toString();
  });
  return stringItems;
};

const uppercaseWordsInArray = strings => {
  const uppcaseItems = strings.map(item => {
    return item.toUpperCase();
  });
  return uppcaseItems;
};

const reverseWordsInArray = strings => {
  const reversedArrayOfStrings = strings.map(string => {
    let reversedString = '';
    for (let i = string.length - 1; i >= 0; i--) {
      reversedString += string[i];
    }
    return reversedString;
  });
  return reversedArrayOfStrings;
};

const onlyEven = numbers => {
  const evenNumbers = numbers.filter(number => number % 2 === 0);
  return evenNumbers;
};

const removeNthElement2 = (index, array) => {
  const arrayWithRemovedElement = array
    .slice(0, index)
    .concat(array.slice(index + 1));
  return arrayWithRemovedElement;
};

const elementsStartingWithAVowel = strings => {
  const vowelsArray = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  return strings.filter(string => {
    const firstLetter = string[0].toLowerCase();
    return vowelsArray.some(character => character === firstLetter);
  });
};

const removeSpaces = string => {
  const removedWhiteSpace = string.split(' ').join('');
  return removedWhiteSpace;
};

const sumNumbers = numbers => {
  const totalValue = numbers.reduce((currentValue, number) => {
    return number + currentValue;
  }, 0);
  return totalValue;
};

const sortByLastLetter = strings => {
  strings.sort((a, b) => {
    const lastCharA = a.slice(-1);
    const lastCharB = b.slice(-1);

    return lastCharA.localeCompare(lastCharB) || a.localeCompare(b);
  });
  return strings;
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
