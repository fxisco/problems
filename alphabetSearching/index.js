/**
 * Challenge
 * Have the function AlphabetSearching(str) take the str
 * parameter being passed and return the string true if
 * every single letter of the English alphabet exists in the string,
 * otherwise return the string false.
 *
 * For example: if str is "zacxyjbbkfgtbhdaielqrm45pnsowtuv" then
 * your program should return the string true because every
 * character in the alphabet exists in this string even though
 * some characters appear more than once.
 */

 const ALPHABET_LETTERS_COUNT = 26;

 function AlphabetSearching(string) {
  const response = [...string.toLowerCase()].reduce((accum, item) => {
    if (!accum[item] && item.match(/[a-z]/i)) {
      accum[item] = item;
    }

    return accum;
  }, {});

  return Object.keys(response).length === ALPHABET_LETTERS_COUNT;
 }

 console.log(AlphabetSearching('zcxyjbbkfgtbhdaielqrm45pnsowtuv'));

// Input:"abcdefghijklmnopqrstuvwxyyyy"

// Output:"false"


// Input:"abc123456kmo"

// Output:"false"
