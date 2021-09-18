function caesarShift(str, num) {
  let output = "";
  // recursion to bring num above 0.
  if (num < 0) {
    return caesarShift(str, num + 26);
  }

  for (let i = 0; i < str.length; i += 1) {
    let char = str[i];

    if (char.match(/[a-z]/i)) {
      let code = char.charCodeAt(0);

      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 + num) % 26) + 65);
      }

      if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 + num) % 26) + 97);
      }
    }

    output += char;
  }
  return output;
}

export default caesarShift;
