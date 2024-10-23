const conteudoCalendario = document.querySelector('#calendar-content');
const calendarioPrincipal = document.querySelector('#main-calendar');
const diadeHoje = document.querySelector('#todays-day');
const calendario = document.querySelector('#calendar');
const mesConteudoCalendario = document.querySelector('#month');
const mesAtualConteudoPostIt = document.querySelector('#month-postit');
const iniciaisDosDias = document.querySelector('#initials-of-day');
const avançarProximoMes = document.querySelector('#advance-month');
let dataAtual = new Date();
const retrocederMesCalendarioPrincipal = conteudoCalendario.querySelector('#go-back-month');
const retrocederMesMuralCompromissos = document.querySelector('#go-back-month-postit');
const postIts = document.querySelector('#post-its');
const anoAtivoMuralCompromissos = document.querySelector('#year-postit');
const avancarProximoMesMuralCompromissos = document.querySelector('#advance-month-postit');

// let retroceder = uma função que altere a dataAtual.getMonth para o mes anterior e altere automaticamnte a função encontrarPrimeiroDiaDoMes dataAtual.setDate(1)

const diasDoMes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

let ultimoDia = 0;

let primeiroDiaDaSemana = 0;

// Função para encontra o último dia do mês corrente >> retorna numberr
const ultimoDiaDoMesCorrente = () => {
  const ultimoDiaDoMes = new Date(dataAtual.getFullYear(), dataAtual.getMonth() + 1, 0);
  
  ultimoDia = ultimoDiaDoMes.getDate();
};

ultimoDiaDoMesCorrente();

// let ultimoDia = ultimoDiaDoMesCorrente();
console.log('O ultimo dia do mês corrente é', ultimoDia);

// Função para encontra o primeiro dia da semana do mês corrente >> retorna number
const encontrarPrimeiroDiaDaSemana = () => {
  dataAtual.setDate(1); //definindo o dia do mês para o primeiro dia do mês corrente
  primeiroDiaDaSemana = dataAtual.getDay(); //pegando o dia da semana especificado acima
  // return primeiroDiaDaSemana;
};

// let primeiroDiaDaSemana = encontrarPrimeiroDiaDaSemana();
console.log('primeiroDiaDaSemana é', primeiroDiaDaSemana);


// LÓGICA MURAL DE COMPROMISSOS (WALL-CONTENT)
let dataAtualMuralCompromissos = new Date();

mesAtualConteudoPostIt.textContent = meses[dataAtualMuralCompromissos.getMonth()]; //Preenche mês ativo no mural de compromissos

let mesAtivoMuralCompromissos = dataAtualMuralCompromissos.getMonth();
console.log('O mes ativo no mural de compromisso e *****', mesAtivoMuralCompromissos);

let anoAtualMuralCompromissos = dataAtualMuralCompromissos.getFullYear();
anoAtivoMuralCompromissos.textContent = anoAtualMuralCompromissos;
console.log('O ano do mural de compromissos é', anoAtualMuralCompromissos);


// retrocede mês no mural compromissos
const retrocederPostIt = () => {

  dataAtualMuralCompromissos = new Date(dataAtualMuralCompromissos.getFullYear(), dataAtualMuralCompromissos.getMonth() - 1);

  mesAtualConteudoPostIt.textContent = meses[dataAtualMuralCompromissos.getMonth()];

  anoAtivoMuralCompromissos.textContent = dataAtualMuralCompromissos.getFullYear();

};

console.log(`mes ativo ${dataAtualMuralCompromissos.getMonth()}`);


retrocederMesMuralCompromissos.addEventListener('click', retrocederPostIt);

// avança mês no mural compromissos 
const avancaPostIt = () => {

  dataAtualMuralCompromissos = new Date(dataAtualMuralCompromissos.getFullYear(), dataAtualMuralCompromissos.getMonth() + 1);

  mesAtualConteudoPostIt.textContent = meses[dataAtualMuralCompromissos.getMonth()];

  anoAtivoMuralCompromissos.textContent = dataAtualMuralCompromissos.getFullYear();

};













// LÓGICA DO CALENDÁRIO PRINCIPAL (CALENDAR-CONTENT)

// Função para aparecer o Mês ativo na div id month
const mesAtualConteudoCalendario = () => {
  mesConteudoCalendario.textContent = meses[dataAtual.getMonth()];
};

mesAtualConteudoCalendario();

// Função para aparecer o dia por extenso na div id todays-day >> retorna string
const diadeHojeConteudoCalendario = () => {
  const dia = new Date();
  diadeHoje.textContent = diasDaSemana[dia.getDay()];
}

diadeHojeConteudoCalendario();

// Função que coloca as iniciais dos dias da semana
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

// Função para colocar as divs e os dias no calendários
const populaCalendario = () => {
  calendario.innerHTML = '';

// for para criar as divs com ids e classe
  for (let i = 0; i <= 41; i +=1) {
    const div = document.createElement('div');
    calendario.appendChild(div);
    div.classList.add(`items-days`);
    div.id = `item-${i}`;
  };

  let dias = 0;
  let contador = 0;

  if (ultimoDia === 31) { 
    dias = 30 + primeiroDiaDaSemana;
  } else if (ultimoDia === 30) {
    dias = 29 + primeiroDiaDaSemana;
  } else if (ultimoDia === 29) {
    dias = 28 + primeiroDiaDaSemana;
  } else {
    dias = 27 + primeiroDiaDaSemana;
  };

//  for para pegar a div com mesmo numero do primeiro dia e distribuir os dias seguintes
  for (let c = primeiroDiaDaSemana; c <= dias; c +=1) {
    const item = document.querySelector(`#item-${c}`);
    item.textContent = diasDoMes[contador];
    contador +=1;
  }
};

populaCalendario();

// Função para retorceder mês
const retrocederMes = () => {
  dataAtual = new Date(dataAtual.getFullYear(), dataAtual.getMonth() - 1);
  console.log('eu sou retroceder mês', dataAtual.getMonth());
  
  atualizaCalendario();
};

// Função para avançar mês
const avançarMes = () => {
  dataAtual = new Date(dataAtual.getFullYear(), dataAtual.getMonth() + 1);

  atualizaCalendario();
};

retrocederMesCalendarioPrincipal.addEventListener('click', retrocederMes);
avançarProximoMes.addEventListener('click', avançarMes);

// Função para atualizar calendário após clicar em retroceder
const atualizaCalendario = () => {
  ultimoDiaDoMesCorrente();
  encontrarPrimeiroDiaDaSemana();
  mesAtualConteudoCalendario();
  diadeHojeConteudoCalendario();
  populaCalendario();
};
