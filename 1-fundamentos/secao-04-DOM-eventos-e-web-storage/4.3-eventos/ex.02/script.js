const btnStartRace = document.getElementById('start-race');
const carSection = document.getElementById('car-section');
const finish = document.getElementById('finish');
const elementHtml = document.querySelector('html');
const headerContent = document.getElementById('header-content');

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


// lógica para mover o carro:

// Cria botão avançar
const carAdvance = () => {
  const btnAdvance = document.createElement('button');
  btnAdvance.classList.add('play-game');
  headerContent.appendChild(btnAdvance);
  const playGame = document.querySelectorAll('.play-game');
  btnClassPlayGame = playGame.length;
  btnAdvance.textContent = 'Avançar';
};

// Movimentando carrinho
const car1 = document.getElementById('car1');
const car2 = document.getElementById('car2');

// const btnAdvance = document.querySelectorAll('.play-game')[1];
// console.log(btnAdvance);

const advanceCar = (event) => {
  const contem = event.target;

  if (contem.innerText === 'Avançar') {
    // console.log('entrei no if');
    const pixel = parseInt(car1.style.marginLeft);
    car1.style.marginLeft = (!isNaN(pixel) ? pixel: 0) + Math.ceil(Math.random() * 20) + 'px';
    car2.style.marginLeft = (!isNaN(pixel) ? pixel: 0) + Math.ceil(Math.random() * 20) + 'px';

    // const pixel = (parseInt(isNaN(car1.style.marginLeft) ? car1.style.marginLeft: 0) + Math.ceil(Math.random() * 6)) + 'px';
    // console.log(pixel);
  } else {
    console.log('não foi ele');
  }

//   if (event.target) {
    
//   }

  // console.log(contem.innerText);
};

document.body.addEventListener('click', advanceCar);