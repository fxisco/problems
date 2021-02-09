// let regex = /^[a-z|\d]{1}\w{2,23}[a-z|\d]{1}$/gi
// const regex = /^[a-zA-Z][a-zA-Z0-9_]*[^_]$/g
// const valid_reg = /^[A-Za-z]\w+[A-Za-z0-9]$/;

function CodelandUsernameValidation(str) {
  const regex = new RegExp(/^[a-z\d]{1}\w{2,23}[^_]{1}$/gi);

  return regex.test(str);
}

console.log(CodelandUsernameValidation("aaaaaaaaaa"));
