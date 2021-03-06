/**
 * Challenge
 * Have the function ScaleBalancing(strArr) read strArr which will contain two
 * elements,the first being the two positive integer weights on a balance scale
 * (left and right sides) and the second element being a list of available
 * weights as positive integers. Your goal is to determine if you can balance
 * the scale by using the least amount of weights from the list, but using at
 * most only 2 weights.
 *
 * For example: if strArr is ["[5, 9]", "[1, 2, 6, 7]"]
 * then this means there is a balance scale with a weight of 5 on
 * the left side and 9 on the right side. It is in fact possible to balance
 * this scale by adding a 6 to the left side from the list of weights and
 * adding a 2 to the right side. Both scales will now equal 11 and they
 * are perfectly balanced.
 *
 * Your program should return a comma separated
 * string of the weights that were used from the list in ascending order,
 * so for this example your program should return the string 2,6
 *
 * There will only ever be one unique solution and
 * the list of available weights will not be empty.
 * It is also possible to add two weights to only one side of the
 * scale to balance it. If it is not possible to balance the scale
 * then your program should return the string not possible.
 */

function validate (weights, values) {
  const [left, right] = weights;
  let total = left;
  const responses = values.length === 1 ? [values] : values.split(',');
  let index = 0;

  // try right side
  while(index < responses.length) {
    total += parseInt(responses[index]);

    if (total > right) {
      break;
    }

    index++;
  }

  if (total === right) {
    return true;
  }

  total = right;
  index = 0;

  while(index < responses.length) {
    total += parseInt(responses[index]);

    if (total > left) {
      break;
    }

    index++;
  }

  if (total === left) {
    return true;
  }

  const [ first, second ] = responses;

  return !!(right +  parseInt(first) === left + parseInt(second) || right + parseInt(second) ===  left + parseInt(first));
}

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

function createPermutations(length) {
  const max = Math.pow(2, length);
  const result = [];

  for (let i = 1; i < max; i++) {
    const permutation = i.toString(2);
    const ones = permutation.match(/1/g).length;

    if (ones === 1 || ones === 2) {
      result.push(pad(permutation, length));
    }
  }

  return result;
}

function ScaleBalancing(strArr) {
  const weights = JSON.parse(strArr[0]);
  const availableWeights = JSON.parse(strArr[1]);
  const permutations = createPermutations(availableWeights.length);
  let answer = 'not possible';

  permutations.forEach((item) => {
    const option = [...item].reduce((accum, item, index) => {
      if (item == 1) {
        accum.push(availableWeights[index]);
      }

      return accum;
    }, []);

    const optionFormatted = option.join();
    const possibleAnswer = validate(weights, optionFormatted);

    if (possibleAnswer && possibleAnswer < answer.length) {
      answer = optionFormatted;
    }
  });

  return answer;
}

// console.log(createPermutations(10));

console.log(ScaleBalancing(["[3, 4]", "[1, 2, 7]"] ));

// Para mi la validacion es con buscando una permutacion

// Input:"[3, 4]", "[1, 2, 7, 7]"
// Output:"1"

// Input:"[13, 4]", "[1, 2, 3, 6, 14]"
// Output:"3,6"
