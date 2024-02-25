const btnStartRace = document.getElementById('start-race');
const carSection =document.getElementById('car-section');
const getInitialAudio = document.querySelector('[src="./songs/initial-music.mp3"]');
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

const initialMusic = () => {
  const audio = new Audio('./songs/initial-music.mp3');
  audio.play();

  console.log(audio);
}

window.onload = initialMusic;
