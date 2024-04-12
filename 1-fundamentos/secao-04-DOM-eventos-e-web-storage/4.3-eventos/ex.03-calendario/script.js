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


const ul = document.createElement('ul'); 
calendario.appendChild(ul);


const populaCalendario = () => {
  for (let i = 0; i < diasDoMes.length; i +=1) {
    const li = document.createElement('li');
    let elemento = diasDoMes[i];
    li.innerText = elemento;
    calendario.firstElementChild.appendChild(li);
    li.classList.add('.day');
  }
}

populaCalendario();

console.log(dataAtual.getMonth() + 1);




// Lógica do calendário seguinte (small-calendar-content)