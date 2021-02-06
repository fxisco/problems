function FindIntersection(strArr) {
  let [firstArray, secondArray] = strArr;

  firstElements = firstArray.split(",").map((item) => parseInt(item));
  secondElements = secondArray.split(",").map((item) => parseInt(item));

  if (secondElements.length < firstElements.length) {
    let buffer = [...firstElements];
    firstElements = [...secondElements];
    secondElements = buffer;
  }

  let total = 0;

  let result = [];

  for (let i = 0; i < firstElements.length; i++) {
    for (let j = 0; j < secondElements.length; j++) {
      total++;
      if (secondElements[j] > firstElements[i]) {
        break;
      }

      if (firstElements[i] === secondElements[j]) {
        result.push(firstElements[i]);
        break;
      }
    }
  }

  console.log(total);

  return result.join(",");
}

// function FindIntersection(strArr) {
//   var a = strArr[0].split(", ");
//   var b = strArr[1].split(", ");
//   var total = 0;
//   var result = a.filter((x) => {
//     return b.find((a) => {
//       total++;
//       return a === x;
//     });
//   });

//   console.log(total);
//   return result.length > 0 ? result.join(",") : "false";
// }

// keep this function call here
console.log(FindIntersection(["1, 2, 3, 4, 5", "6, 7, 8, 9, 10"]));
