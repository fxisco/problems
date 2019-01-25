/**
 * Challenge
 *
 * Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers,
 * letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers
 * that add up to 10. If so, then your program should return the string true, otherwise it should return the string
 * false. If there aren't any two numbers that add up to 10 in the string, then your program should
 * return false as well.
 *
 * For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are
 * exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.
 */

const EXPECTED_VALUE = 10;
const EXPECTED_QUESTION_MARKS_COUNT = 3;

function QuestionsMarks(str) {
  const sanitaizedStr = str.toLowerCase().replace(/[a-z]/g, '');
  const matches = sanitaizedStr.match(/(\d\?+\d)/g) || [];
  let response = true;

  console.log(matches);
  matches.forEach(item => {
    const questionMarksCount = item.match(/[?]+/)[0].length;

    // console.log(questionMarksCount, item[0], item[item.length - 1]);

    if (parseInt(item[0]) + parseInt(item[item.length - 1]) === EXPECTED_VALUE && questionMarksCount !== EXPECTED_QUESTION_MARKS_COUNT) {
      response = false;
    }
  });

  return response;
}




console.log(QuestionsMarks('5??aaaaaaaaaaaaaaaaaaa?5?5'));
// Input:"aa6?9"
// Output:"false"

// Input:"acc?7??sss?3rr1??????5"
// Output:"true"


// [ '9???1', '9??1' ]
// For the input "9???1???9??1???9" your output was incorrect. The correct answer is false.


// 2. For the input "5??aaaaaaaaaaaaaaaaaaa?5?5" your output was incorrect. The correct answer is false.
