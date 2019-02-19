/**
 * Challenge
 * Have the function GCF(arr) take the array of numbers stored in arr which will always
 * contain only two positive integers, and return the greatest common factor of them.
 *
 * For example: if arr is [45, 12] then your program should return 3. There will always
 * be two elements in the array and they will be positive integers.
 *
 */

function getFactors(num) {
  let dividend = 1;
  let factors = [];

  while(dividend <= num) {
    if (num % dividend === 0) {
      factors.push(dividend);
    }

    dividend++;
  }

  return factors;
}

function sortDescending (a, b) {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  }

  return 0;
}

function GCF(arr) {
  const groupA = getFactors(arr[0]).sort(sortDescending);
  const groupB = getFactors(arr[1]).sort(sortDescending);
  let response;
  let i = 0, j = 0;

  while (i < groupA.length) {
    if (groupA[i] === groupB[j]) {
      response = groupA[i];

      break;
    }

    if (j === groupB.length - 1) {
      i++;
      j = 0;

      continue;
    }

    j++;
  }

  return response;
}

console.log(GCF([12, 28]));

// Input:[1, 6]
// Output:1

// Input:[12, 28]
// Output:4
