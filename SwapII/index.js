function swapWord(word) {
  const letters = word.split("");
  let accum = "";
  let numberIndex = -1;

  for (let i = 0; i < letters.length; i++) {
    const currentLetter = letters[i];
    let shift = "";

    if (!isNaN(parseInt(currentLetter))) {
      if (!isNaN(parseInt(letters[i - 1]))) {
        shift = currentLetter;
      } else if (numberIndex === -1) {
        shift = currentLetter;
        numberIndex = i;
      } else {
        shift = accum[numberIndex];
        accum =
          accum.slice(0, numberIndex) +
          currentLetter +
          accum.slice(numberIndex + 1, i);
        numberIndex = -1;
      }
    } else if (currentLetter === currentLetter.toUpperCase()) {
      shift = currentLetter.toLowerCase();
    } else {
      shift = currentLetter.toUpperCase();
    }

    accum += shift;
  }

  return accum;
}

function SwapII(str) {
  const words = str.split(" ");
  const result = [];

  for (let i = 0; i < words.length; i++) {
    result.push(swapWord(words[i]));
  }

  return result.join(" ");
}

// keep this function call here
console.log(SwapII("6coderbyte5"));
console.log("5CODERBYTE6");
