/**
 * Challenge
 * Have the function StringMerge(str) read the str parameter being passed which will contain
 * a large string of alphanumeric characters with a single asterisk character splitting the
 * string evenly into two separate strings. Your goal is to return a new string by pairing up
 * the characters in the corresponding locations in both strings.
 *
 * For example: if str is "abc1*kyoo" then your program should return the string akbyco1o because
 * a pairs with k, b pairs with y, etc. The string will always split evenly with the
 * asterisk in the center.
 */

const WILDCARD = '*';

function StringMerge(str) {
  const strArr = [...str];
  const index = strArr.findIndex((item) => item === WILDCARD);
  let result = '';

  for (let i = 0, j = index + 1; i < index; i++, j++) {
    result += `${strArr[i]}${strArr[j]}`;
  }

  return result;
}

console.log(StringMerge("123hg*aaabb"));

// Input:"aaa*bbb"
// Output:"ababab"

// Input:"123hg*aaabb"
// Output:"1a2a3ahbgb"
