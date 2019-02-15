/**
 * Challenge
 * Have the function OneDecremented(num) count how many times a digit appears that is
 * exactly one less than the previous digit.
 *
 * For example: if num is 5655984 then your program should return 2 because 5 appears
 * directly after 6 and 8 appears directly after 9.
 *
 * The input will always contain at least 1 digit.
 */

function OneDecremented(num) {
  let result = 0;
  let i = 0;
  const numbersStrArr = [...num.toString()];

  while (i < numbersStrArr.length - 1) {
    if (parseInt(numbersStrArr[i]) - 1 === parseInt(numbersStrArr[i + 1])) {
      result++;
    }

    i++;
  }

  return result;
}

console.log(OneDecremented(9876541110));

// Input:56
// Output:0

// Input:9876541110
// Output:6

