/**
 * Challenge
 * Have the function SimpleEvens(num) check whether every single number in the passed
 * in parameter is even. If so, return the string true, otherwise return the string false.
 *
 * For example: if num is 4602225 your program should return the string false because 5
 * is not an even number.
 */

function SimpleEvens(num) {
  let allEvens = true;

  while (num > 0) {
    const module = num % 10;

    if (module % 2 !== 0) {
      allEvens = false;
      break;
    } else {
      num = Math.trunc(num / 10);
    }
  }

  return allEvens;
}

console.log(SimpleEvens(20864646452));

// Input:2222220222
// Output:"true"

// Input:20864646452
// Output:"false"
