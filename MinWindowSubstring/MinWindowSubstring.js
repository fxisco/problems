function contains(string, substring) {
  let copy = string.slice();

  for (let i = 0; i < substring.length; i++) {
    for (let j = 0; j < copy.length; j++) {
      if (substring[i] === copy[j]) {
        copy = copy.slice(0, j) + copy.slice(j + 1);
        break;
      }
    }
  }

  if (string.length - substring.length === copy.length) {
    return true;
  }

  return false;
}

function MinWindowSubstring(strArr) {
  const [N, K] = strArr;
  const formattedK = K.split("").sort().join("");
  let result = null;

  for (let i = 1; i < N.length + 1; i++) {
    for (let j = 0; j < N.length - (i - 1); j++) {
      const group = N.slice(j, j + i);
      const formattedGroup = group.split("").sort().join("");

      if (contains(formattedGroup, formattedK)) {
        result = group;
        break;
      }
    }

    if (result) {
      break;
    }
  }

  return result;
}

// console.log(MinWindowSubstring(["ahffaksfajeeubsne", "jefaa"]));
// console.log(MinWindowSubstring(["aaffhkksemckelloe", "fhea"]));
console.log(MinWindowSubstring(["caae", "cae"]));
