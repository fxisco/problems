/**
 * Challenge
 *
 * Have the function PalindromeSwapper(str) take the str parameter being passed
 * and determine if a palindrome can be created by swapping two adjacent characters
 * in the string. If it is possible to create a palindrome, then your program should
 * return the palindrome, if not then return the string -1. The input string will only
 * contain alphabetic characters.
 *
 * For example: if str is "rcaecar" then you can create a palindrome
 * by swapping the second and third characters, so your program should return the string racecar
 * which is the final palindromic string.
 */

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

function PalindromeSwapper(str) {
  let i = 0, j = 1;
  let result = -1;

  while (j < str.length) {
    const test = str.slice(0, i) + str[j] + str[i] + str.slice(j + 1, str.length);

    if (isPalindrome(test)) {
      result = test;
      break;
    }
    i++;
    j++;
  }

  return result;
}

console.log(PalindromeSwapper('kyaak'));

// Input:"anna"
// Output:"anna"

// Input:"kyaak"
// Output:"kayak"
