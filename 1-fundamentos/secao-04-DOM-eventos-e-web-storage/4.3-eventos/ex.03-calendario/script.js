const conteudoCalendario = document.querySelector('#calendar-content');
const calendarioPrincipal = document.querySelector('#main-calendar');
const diadeHoje = document.querySelector('#todays-day');
const calendario = document.querySelector('#calendar');
const mesConteudoCalendario = document.querySelector('#month');
const iniciaisDosDias = document.querySelector('#initials-of-day');
const dataAtual = new Date();

const diasDoMes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']


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

  const ul = document.createElement('ul');
  calendario.appendChild(ul);
  const tagUl = document.querySelector('[id="calendar"] ul')

  for (let i = 0; i <= 49; i +=1) {
    const li = document.createElement('li');
    const diaDaSemana = dataAtual.getDay();

    li.classList.add(i);
    tagUl.appendChild(li);

    

    // if (i === diaDaSemana) {
    //   li.textContent = i;
    //   calendario.appendChild(li);
    //   li.classList.add('days-month');
      
      
    // }
    
    
  }

  // for (let i = 0; i < diasDoMes.length; i +=1) {
  //   const li = document.createElement('li');
  //   let elemento = diasDoMes[i];
  //   li.innerText = elemento;
  //   calendario.firstElementChild.appendChild(li);
  //   li.classList.add('.day');
  // }
}

populaCalendario();

console.log(dataAtual.getDay());




// Lógica do calendário seguinte (small-calendar-content)