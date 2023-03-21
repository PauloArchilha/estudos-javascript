function somar() {
  const valor1 = Number(document.querySelector("input#n1").value);
  const valor2 = Number(document.querySelector("input#n2").value);
  const resultado = calcularSoma(valor1, valor2);
  exibirResultado(resultado, valor1, valor2);
}

function calcularSoma(valor1, valor2) {
  return valor1 + valor2;
}

function exibirResultado(resultado, valor1, valor2) {
  const mensagem = `A soma de ${valor1} e ${valor2} = ${resultado}`;
  document.getElementById("resultado").textContent = mensagem;
}
