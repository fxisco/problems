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
  const characters = sanitaizedStr.split('');
  const integersIndex = [];
  const expectedValuesPairs = [];
  const expectedQuestionsMarksPairs = [];

  [...characters].forEach((item, index) => {
    if (item.match(/[0-9]/)) {
      integersIndex.push(index);
    }
  });

  for(let i = 0; i < integersIndex.length - 1; i++) {
    const indexA = parseInt(integersIndex[i]);
    const indexB = parseInt(integersIndex[i +  1]);
    const itemA = characters[indexA];
    const itemB = characters[indexB];
    const substring = sanitaizedStr.substring(indexA, indexB + 1);

    if (parseInt(itemA) +  parseInt(itemB) === EXPECTED_VALUE) {
      const key = `${itemA}-${itemB}`;

      expectedValuesPairs.push(key);

      if (substring.match(/(\?{3})/)) {
        expectedQuestionsMarksPairs.push(key);
      }
    }
  }

  return expectedValuesPairs.length > 0 && expectedQuestionsMarksPairs.length === expectedValuesPairs.length;
}




console.log(QuestionsMarks('5??aaaaaaaaaaaaaaaaaaa?5?5'));
// Input:"aa6?9"
// Output:"false"

// Input:"acc?7??sss?3rr1??????5"
// Output:"true"

// For the input "9???1???9??1???9" your output was incorrect. The correct answer is false.


// 2. For the input "5??aaaaaaaaaaaaaaaaaaa?5?5" your output was incorrect. The correct answer is false.
