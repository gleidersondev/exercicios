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


