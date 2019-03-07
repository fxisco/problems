/**
 * Challenge
 *
 * Have the function StarRating(str) take the str parameter being passed which will
 * be an average rating between 0.00 and 5.00, and convert this rating into a list of
 * 5 image names to be displayed in a user interface to represent the rating as a list
 * of stars and half stars. Ratings should be rounded up to the nearest half.
 *
 * There are 3 image file names available: "full.jpg", "half.jpg", "empty.jpg".
 * The output will be the name of the 5 images (without the extension), from left to right,
 * separated by spaces. For example: if str is "2.36" then this should be displayed by the following image:
 *
 * So your program should return the string "full full half empty empty".
*/

function StarRating(str) {
  let response = [];
  const stars = parseInt(str);
  const remainingStars = parseFloat(str) % 1;

  for (let i = 0; i < stars; i++) {
    response.push('full');
  }

  if (remainingStars <= 0.25) {
    response.push('empty');
  } else if (remainingStars > 0.25 && remainingStars <= 0.5) {
    response.push('half');
  } else {
    response.push('full');
  }

  const length = remainingStars > 0.75 ? (4 - stars) : (5 - stars);

  for (let i = 0; i < length; i++) {
    response.push('empty');
  }

  return response.join(' ');
}

console.log(StarRating('0.0'));

// Input:"0.38"
// Output:"half empty empty empty empty"

// Input:"4.5"
// Output:"full full full full half"

// Input:"3.02"
// Output:"full full full empty empty"

// Input:"2.75"
// Output:"full full full empty empty"

// 1. For the input "0.0" your output was incorrect. The correct answer is empty empty empty empty empty.
// 2. For the input "5.0" your output was incorrect. The correct answer is full full full full full.
// 3. For the input "4.63" your output was incorrect. The correct answer is full full full full half.
