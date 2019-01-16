/**
 * Challenge
 *
 * Have the function NumberStream(str) take the str parameter being passed which will contain the numbers 2
 * through 9, and determine if there is a consecutive stream of digits of at least N length where N is the
 * actual digit value. If so, return the string true, otherwise return the string false.
 *
 * For example: if str is "6539923335" then your program should return the string true because
 * there is a consecutive stream of 3's of length 3. The input string will always contain at
 * least one digit.
 */


function NumberStream(str) {
  let isFinish = false;
  let i = 0;
  let response = false;

  while (!isFinish) {
    if (i > str.length - 1) {
      isFinish = true;
      continue;
    }
    const test = str[i].repeat(parseInt(str[i]));
    const regex =  new RegExp(test);

    if (str.match(regex)) {
      response = true;
      isFinish = true;
    }

    i++;
  }

  return response;
}

 console.log(NumberStream("5788888888882339999"));

// Input:"5556293383563665"
// Output:"false"


// Input:"5788888888882339999"
// Output:"true"
