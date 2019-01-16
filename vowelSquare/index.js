/**
 * Challenge
 * Have the function VowelSquare(strArr) take the strArr parameter
 * being passed which will be a 2D matrix of some arbitrary size
 * filled with letters from the alphabet, and determine if a 2x2
 * square composed entirely of vowels exists in the matrix.
 *
 * For example: strArr is ["abcd", "eikr", "oufj"]
 * then this matrix looks like the following:
 * a b c d
 * e i k r
 * o u f j
 * Within this matrix there is a 2x2 square of vowels starting
 * in the second row and first column, namely, ei, ou.
 * If a 2x2 square of vowels is found your program should return
 * the top-left position (row-column) of the square, so for this
 * example your program should return 1-0.
 *
 * If no 2x2 square of vowels exists, then return the string not
 * found. If there are multiple squares of vowels, return the one
 * that is at the most top-left position in the whole matrix.
 * The input matrix will at least be of size 2x2.
 */

 function isVowelSquare(array, x, y) {
  return !!(isVowel(array[y][x]) &&
          isVowel(array[y + 1][x]) &&
          isVowel(array[y][x + 1]) &&
          isVowel(array[y + 1][x + 1]));
 }

 function isVowel(string) {
  return !!(string.match(/^[aeiou]$/));
 }

 function VowelSquare(strArr) {
  const array = strArr.reduce((accum, item, currentIndex) => {
    accum[currentIndex] = item.split('');

    return accum;
  }, []);

  let x = 0;
  let y = 0;
  let response = 'not found';
  let isFinished = false;
  const maxX = array[0].length;
  const maxY = strArr.length;

  while (!isFinished) {
    if (y + 1 > maxY - 1) {
      isFinished = true;
      continue;
    }

    if (isVowelSquare(array, x, y)) {
      isFinished = true;
      response = `${y}-${x}`;
      continue;
    }

    if (x + 1 === maxX - 1) {
      y++;
      x = 0;
    } else {
      x++;
    }
  }

  return response;
 }

 console.log(VowelSquare(["gg", "ff"]));


 // Input:"aqrst", "ukaei", "ffooo"
// Output:"1-2"

// Input:"gg", "ff"
// Output:"not found"
