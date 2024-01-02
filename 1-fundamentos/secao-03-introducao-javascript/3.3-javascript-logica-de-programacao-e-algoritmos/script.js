// Desenvolva o exercicio a seguir com o uso de funções:
// Considere a variável (balance), que representa a quantia em conta da pessoa cliente do TrybeBank e escreva quatro funções
// que:

let balance = 50;

// 1. Adiciona um valor ao balance

function depositaValor(deposito) {
  balance += deposito;
  return balance;
}

console.log(depositaValor(10));

// 2. Subtraia um valor do balance

function saqueValor(saque) {
  balance -= saque;
  return balance;
}

console.log(saqueValor(6));

// 3. Multiplique o valor do balance por uma taxa

function jurosRemuneratórios() {
  balance *= 1.06;
  return balance;
}

console.log(jurosRemuneratórios());

// 4. Divida o valor do balance