function swap(arr, i, j) {
  const aux = arr[j];

  arr[j] = arr[i];
  arr[i] = aux;

  return arr;
}

function PermutationStep(num) {
  let digits = String(num).split("").map(Number);
  let pivot = -1;

  for (let i = digits.length - 1; i > 0; i--) {
    if (digits[i] > digits[i - 1]) {
      pivot = i;
      break;
    }
  }

  if (pivot === -1) {
    return -1;
  }

  digits = swap(digits, pivot, pivot - 1);

  const firstPart = digits.slice(0, pivot);
  const rest = digits.slice(pivot).sort();

  return +[...firstPart, ...rest].join("");
}

// keep this function call here
console.log(PermutationStep(41352));
