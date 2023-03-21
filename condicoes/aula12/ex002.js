const horaAtual = new Date().toLocaleTimeString("pt-BR", { hour12: false });

console.log(`Agora são exatamente ${horaAtual} horas!`);

if (horaAtual < 6) {
  console.log("Ainda está de madrugada!");
} else if (horaAtual < 13) {
  console.log("Bom dia!");
} else if (horaAtual < 18) {
  console.log("Boa tarde!");
} else {
  console.log("Boa noite!");
}
