/**
 * Challenge
 *
 * Have the function HDistance(strArr) take the array of strings stored in strArr,
 * which will only contain two strings of equal length and return the number of
 * characters at each position that are different between them.
 *
 * For example: if strArr is ["house", "hours"] then your program should return 2.
 * The string will always be of equal length and will only contain lowercase
 * characters from the alphabet and numbers.
 */


function HDistance(strArr) {
  const [firstWord, secondWord] = strArr;
  let response = 0;

  [...firstWord].forEach((letter, index) => {
    if (letter !== secondWord[index]) {
      response++;
    }
  });

  return response;
}

console.log(HDistance(["abcdef", "defabc"]));

// Input:["10011", "10100"]
// Output:3

// Input:["abcdef", "defabc"]
// Output:6
