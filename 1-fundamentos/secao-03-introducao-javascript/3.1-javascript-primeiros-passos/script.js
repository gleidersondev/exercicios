// 1 - Elabore alguns códigos para cada operação aritmética e imprima o resultado no console usando o console.log:

let num1 = 18;

let num2 = 6;

// Adição (num1 + num2)

let adicao = num1 + num2;

console.log(adicao);

// Subtração (num1 - num2)

let subtracao = num1 - num2;

console.log(subtracao);

// Multiplicação (num1 * num2)

let multiplicacao = num1 * num2;

console.log(multiplicacao);

// Divisão (num1 / num2)

let divisao = num1 / num2;
console.log(divisao);

// Módulo (num1 + num2)

let modulo = num1 % num2

console.log(modulo);


// 2 - Utilize o IF / ELSE para retornar o maior de três números

let value1 = 6;

let value2 = 3;

let value3 = 6;

let higherNumber = 0;

if (value1 > value2 && value1 > value3) {
  higherNumber = value1;
  console.log(value1);
} else if (value2 > value1 && value2 > value3) {
  higherNumber = value2;
  console.log(value2);
} else {
  higherNumber = value3;
  console.log(value3);
};

// 3 - Verifique se um número é positivo, negativo ou zero.

let checkNumber1 = 17;

if (checkNumber1 === 0) {
  console.log('Esse número é zero');
} else if (checkNumber1 > 0) {
  console.log('Esse número é positivo');
} else {
  console.log('Esse número é negativo');
}

// 4 - Crie um programa que determine se um número é par ou ímpar.

if (checkNumber1 % 2 == 0) {
  console.log('Esse número é par');
} else {
  console.log('Esse número é impar');
}

// 5 - Desenvolva um código que indique se um ano é bissexto ou não.

let year = 2000;

let result = '';

if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0 ) {
  result = 'É um ano bissexto';
  console.log(result);
} else {
  result = 'Não é um ano bissexto';
  console.log(result);
}

// 6 - Elabore um programa que verifique se um número é múltiplo de 3 e de 5 ao mesmo tempo.

let checkMultiple = 15;

let resultMultiple = '';

if (checkMultiple % 3 === 0 && checkMultiple % 5 === 0) {
  resultMultiple = 'É multiplo de 3 e 5';
  console.log(resultMultiple);
} else {
  resultMultiple = 'Não é multiplo de 3 e 5'
  console.log(resultMultiple);
}

// 7 - Desenvolva um código que calcule o preço final de um produto, considerando um desconto de 10% se o valor for maior que R$ 100,00.

let priceProduct = 101.00;

let finalPrice = 0;

if (priceProduct > 100) {
  finalPrice = priceProduct * (1 - 0.1);
  console.log("O preço final com desconto é: " + finalPrice);
} else {
  finalPrice = priceProduct;
  console.log("O valor a pagar é " + finalPrice );
}

// 8 - Faça um programa que classifique um aluno com base em sua nota, considerando as faixas de A (de 90 até 100), B (de 80 a 89), C (de 70 a 79), D (de 60 a 69) e F (abaixo de 60).

let testGrade = 100;

if (testGrade <= 100 && testGrade >= 90) {
  console.log("Sua faixa é A");
} else if (testGrade < 90 && testGrade >= 80) {
  console.log("Sua faixa é B");
} else if (testGrade < 80 && testGrade >= 70) {
  console.log("Sua faixa é C");
} else if (testGrade < 70 && testGrade >= 60) {
  console.log("Sua faixa é D");
} else if (testGrade < 60 && testGrade >= 0) {
  console.log("Sua faixa é F");
} else {
  console.log("Essa nota não é válida");
};