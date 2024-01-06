// Exercício 1
// Crie uma varlável chamada (player e atribua a ela um objeto que reúna todas as informações das variáveis listadas.
// 1 const nane = Marta';
// 2 const lastName = 'Silva';
// 3 const age = 34;
// 4 const nedals = ( golden: 2, sllver : 3 };
// 5 const bestInThelorld = (2006, 2007, 2008, 2009, 2010, 2018];

const player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  nedals: { golden: 2, sllver : 3 },
  bestInThelorld: [2006, 2007, 2008, 2009, 2010, 2018]
}

// Exercício 2
// Acesse as chaves name, LastName e age por meio da sintaxe meuobjeto.chave, concatene as informações e armazene na
// variável message no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

const message = 'A jogadora ' + player.name + ' ' + player.lastName + ' ' + 'tem ' + player.age + ' de idade.';
console.log(message);


// Exercício 3
// Acesse a chave bestInTheWorld por meio da sintaxe meuobjeto['chave'] e armazene na variável achievements a
// quantidade de titulos no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes.

const achievements = `A jogadora ${player['name']} ${player['lastName']} foi eleita a melhor do mundo por ${player['bestInThelorld'].length} vezes`;

console.log(achievements);

// Exercício 4
// Crie uma função para adicionar as propriedades "email", "fone", "useGithub" e "linkedIn" ao objeto customer

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Software Engineer',
};

const addProperties = (object, key, value) => {
  if (object !== 'undefined') {
    object[key] = value;
    return object;
  } else {
    return `O objeto ${object} não existe`
  }
}

console.log( addProperties(customer, 'email', 'batatinha@gmail.com'));
console.log( addProperties(customer, 'fone', '+553299999-9999'));
console.log( addProperties(customer, 'useGithub', 'github.batatinha'));
console.log( addProperties(customer, 'linkedIn', 'linkedIn.batatinha'));