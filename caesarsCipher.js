function rot13(str) {
  let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    if (string.indexOf(str[i]) >= 13) {
      answer += string[string.indexOf(str[i]) - 13];
    } else if (string.indexOf(str[i]) < 13 && string.indexOf(str[i]) > -1) {
      answer += string[string.indexOf(str[i]) + 13];
    } else {
      answer += str[i];
    }
  }
  return answer;
}

console.log(rot13("SERR PBQR PNZC"));
