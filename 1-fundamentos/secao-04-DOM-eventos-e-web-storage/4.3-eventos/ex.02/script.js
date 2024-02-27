const btnStartRace = document.getElementById('start-race');
const carSection = document.getElementById('car-section');
const finish = document.getElementById('finish');

let inMotion = false; // em movimento

// criando um elemento de áudio e adicionando no final do elemento id = finish
const elementAudio = document.createElement('audio');
finish.insertAdjacentElement('afterend', elementAudio);


// tocar música do jogo iniciado
const gamePlayMusic = () => {
  elementAudio.src = './songs/game-play-music.mp3';
  elementAudio.play();
};

// mover estrada/iniciar jogo
const moveRoad = () => {
  if (!inMotion) {
    carSection.style.backgroundRepeat = 'repeat-x';
    carSection.style.animation = 'moverEstrada 5s linear infinite';
    inMotion = true;
    btnStartRace.textContent = "Pause";
    gamePlayMusic();
  } else {
    inMotion = false;
    carSection.style.removeProperty('backgroundRepeat');
    carSection.style.removeProperty('animation');
    btnStartRace.textContent = "Continue";
    elementAudio.pause();
  }
};

// tocar música inicial
const initialMusic = () => {
  elementAudio.src = './songs/initial-music.mp3';
  elementAudio.play();
};

// evento de clicar no botão e iniciar jogo
btnStartRace.addEventListener('click', moveRoad);

window.onload = initialMusic;




