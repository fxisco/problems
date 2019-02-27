/**
 * Challenge
 * Have the function StringPeriods(str) take the str parameter being passed and determine
 * if there is some substring K that can be repeated N > 1 times to produce the input string
 * exactly as it appears. Your program should return the longest substring K, and if there
 * is none it should return the string -1.
 *
 * For example: if str is "abcababcababcab" then your program should return abcab because that
 * is the longest substring that is repeated 3 times to create the final string. Another example:
 * if str is "abababababab" then your program should return ababab because it is the longest substring.
 * If the input string contains only a single character, your program should return the string -1.
 */

function StringPeriods(str) {
  let result = -1;
  let isFinished = false;
  let index = 1;

  if (str.length <= 1) {
    return result;
  }

  while(!isFinished) {
    if (index === str.length - 1) {
      isFinished = true;
      continue;
    }

    const test = str.slice(0, index);
    const regex = new RegExp(test, 'g');
    const matches = str.match(regex);

    if (matches.length > 1 && matches.join('') === str) {
      result = test;
    }


    index++;
  }

  return result;
}

console.log(StringPeriods('affedaaffed'));

// Input:"abcxabc"
// Output:"-1"


// Input:"affedaaffed"
// Output:"-1"
