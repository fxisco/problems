/**
 * Challenge
 *
 * Have the function FizzBuzz(num) take the num parameter being passed and return all
 * the numbers from 1 to num separated by spaces, but replace every number that is divisible
 * by 3 with the word "Fizz", replace every number that is divisible by 5 with the word "Buzz",
 * and every number that is divisible by both 3 and 5 with the word "FizzBuzz".
 *
 * For example: if num is 16, then your program should return the string
 * "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16". The input will be within the
 * range 1 - 50.
 */

function FizzBuzz(num) {
  let response = [];

  [...Array(num)].forEach((_, index) => {
    const number = index + 1;

    if (number % 3 === 0 && number % 5 === 0) {
      response.push('FizzBuzz');
    } else if (number % 3 === 0) {
      response.push('Fizz');
    } else if (number % 5 === 0) {
      response.push('Buzz');
    } else {
      response.push(`${number}`);
    }
  });

  return response.join(' ').trim();
}

console.log(FizzBuzz(8));

// Input:3
// Output:"1 2 Fizz"

// Input:8
// Output:"1 2 Fizz 4 Buzz Fizz 7 8"
