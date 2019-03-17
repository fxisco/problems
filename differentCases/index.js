/**
 * Challenge
 * Have the function DifferentCases(str) take the str parameter being passed and return
 * it in upper camel case format where the first letter of each word is capitalized.
 * The string will only contain letters and some combination of delimiter punctuation
 * characters separating each word.
 *
 * For example: if str is "Daniel LikeS-coding" then your program should return the string
 * DanielLikesCoding.
 */

function DifferentCases(str) {
  return str;
}

console.log(DifferentCases('cats AND*Dogs-are Awesome'))

// Input:"cats AND*Dogs-are Awesome"
// Output:"CatsAndDogsAreAwesome"


// Input:"a b c d-e-f%g"
// Output:"ABCDEFG"
