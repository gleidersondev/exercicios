const conteudoCalendario = document.querySelector('#calendar-content');
const calendarioPrincipal = document.querySelector('#main-calendar');
const diadeHoje = document.querySelector('#todays-day');
const calendario = document.querySelector('#calendar');
const mesConteudoCalendario = document.querySelector('#month');
const iniciaisDosDias = document.querySelector('#initials-of-day');
const dataAtual = new Date();
const retrocederMesCalendarioPrincipal = conteudoCalendario.querySelector('#go-back-month');

// let retroceder = uma função que altere a dataAtual.getMonth para o mes anterior e altere automaticamnte a função encontrarPrimeiroDiaDoMes dataAtual.setDate(1)
const mesAtivo = dataAtual.getMonth();
console.log(mesAtivo);


const diasDoMes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

const ultimoDiaDoMesCorrente = () => {
  const ultimoDia = new Date(dataAtual.getFullYear(), dataAtual.getMonth() + 1, 0);
  return ultimoDia.getDate();
}; 

const ultimoDia = ultimoDiaDoMesCorrente();
console.log('O último dia do mês é', ultimoDia);


const encontrarPrimeiroDiaDaSemana = () => {
  dataAtual.setDate(1); //definindo o dia do mês para o primeiro dia do mês corrente
  const primeiroDiaDaSemana = dataAtual.getDay(); //pegando o dia especificado acima
  return primeiroDiaDaSemana;
};

let primeiroDiaDaSemana = encontrarPrimeiroDiaDaSemana();
console.log('o primeiro dia da semana é', primeiroDiaDaSemana);

// Lógica mural de compromissos (wall-content)



// Lógica do calendário (calendar-content)

const mesAtualConteudoCalendario = () => {
  return mesConteudoCalendario.textContent = meses[dataAtual.getMonth()];
};

mesAtualConteudoCalendario();

const diadeHojeConteudoCalendario = () => {
  diadeHoje.textContent = diasDaSemana[dataAtual.getDay()];
}

diadeHojeConteudoCalendario();

const inicialDiasConteudoCalendario = () => {
  for (let i = 0; i < diasDaSemana.length; i +=1) {
    const iniciais = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const div = document.createElement('div');
    const strong = document.createElement('strong');
    strong.textContent = iniciais[i];
    
    div.appendChild(strong);
    iniciaisDosDias.appendChild(div);
    div.classList.add('initials');
  } 
}

inicialDiasConteudoCalendario();


const populaCalendario = () => {
// for para criar as divs com ids e classe
  for (let i = 0; i <= 34; i +=1) {
    const div = document.createElement('div');
    calendario.appendChild(div);
    div.classList.add(`items-days`);
    div.id = `item-${i}`;
  }

  let dias = 0;

  if ((ultimoDia - primeiroDiaDaSemana) < ultimoDia) {
    dias =  ultimoDia + primeiroDiaDaSemana;
  } else {
    dias = ultimoDia;
  }
  
//  for para pegar a div com mesmo numero do primeiro dia e distribuir os dias seguintes
  for (let c = primeiroDiaDaSemana; c <= ultimoDia; c +=1) {
    const item = document.querySelector(`#item-${c}`);
    item.textContent = c;
  }
}

populaCalendario();

const retrocederMes = (event) => {

  const mes = dataAtual.getMonth();

  for (let i = mes; i < meses.length && i >= 0; i -= 1) {
    const retrocedeu = meses[mes - 1];
    // implementar essa função para que ela utilize popula calendari
    
  }
}

retrocederMesCalendarioPrincipal.addEventListener('click', retrocederMes);
