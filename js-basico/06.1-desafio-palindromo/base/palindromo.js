palindromo("aba"); // é palíndromo
palindromo("radar"); // é palíndromo
palindromo("xyzzyx"); // é palíndromo
palindromo("bola"); // não é palíndromo
palindromo("abcddcb"); // não é palíndromo
palindromo(""); // é palíndromo
palindromo("x"); // é palíndromo

function palindromo(s) {
  s = s.toLowerCase();
  var reversedS = s.split("").reverse().join("");
  if (s != reversedS) {
    console.log(s.toUpperCase() + " não é um palindromo");
    return;
  } else {
    console.log(s.toUpperCase() + " é um palindromo");
    return;
  }
}
