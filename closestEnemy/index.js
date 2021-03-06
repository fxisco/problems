/**
 * Challenge
 * Have the function ClosestEnemy(arr) take the array of numbers stored in arr and
 * from the position in the array where a 1 is, return the number of spaces either
 * left or right you must move to reach an enemy which is represented by a 2.
 *
 * For example: if arr is [0, 0, 1, 0, 0, 2, 0, 2] then your program should
 * return 3 because the closest enemy (2) is 3 spaces away from the 1.
 * The array will contain any number of 0's and 2's, but only a single 1.
 * It may not contain any 2's at all as well, where in that case your
 * program should return a 0.
 */

function ClosestEnemy(arr) {
  const arrayLetters = [...arr];
  const indexOfOne = arrayLetters.indexOf(1);
  const firstIndexOfTwo = arrayLetters.indexOf(2);
  let response = 0;

  if (firstIndexOfTwo > -1) {
    const lastIndexOfTwo = arrayLetters.lastIndexOf(2);

    if (firstIndexOfTwo === lastIndexOfTwo || indexOfOne < firstIndexOfTwo) {
      response = Math.abs(firstIndexOfTwo - indexOfOne);
    } else {
      response = Math.abs(lastIndexOfTwo - indexOfOne);
    }
  }

  return response;
}

 console.log(ClosestEnemy([0, 0, 1, 0, 0, 2, 0, 2]));

// Input:1, 0, 0, 0, 2, 2, 2
// Output:4

// Input:2, 0, 0, 0, 2, 2, 1, 0
// Output:1
