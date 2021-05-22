const EVEN_TOKEN = "*";
const ODD_TOKEN = "-";

function DashInsertII(num) {
  const result = [];
  const digits = num.toString().split("");

  for (let i = 1; i < digits.length; i++) {
    const previousDigit = +digits[i - 1];
    const currentDigit = +digits[i];

    if (i === 1) {
      result.push(digits[i - 1]);
    }

    if (currentDigit !== 0 && previousDigit !== 0) {
      if (previousDigit % 2 === 0 && currentDigit % 2 === 0) {
        result.push(EVEN_TOKEN);
      } else if (previousDigit % 2 !== 0 && currentDigit % 2 !== 0) {
        result.push(ODD_TOKEN);
      }
    }

    result.push(digits[i]);
  }

  return result.join("");
}

console.log(DashInsertII(99946));
console.log("9-9-94*6");
