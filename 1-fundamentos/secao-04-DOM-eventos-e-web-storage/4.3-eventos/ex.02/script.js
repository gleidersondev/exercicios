const btnStartRace = document.getElementById('start-race');
const carSection =document.getElementById('car-section');
let inMotion = false;

const moveRoad = () => {
  if (!inMotion) {
    carSection.style.backgroundRepeat = 'repeat-x';
    carSection.style.animation = 'moverEstrada 5s linear infinite';
    inMotion = true;
    btnStartRace.textContent = "Pause";
  } else {
    inMotion = false;
    carSection.style.removeProperty('backgroundRepeat');
    carSection.style.removeProperty('animation');
    btnStartRace.textContent = "Continue";
  }

}

btnStartRace.addEventListener('click', moveRoad);
