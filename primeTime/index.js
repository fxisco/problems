/**
 * Challenge
 *
 * Have the function PrimeTime(num) take the num parameter being passed and
 * return the string true if the parameter is a prime number, otherwise return
 * the string false. The range will be between 1 and 2^16.
 */

function PrimeTime(num) {
  const hasDividers = [...Array(num)].some((_, index) => {
    const number = index + 1;

    return number !== 1 && number !== num && num % number === 0;
  });

  return !hasDividers;
}

console.log(PrimeTime(19));

// Input:19
// Output:"true"

// Input:110
// Output:"false"
