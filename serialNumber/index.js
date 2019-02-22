/**
 * Challenge
 * Have the function SerialNumber(str) take the str parameter being passed and determine
 * if it is a valid serial number with the following constraints:
 *
 * 1. It needs to contain three sets each with three digits (1 through 9) separated by a period.
 * 2. The first set of digits must add up to an even number.
 * 3. The second set of digits must add up to an odd number.
 * 4. The last digit in each set must be larger than the two previous digits in the same set.
 *
 * If all the above constraints are met within the string, the your program should return the string true,
 * otherwise your program should return the string false.
 *
 * For example: if str is "224.315.218" then your program should return "true".
 */

function sum(accum, item) {
  accum += parseInt(item);

  return accum;
}

function isSetAddToEvenNumber(set) {
  const numbers = set.split('');

  return numbers.reduce(sum, 0) % 2 === 0;
}

function isSetAddToOddNumber(set) {
  const numbers = set.split('');

  return numbers.reduce(sum, 0) % 2 !== 0;
}

function isLastDigitEachSetLargerThanTwoPreviousDigits(sets) {
  return !(sets.some(set => {
    const setLastValue = set[set.length - 1];

    return parseInt(set.split('').sort()[0]) > parseInt(setLastValue);
  }));
}

function SerialNumber(str) {
  let isValid = false;
  let hasThreeSetsWithThreeDigits = str.match(/[1-9]{3}.[1-9]{3}.[1-9]{3}/);

  if (hasThreeSetsWithThreeDigits) {
    let sets = str.split('.');

    isValid = isSetAddToEvenNumber(sets[0]) &&
      isSetAddToOddNumber(sets[1]) &&
      isLastDigitEachSetLargerThanTwoPreviousDigits(sets);
  }

  return isValid;
}

console.log(SerialNumber('114.568.112'));

// Input:"11.124.667"
// Output:"false"


// Input:"114.568.112"
// Output:"true"
