/**
 * Challenge
 *
 * Have the function ThreeNumbers(str) take the str parameter being
 * passed and determine if exactly three unique, single-digit integers
 * occur within each word in the string. The integers can appear anywhere
 * in the word, but they cannot be all adjacent to each other.
 *
 * If every word contains exactly 3 unique integers somewhere within it,
 * then return the string true, otherwise return the string false.
 * For example: if str is "2hell6o3 wor6l7d2" then your program should
 * return "true" but if the string is "hell268o w6or2l4d" then your program
 * should return "false" because all the integers are adjacent to each other
 * in the first word.
 */

function ThreeNumbers(string) {
  const words = string.split(' ');
  let isFinish = false;
  let index = 0;
  let response = false;

  while ((index < words.length && !isFinish)) {
    // Check if there are tree numbers together
    const areThreeNumbersTogether = !!words[index].match(/\d{3}/g);
    const digits = words[index].replace(/\D/g, "");

    // Eliminate characters, the count should be three
    const hasThreeDigits = digits.length === 3;

    // Eliminate repeated characters
    const hasUniqueDigits = digits.replace(/(.)(?=.*\1)/g, "").length === 3;

    if (areThreeNumbersTogether || !hasThreeDigits || !hasUniqueDigits) {
      isFinish = true;
    }

    index++;
  }

  if (!isFinish) {
    response = true;
  }


  return response;
}

console.log(ThreeNumbers("2a3b5 w1o2rl3d g1gg92"));


// Input:"2a3b5 w1o2rl3d g1gg92"
// Output:"true"

// Input:"21aa3a ggg4g4g6ggg"
// Output:"false"
