/**
 * Challenge
 *
 * Have the function RunLength(str) take the str parameter being passed and
 * return a compressed version of the string using the Run-length encoding
 * algorithm. This algorithm works by taking the occurrence of each repeating
 * character and outputting that number along with a single character of the
 * repeating sequence.
 *
 * For example: "wwwggopp" would return 3w2g1o2p. The string will not contain
 * any numbers, punctuation, or symbols.
 */

function RunLength(str) {
  let count = 1,
    i = 0,
    response = '';
  const ReversedString = [...str].reverse();

  while(i < str.length) {
    if (i + 1 === ReversedString.length || ReversedString[i + 1] !== ReversedString[i]) {
      response += `${ReversedString[i]}${count}`;
      count = 1;
    } else {
      count++;
    }

    i++;
  }

  return response.split('').reverse().join('');
}

console.log(RunLength('aabbcde'));

// Input:"aabbcde"
// Output:"2a2b1c1d1e"

// Input:"wwwbbbw"
// Output:"3w3b1w"
