/**
 * Challenge
 *
 * Have the function PrimeMover(num) return the numth prime number.
 * The range will be from 1 to 10^4.
 *
 * For example: if num is 16 the output should be 53 as 53 is the 16th prime number.
 */

function isPrime(num) {
  if (num === 1) {
    return false;
  }

  if (num === 2) {
    return true;
  }

  const hinge = Math.floor(Math.sqrt(num));

  return ![...Array(hinge)].some((_, index) => {
    const currentNum = index + 1;

    return currentNum !== 1 && currentNum !== num && num % currentNum === 0;
  });
}

function PrimeMover(num) {
  let i = 1,
    count = 0;

  while (count < num) {
    if (i === 2) {
      count++;
    } else if (i % 2 !== 0 && isPrime(i)) {
      count++;
    }

    i++;
  }

  return i - 1;
}

console.log(PrimeMover(100));

// Input:9
// Output:23

// Input:100
// Output:541
