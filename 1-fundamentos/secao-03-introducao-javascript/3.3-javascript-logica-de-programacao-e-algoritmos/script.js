// 1 - Desenvolva o exercicio a seguir com o uso de funções:
// Considere a variável (balance), que representa a quantia em conta da pessoa cliente do TrybeBank e escreva quatro funções
// que:

let balance = 50;

// 1.1 Adiciona um valor ao balance

function depositaValor(deposito) {
  balance += deposito;
  return balance;
}

console.log(depositaValor(10));

// 1.2 Subtraia um valor do balance

function saqueValor(saque) {
  balance -= saque;
  return balance;
}

console.log(saqueValor(6));

// 1.3 Multiplique o valor do balance por uma taxa

function jurosRemuneratórios() {
  balance *= 1.06;
  return balance;
}

console.log(jurosRemuneratórios());

// 1.4 Divida o valor do balance

function divideValor(divisor) {
  balance /= divisor;
  return balance;
}

console.log(divideValor(2));


// 2 - Faça um programa para adicionar pessoas clientes ao array do Trybe Bank. A função deve se chamar addCustomer e
// receber um parâmetro do tipo string e, caso o parâmetro não seja do tipo string, imprimir a mensagem: "O parâmetro
// passado deve ser do tipo string".

const trybeBankCustomers = ['oliva', 'Nat', 'Gus'];