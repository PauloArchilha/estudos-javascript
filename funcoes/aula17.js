let pessoa = {
    nome: "Paulo",
    sexo: "M",
    peso: 80.5,
    engordar(p) {
        this.peso += p;
    },
};

pessoa.engordar(1);
console.log(`${pessoa.nome} pesa ${pessoa.peso}`);
