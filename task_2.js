function first_non_repeating_letter(str) {
  const lowerCaseStr = str.toLowerCase();
  for (let i = 0; i < lowerCaseStr.length; i++) {
    const newRegEx = new RegExp(lowerCaseStr[i], "g");
    const count = (lowerCaseStr.match(newRegEx) || []).length;
    if (count === 1) {
      return str[i];
    }
  }
}

console.log(first_non_repeating_letter("sTreSS")); // T
