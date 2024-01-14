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

// Exercício 5
// Crie uma função que retorne 6 números aleatórios para serem apostados na megasena:

const generateNumbers = () => {
  let numbers = [];
  let drawnNumbers = [];
  
  for (let index = 1; index <= 6; index +=1) {
    const randomNumber = Math.floor(Math.random() * 60) + 1;
    let contador = 0;
    drawnNumbers.push(randomNumber);
    
    for (let i = 0; i < drawnNumbers.length; i +=1) {
      
      if (randomNumber === drawnNumbers[i]) {
        contador+=1;
        if (contador === 1) {
          numbers.push(randomNumber);
        }
      }
    }

  }
  return numbers.sort((a, b) => a - b);
}

console.log(generateNumbers());

// poderia usar a função includes mas quis testar outra forma de chegar ao mesmo resultado sem ela.

//Exercício 6
// Com base no objeto abaixo,faça os exercícios a seguir:

const reader = {
  name: 'Julia',
  lastName: 'Pessoa',
  age: 21,
  favoriteBooks: [
    {
      title: 'O Senhor dos Anéis - a Sociedade do Anel',
      author: 'J. R. R. Tolkien',
      publisher: 'Martins Fontes',
    },
  ],
};

// 6.1 - Acesse as chaves name, LastName e title e exiba informações em um console.log() no seguinte formator "O livro
// favorito de Julia Pessoa se chama 'O Senhor dos Anéis - a Sociedade do Anel.'."

const nome = reader.name;
const sobreNome = reader.lastName;
const titulo = reader.favoriteBooks[0].title;

const msg = (name, lastName, title) => {
  return `O livro favorito de ${name} ${lastName} se chama '${title}'.`
};

console.log(msg(nome, sobreNome, titulo));


// 6.2 - Adicione um novo livro favorito na chave favoriteBooks, que é um array de objetos. Atribua a essa chave um objeto
// que contenha as seguintes informações:

let array = {
  title: 'Harry Potter e o Prisioneiro de Azkaban',
  author: 'JK Rowling',
  publisher: 'Rocco',
};

const addFavoriteBooks = (book) => {
  reader.favoriteBooks.push(book);
  return reader;
} 

console.log(addFavoriteBooks(array));

// 6.3 - Acesse as chaves name e favoriteBooks e faça um console.log() no seguinte formato:

// "Julia tem {quantidade} livros favoritos."

// {quantidade} corresponde à quantidade de livros favoritos, sendo um número gerado automaticamente pelo seu código.
// Caso a quantidade seja igual a 1, a frase deve ser:

// "Julia tem 1 livro favorito."

const numberOfBooks = (person) => {
  let amount = Math.floor(Math.random() * 10) + 1;
  if (amount != 1) {
    return `${person} tem ${amount} livros favoritos.`;
  }
    return `${person} tem 1 livro favorito.`;
};

console.log(numberOfBooks(nome));

// Exercício 7
// Imagine que você seja responsável por cuidar do sistema de entrega de um restaurante e que precise enviar mensagens com
// as informações da compra. Para isso, use o seguinte código:

const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },

  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },

  payment: {
    total: 60,
  },
};

// 7.1 - Complete a função customerInfo() para que seu retorno seja: Olá, Ana Silveira, entrega para: Rafael Andrade,
// Telefone: 11-98763-1416, Rua das Flores, Número: 389, AP: 701.

const customerInfo = (fullOrder) => {
  return `Olá, ${fullOrder.order.delivery.deliveryPerson}, entrega para: ${fullOrder.name},
  Telefone: ${fullOrder.phoneNumber}, ${fullOrder.address.street}, Número: ${fullOrder.address.number}, AP: ${fullOrder.address.apartment}`
}

console.log(customerInfo(order));

// De olho na dica: Note que o parâmetro da função já está sendo passado na chamada da função.

// 7.2 - Complete a função orderModifier () para que seu retorno seja: Olá, Luiz Silva, o valor total de seu pedido de
// marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.
// . Modifique o nome da pessoa compradora para Luiz Silva;
// . Modifique o valor total da compra para R$ 50,00.

const orderModifier = (fullOrder) => {
  fullOrder.name = 'Luiz Silva';
  fullOrder.payment.total = 50;
  let name = fullOrder.name;
  let marguerita = Object.keys(fullOrder.order.pizza)[0];
  let pepperoni = Object.keys(fullOrder.order.pizza)[1];
  let coke = Object.values(fullOrder.order.drinks.coke)[0];
  let payment = Object.values(fullOrder.payment)[0];

  return `Olá, ${name}, o valor total de seu pedido de
  ${marguerita}, ${pepperoni} e ${coke} é R$ ${payment.toFixed(2)}.`
}

console.log(orderModifier(order));

// Exercício 8
// Suponha que você esteja trabalhando para uma escola e precise fazer algumas atualizações no sistema. Para isso, considere
// a seguinte base de dados:

const school = {
  
  lessons: [
    
    {
      course: 'Python',
      students: 20,
      professor: 'Carlos Patrício',
      shift: 'Manhã',
    },
    {
      course: 'Kotlin',
      students: 10,
      professor: 'Gabriel Oliva',
      shift: 'Noite',
    },
    {
      course: 'JavaScript',
      students: 738,
      professor: 'Gustavo Caetano',
      shift: 'Tarde',
    },
    {
      course: 'MongoDB',
      students: 50,
      shift: 'Noite',
    },
  
  ]

};

// 8.1 - Crie uma função que obtenha o valor da chave de acordo com sua posição no array.

// lista todas as chaves:
const valorDaChave = (objeto) => {
  let elemento = objeto.lessons;
  let resultado = [];

  for (let index = 0; index < elemento.length; index +=1) {
   let valor = elemento[index];
    resultado.push(Object.values(valor));
  }
  return resultado;
} 

console.log(valorDaChave(school));

// lista uma chave de acordo com uma posição específica

const obterValorEspecifico = (obj, index) => {
  const resultado = Object.values(obj.lessons[index]);
  return resultado;
}

console.log(obterValorEspecifico(school, 0));



// 8.2 - Crie uma função que retorne a soma do número total de estudantes em todos os cursos.

const somaTotal = () => {
  let array = valorDaChave(school);
  let result = 0;

  for (let index = 0; index < array.length; index +=1) {
    const element = array[index][1];
    result += element;
  }
  return result;
}

console.log(somaTotal());

// 8.3 - Crie uma função que verifica se uma determinada chave existe em todos os elementos do array (lessons). O retorno
// deve ser um booleano (true ou false). Essa função deve possuir dois parâmetros: o objeto e o nome da chave.

const verificaChave = (objeto, chave) => {
  const elemento = objeto.lessons;
  const contem = elemento.every(e => e.hasOwnProperty(chave));
  return contem;
}

console.log(verificaChave(school,'course'));

// 8.4 - Crie uma função para alterar o turno para noite no curso de Python. Essa função deve ter três parâmetros: a base de
// dados a ser modificada, o nome do curso e o novo valor da chave.

const alteraTurno = (base, curso, turno) => {
  const elemento = base.lessons;
  for (let index = 0; index < elemento.length; index += 1) {
    if (elemento[index].course === curso) {
      elemento[index].shift = turno;
    }
  }
  return base;
}

console.log(alteraTurno(school, 'Python', 'Noite'));

// Exercício 9
// Por meio do array de frutas chamado (basket), crie um objeto que contenha o nome da fruta como chave e a quantidade de
// vezes que ela aparece no array como valor.
// Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Uva'] deverá retornar:


const retorno = { 
  Melancia: 3,
  Abacate: 1,
  Uva: 1 
}

// Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x abacates...

// O array basket a ser utilizado:

const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

const contadorDeFrutas = (conjunto) => {
  const estoqueDeFrutas = {};

  for (let index = 0; index < conjunto.length; index +=1) {

    let contem = estoqueDeFrutas.hasOwnProperty(conjunto[index]);
    
    if (contem) {
      estoqueDeFrutas[conjunto[index]] +=1;
    } else {
      estoqueDeFrutas[conjunto[index]] = 1;
    }
  }

  return estoqueDeFrutas;
}

console.log(contadorDeFrutas(basket));