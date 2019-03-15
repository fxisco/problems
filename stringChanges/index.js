/**
 * Challenge
 *
 * Have the function StringChanges(str) take the str parameter being passed, which will be a string containing
 * letters from the alphabet, and return a new string based on the following rules.
 *
 * Whenever a capital M is encountered, duplicate the previous character (then remove the M), and whenever a capital N is
 * encountered remove the next character from the string (then remove the N). All other characters in the string
 * will be lowercase letters.
 *
 * For example: "abcNdgM" should return "abcgg".
 *
 * The final string will never be empty.
 */

function StringChanges(str) {
  let response = '';

  for (let i = 0; i < str.length; i++) {
    const item = str[i];

    if (item === 'N') {
      i++;
    } else if (item === 'M') {
      if (response.length > 0) {
        response += response[response.length - 1];
      }
    } else {
      response += item;
    }
  }

  return response;
}

console.log(StringChanges('MNMNjMa'));

// Input: MMMMMokM
// Output: okk

// Input: MMMMMokN
// Output: ok

// Input: MNMNjMa
// Output: a


// Input:"MrtyNNgMM"
// Output:"rtyggg"

// Input:"oMoMkkNrrN"
// Output:"ooookkr"
