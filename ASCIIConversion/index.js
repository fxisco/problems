/**
 * Challenge
 * Have the function ASCIIConversion(str) take the str parameter being passed and return a
 * new string where every character, aside from the space character, is replaced with its
 * corresponding decimal character code. For example: if str is "dog" then your program should
 * return the string 100111103 because d = 100, o = 111, g = 103.
 */

function ASCIIConversion(str) {
  return [...str].reduce((accum, item) => {
    if (item === ' ') {
      accum += item;
    } else {
      accum += item.charCodeAt(0);
    }

    return accum;
  }, '');
}

console.log(ASCIIConversion('hello world'));

// Input:"hello world"
// Output:"104101108108111 119111114108100"

// Input:"abc **"]
// Output:"979899 4242"
