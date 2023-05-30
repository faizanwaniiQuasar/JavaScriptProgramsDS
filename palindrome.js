function palindrome(str) {
  let reg = /[\W_]/g;

  let str1 = str.toLowerCase().replace(reg, "");
  let revStr = str1.split("").reverse().join("");

  if (str1 === revStr) {
    return true;
  } else {
    return false;
  }
}

palindrome("eye2");
