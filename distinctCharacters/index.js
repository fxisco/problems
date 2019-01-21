/**
 * Challenge
 * Have the function DistinctCharacters(str) take the str parameter being passed and
 * determine if it contains at least 10 distinct characters, if so, then your program
 * should return the string true, otherwise it should return the string false.
 *
 * For example: if str is "abc123kkmmmm?" then your program should return the string false
 * because this string contains only 9 distinct characters: a, b, c, 1, 2, 3, k, m, ? adds
 * up to 9.
 */

const MIN_CHAR_QTY = 10;
function DistinctCharacters(str) {
  const chars = [...str].reduce((accum, item) => {
    if (!accum[item]) {
      accum[item] = item;
    }

    return accum;
  }, {});

  return String(Object.keys(chars).length >= MIN_CHAR_QTY);
}

console.log(DistinctCharacters('12334bbmma:=6'))

// Input:"12334bbmma:=6"
// Output:"true"

// Input:"eeeemmmmmmmmm1000"
// Output:"false"
