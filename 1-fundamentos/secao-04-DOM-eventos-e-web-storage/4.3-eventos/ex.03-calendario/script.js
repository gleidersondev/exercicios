const conteudoCalendario = document.querySelector('#calendar-content');
const calendarioPrincipal = document.querySelector('#main-calendar');
const diadeHoje = document.querySelector('#todays-day');
const calendario = document.querySelector('#calendar');
const mesConteudoCalendario = document.querySelector('#month');
const iniciaisDosDias = document.querySelector('#initials-of-day');
const dataAtual = new Date();

const diasDoMes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

const ultimoDiaDoMesCorrente = () => {
  const ultimoDia = new Date(dataAtual.getFullYear(), dataAtual.getMonth() + 1, 0);
  return ultimoDia.getDate();
}; 


// Lógica mural de compromissos (wall-content)



// Lógica do calendário (calendar-content)

const mesAtualConteudoCalendario = () => {
  mesConteudoCalendario.textContent = meses[dataAtual.getMonth()];
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
  dataAtual.setDate(1);
  const primeiroDiaDaSemana = dataAtual.getDay();
// for para criar as divs com ids e classe
  for (let i = 0; i <= 48; i +=1) {
    const div = document.createElement('div');
    calendario.appendChild(div);
    div.classList.add(`items-days`);
    div.id = `item-${i}`;
  }
//  for para pegar a div com mesmo numero do dia
  for (let c = primeiroDiaDaSemana; c <= 31; c +=1) {
    const item = document.querySelector(`#item-${c}`);
    item.textContent = c;
  }
}


populaCalendario();

console.log(dataAtual.getDay());




// Próximo: Lógica para enquadrar a os dias do mês ao da semana