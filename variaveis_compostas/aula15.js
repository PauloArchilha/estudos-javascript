let num = [5, 10, 8, 2, 9, 3];
num[0] = 1; // substitui na posição
num.push(0); // adiciona no final
num.indexOf(10); // retorna a chave onde está o valor, se não for encontrado retorna valor -1
num.length; // comprimento do array
num.sort(); // coloca todos elementos em ordem

for (n in num) {
    console.log(`A posição ${n} tem o valor ${num[n]}`);
}

//
console.log(`Do menor para o maior : ${num.sort((a, b) => a - b)}`);
console.log(`Do maior para o menor : ${num.sort((a, b) => b - a)}`);

for (n in num.sort((a, b) => a - b)) {
    console.log(`A posição ${n} tem o valor ${num[n]}`);
}
