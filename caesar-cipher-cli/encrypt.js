function encodeFn(str, s) {
  const shift = s % 26; 
  let encodedStr = '';

  for (let i = 0; i < str.length; i++) {
    const code = str.codePointAt(i);
    let newCode;
    if (code >= 65 && code <= 90) {
      if (code + shift > 90) {
        newCode = code + shift - 26;
      } else {
        newCode = code + shift;
      }
    } else if (code >= 97 && code <= 122) {
      if (code + shift > 122) {
        newCode = code + shift - 26;;
      } else {
        newCode = code + shift;;
      }
    } else {
      newCode = code;
    }
    encodedStr += String.fromCodePoint(newCode);
  }
  return encodedStr;
};

function decodeFn(str, s) {
  const shift = s % 26; 
  let decodedStr = '';

  for (let i = 0; i < str.length; i++) {
    const code = str.codePointAt(i);
    let newCode;
    if (code >= 65 && code <= 90) {
      if (code - shift < 65) {
        newCode = code - shift + 26;
      } else {
        newCode = code - shift;
      }
    } else if (code >= 97 && code <= 122) {
      if (code - shift < 97) {
        newCode = code - shift + 26;;
      } else {
        newCode = code - shift;;
      }
    } else {
      newCode = code;
    }
    decodedStr += String.fromCodePoint(newCode);
  }
  return decodedStr;
};

module.exports = { encodeFn, decodeFn };