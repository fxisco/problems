function TripleDouble(num1, num2) {
  const digits = num1.toString().match(/(.)\1{2}/);

  if (!digits) return 0;

  const re = new RegExp(digits[1] + "{2}");
  const result = num2.toString().match(re);

  return (+!!result).toString();
}

console.log(TripleDouble(17555, 55144));
