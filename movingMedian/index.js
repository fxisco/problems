/**
 * Challenge
 *
 * Have the function MovingMedian(arr) read the array of numbers stored in arr which will contain a
 * sliding window size, N, as the first element in the array and the rest will be a list of numbers.
 *
 * Your program should return the Moving Median for each element based on the element and its N-1
 * predecessors, where N is the sliding window size. The final output should be a string with the
 * moving median corresponding to each entry in the original array separated by commas.
 *
 * Note that for the first few elements (until the window size is reached), the median is
 * computed on a smaller number of entries.
 *
 * For example: if arr is [3, 1, 3, 5, 10, 6, 4, 3, 1] then your program should output
 * "1,2,3,5,6,6,4,3"
 */

function sortAsc(a, b) {
  return a - b;
}

function getMedian(arr) {
  const newArray = [...arr].sort(sortAsc);

  if (arr.length % 2 === 0) {
    const num1Index = (newArray.length / 2) - 1;
    const num2Index = num1Index + 1;

    return (newArray[num1Index] + newArray[num2Index]) / 2;
  }

  return newArray[Math.floor(newArray.length / 2)];
}

function MovingMedian(arr) {
  const N = arr.shift();
  const result = [];
  let returned = false;
  const length = arr.length > N ? arr.length - (N - 1) : arr.length;

  for (let index = 0; index < length; index++) {
    if (index < N && !returned) {
      result.push(getMedian(arr.slice(0, index + 1)));
    } else {
      result.push(getMedian(arr.slice(index, index + N)));
    }

    if (index === N - 1 && !returned) {
      index = 0;
      returned = true;
    }
  }

  return result.join();
}

console.log(MovingMedian([2,2,4,6,32,8,2,-12,4,6]));

// Input:[5, 2, 4, 6]
// Output:"2,3,4"

// Input:[3, 0, 0, -2, 0, 2, 0, -2]
// Output:"0,0,0,0,0,0,0"
