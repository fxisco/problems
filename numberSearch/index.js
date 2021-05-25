function NumberSearch(str) {
  const numbers = str.match(/\d/g) || [];
  const letters = (str.match(/[a-zA-z]/g) || []).length;
  var sum = numbers.reduce((accum, item) => accum + +item, 0);

  return Math.round(sum / letters);
}

console.log(NumberSearch("3Hello9 9 9"));
