// Exercícios de Arrays

// 1 - Altere o valor da variável menuServices para que ela passe a ter o valor "Serviços". Isso deve ser feito através da variável menu.

const menu = ['Home', 'Serviços', 'Portifólio', 'Links']

const menuServices = menu[1];

console.log(menuServices);

// 2 - Adicione o valor 'Contato' no final do array menu

menu.push('Contato');

console.log(menu);

// 



// Exercícios de FOR

// 1 - Utilize o FOR para imprimir os elementos da lista groceryList através do console.log

const groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia', 'Macarrão'];

for (let index = 0; index < groceryList.length; index +=1) {
  const list = groceryList[index];
  console.log(list);
}

// 2 - Considere esse array para realizar os próximos exercícios:

 const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//   a. Percorra o array imprimindo todos os valores contidos nele com a função console.log().

for (let index2 = 0; index2 < numbers.length; index2 +=1) {
  const arrayNumbers = numbers[index2];
  console.log(arrayNumbers);
}

//   b. Some todos os valores contidos no array e imprima o resultado.

let sumOfArray = 0;

for (let index3 = 0; index3 < numbers.length; index3 +=1) {
  sumOfArray += numbers[index3];
}

console.log(sumOfArray);


//   c. Calcule e imprima a média aritmética dos valores contidos no array. A média aritmética é o resultado da soma de todos
//   os elementos dividido pelo número total de elementos.

let arithmeticMean = sumOfArray / numbers.length;

console.log('A média aritmética do array é: ', arithmeticMean);


//   d. Com base no código que acabou de gerar, referente ao cálculo da média aritmética, faça com que: caso o valor final seja
//   maior que 20, imprima a mensagem "O valor da média aritmética é maior que 20"; e, caso não seja maior que 20, imprima
//   a mensagem "O valor da média aritmética é menor ou igual a 20".

if (arithmeticMean > 20) {
  console.log('O valor da média aritmética é maior que 20');
} else {
  console.log('O valor da média aritmética é menor ou igual a 20');
}

//   e. Utilizando (for), descubra o maior valor contido no array e imprima-o.
let largestNumber = 0;

for (let index4 = 0; index4 < numbers.length; index4 +=1) {
  if (numbers[index4] >= largestNumber) {
    largestNumber = numbers[index4];
  }
}

console.log('O maior número é: ', largestNumber);

//   f. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a
//   mensagem: "Nenhum valor ímpar encontrado".
let evenNumbers = [];

for (let index5 = 0; index5 < numbers.length; index5 +=1) {
  if (numbers[index5] % 2 === 0) {
    evenNumbers.push(numbers[index5]);
  };
}

if (evenNumbers.length) {
  console.log('Existem ', evenNumbers.length, ' números pares: ', evenNumbers);
} else {
  console.log('Nenhum valor ímpar encontrado');
}

// 3 - Crie um algoritimo que imprima na tela o fatorial de 10

let fatorial = 10;

for (let index6 = (fatorial -1); index6 > 0; index6 -=1) {
  fatorial *= index6;
}

// 4 - Desafio de inverter palavra:
// Utilize a estrutura de repetição FOR para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra
// "banana" para "ananab". De olho na dica 39: Pesquise sobre os seguintes métodos: (split()), reverse() e join();

