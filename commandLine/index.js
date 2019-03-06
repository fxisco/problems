/**
 * Challenge
 *
 * Have the function CommandLine(str) take the str parameter being passed which represents the parameters
 * given to a command in an old PDP system. The parameters are alphanumeric tokens (without spaces)
 * followed by an equal sign and by their corresponding value. Multiple parameters/value pairs can be
 * placed on the command line with a single space between each pair. Parameter tokens and values cannot
 * contain equal signs but values can contain spaces. The purpose of the function is to isolate the parameters
 * and values to return a list of parameter and value lengths. It must provide its result in the same format and
 * in the same order by replacing each entry (tokens and values) by its corresponding length.
 *
 * For example, if str is: "SampleNumber=3234 provider=Dr. M. Welby patient=John Smith priority=High"
 * then your function should return the string "12=4 8=12 7=10 8=4" because "SampleNumber" is a 12 character
 * token with a 4 character value ("3234") followed by "provider" which is an 8 character token followed by
 * a 12 character value ("Dr. M. Welby"), etc.
 */

function CommandLine(str) {
  const splittedWords = str.split(/([\w]+)\=/g);

  splittedWords.shift();

  return splittedWords.reduce((accum, item, index) => {
    if (index % 2 === 0) {
      accum += `${item.length}=${splittedWords[index + 1].replace(/\s+$/g, '').length} `;
    }

    return accum;
  }, '').trim();
}

console.log(CommandLine('origin=2;3 destination=7;9 stops= 3;6 8;9 12;17'));

// Input:"letters=A B Z T numbers=1 2 26 20 combine=true"
// Output:"7=7 7=9 7=4"

// Input:"a=3 b=4 a=23 b=a 4 23 c="
// Output:"1=1 1=1 1=2 1=6 1=0"

// Input:"origin=2;3 destination=7;9 stops= 3;6 8;9 12;17"
// Output:"6=3 11=3 5=14"

// Input:"name=A value= 3 name=B value=8"
// Output:"4=1 5=2 4=1 5=1"
