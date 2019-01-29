/**
 * Challenge
 *
 * Have the function CamelCase(str) take the str parameter being passed and return it in proper camel case
 * format where the first letter of each word is capitalized (excluding the first letter). The string will
 * only contain letters and some combination of delimiter punctuation characters separating each word.
 *
 * For example: if str is "BOB loves-coding" then your program should return the string bobLovesCoding.
 */

function CamelCase(str) {
  const sanitaizedStr = str.toLowerCase().replace(/[^a-z]/g, ' ');

  return [...sanitaizedStr.split(' ')].reduce((accum, item, index) => {
    if (index > 0) {
      return accum + item.charAt(0).toUpperCase() + item.slice(1);
    }

    return accum +  item;
  }, '');
}

console.log(CamelCase('a b c d-e-f%g'));

// Input:"cats AND*Dogs-are Awesome"
// Output:"catsAndDogsAreAwesome"

// Input:"a b c d-e-f%g"
// Output:"aBCDEFG"
