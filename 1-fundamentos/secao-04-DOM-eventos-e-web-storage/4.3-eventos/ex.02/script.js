const btnStartRace = document.getElementById('start-race');
const carSection = document.getElementById('car-section');
const finish = document.getElementById('finish');
const elementHtml = document.querySelector('html');
const headerContent = document.getElementById('header-content');
// const playGame = document.querySelectorAll('.play-game');

let inMotion = false; // em movimento
let musicPaused = false;
let playInitialMusic = false;
let btnClassPlayGame = 0;

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
    
    if (!musicPaused) {
      gamePlayMusic();
    } else {
      elementAudio.play();
    };

    if (inMotion && btnClassPlayGame <= 1) {
      carAdvance()
    }
    
  } else {
    inMotion = false;
    carSection.style.removeProperty('backgroundRepeat');
    carSection.style.removeProperty('animation');
    btnStartRace.textContent = "Continue";
    elementAudio.pause();
    musicPaused = true;
  }
};

// tocar música inicial
const initialMusic = () => {
  if (!playInitialMusic) {
    playInitialMusic = true;
    elementAudio.src = './songs/initial-music.mp3';
    elementAudio.play();
  }
};

// evento de clicar no botão e iniciar jogo
btnStartRace.addEventListener('click', moveRoad);

// evento de ao mover o mouse sobre o body tocar a música inicial
elementHtml.addEventListener('mouseenter', initialMusic);

// lógica para mover o carro 

const carAdvance = () => {
  const btnAdvance = document.createElement('button');
  btnAdvance.classList.add('play-game');
  headerContent.appendChild(btnAdvance);
  const playGame = document.querySelectorAll('.play-game');
  btnClassPlayGame = playGame.length;
  btnAdvance.textContent = 'Avançar';
};



// continuar logica do botão , ele esta criando varios