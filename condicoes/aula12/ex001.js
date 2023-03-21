let idade = 65;

if (idade < 16) {
  console.log(`Sua idade é de ${idade} anos, você ainda não pode votar!`);
} else if (idade < 18 || idade >= 65) {
  console.log(`Sua idade é de ${idade} anos, seu voto é opcional!`);
} else if (idade >= 18) {
  console.log(`Sua idade é de ${idade} anos, seu voto é obrigatório!`);
}
