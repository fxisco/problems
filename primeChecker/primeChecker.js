const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};

const permutator = (inputArr) => {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      // console.log(arr, m);
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);

        console.log("::M", i, arr, m, next);
        permute(curr.slice(), m.concat(next));
      }
    }
  };

  permute(inputArr);

  return result;
};

function PrimeChecker(num) {
  const numString = num.toString().split("");
  const permutations = permutator(numString);

  const prime = permutations.some((item) => {
    const digit = +item.join("");

    return isPrime(digit);
  });

  return prime ? 1 : 0;
}

// keep this function call here
console.log(PrimeChecker(789));
