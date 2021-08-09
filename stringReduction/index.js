const SUBSTITUTIONS = {
  ab: "c",
  bc: "a",
  ac: "b",
};

function StringReduction(str) {
  let result = str.slice();
  let index = 0;

  while (true) {
    if (index === result.length - 1) {
      break;
    }

    if (result[index] !== result[index + 1]) {
      const substitute = `${result[index]}${result[index + 1]}`
        .split("")
        .sort()
        .join("");
      const letter = SUBSTITUTIONS[substitute];

      result = result.slice(0, index) + letter + result.slice(index + 2);
      index = 0;

      continue;
    }

    index++;
  }

  return result.length;
}

// keep this function call here
console.log(StringReduction("cccc"));
