const mainCalendar = document.querySelector('#main-calendar');
console.log('eu');
console.log(mainCalendar);
// Lógica mural de compromissos (wall-content)



// Lógica do calendário (calendar-content)

const diasDoMes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]

const populaCalendario = () => {
  for (let i = 0; i < diasDoMes.length; i +=1) {
    const div = document.createElement('div');
    let elemento = diasDoMes[i];
    div.innerText = elemento;
    mainCalendar.appendChild(div);
  }
}

populaCalendario();



// Lógica do calendário seguinte (small-calendar-content)