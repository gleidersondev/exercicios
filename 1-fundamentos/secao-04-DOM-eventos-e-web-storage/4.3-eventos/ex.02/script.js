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

const advanceCar = (event) => {
  const contem = event.target;
  const pixel = isNaN(parseInt(car1.style.marginLeft)) ? '0' : parseInt(car1.style.marginLeft); //defineo valor inicial da margem em um número inteiro
  console.log('Valor de pixel inicial', pixel);
  const screenWidth = (window.innerWidth - 310); //retorna o número que se refere ao limite que o carro deve chegar

  console.log('Valor da chegada', screenWidth);

  if (contem.innerText === 'Avançar') {
    const pixelRandom1 = pixel + Math.ceil(Math.random() * 100);
    const pixelRandom2 = pixel + Math.ceil(Math.random() * 100);

    if ((pixelRandom1 + 57)< screenWidth) {
      // console.log('Carrinho vermelho moveu', pixelRandom1 + 150);
      car1.style.marginLeft = pixelRandom1 + 'px';
      console.log('Carrinho vermelho moveu', car1.style.marginLeft)

    } else {
      alert('Carrinho vermelho ganhou!!!')
      console.log('Final vermelho', car1.style.marginLeft = pixelRandom1 + 'px');
    };

    if ((pixelRandom2 + 57) < screenWidth) {
      // console.log('Carrinho azul moveu', pixelRandom2 + 150);
      car2.style.marginLeft = pixelRandom2 + 'px';
      console.log('Carrinho azul moveu', car2.style.marginLeft);
    } else {
      alert('Carrinho azul ganhou!!!')
      console.log('Final azul,', car2.style.marginLeft = pixelRandom2 + 'px');
    };
  };

};

document.body.addEventListener('click', advanceCar);