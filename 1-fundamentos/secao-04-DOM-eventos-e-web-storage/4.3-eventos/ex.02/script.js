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

// tocar música do vencedor
const winnerSong = () => {
  elementAudio.src = './songs/racing-winner.mp3';
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
    if (btnStartRace.textContent != 'Novo Jogo') {
      inMotion = false;
      carSection.style.removeProperty('backgroundRepeat');
      carSection.style.removeProperty('animation');
      btnStartRace.textContent = "Continue";
      elementAudio.pause();
      musicPaused = true;
    }
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

// lógica para mover o carro:

// Cria botão avançar
const carAdvance = () => {
  const btnAdvance = document.createElement('button');
  btnAdvance.classList.add('play-game');
  headerContent.appendChild(btnAdvance);
  const playGame = document.querySelectorAll('.play-game');
  btnClassPlayGame = playGame.length;
  btnAdvance.textContent = 'Avançar';
  btnAdvance.id = 'advance';
};

// Movimentando carrinho
const car1 = document.getElementById('car1');
const car2 = document.getElementById('car2');

// Função de novo jogo
const newGame = () => {
  const btn = document.querySelector('#start-race');
  
  if (btn.textContent === 'Novo Jogo') {
    car1.style.marginLeft = 0;
    car2.style.marginLeft = 0;
    carSection.style.backgroundRepeat = '';
    carSection.style.animation = '';
    elementAudio.pause();
    btn.textContent = 'Iniciar Corrida!';
    console.log(inMotion);
    inMotion = false;
    btnClassPlayGame = 0;
  };
}

// Removendo botão Avançar após vitória
const beginningOfTheGame = () => {
  console.log('terminou');
  document.querySelector('#advance').remove();
  document.querySelector('#start-race').textContent = 'Novo Jogo';
} 

const advanceCar = (event) => {
  const contem = event.target;

  //defineo valor inicial da margem em um número inteiro
  const pixel = isNaN(parseInt(car1.style.marginLeft)) ? 0 : parseInt(car1.style.marginLeft);
  const pixel2 = isNaN(parseInt(car2.style.marginLeft)) ? 0 : parseInt(car2.style.marginLeft);

  //retorna o número que se refere ao limite que o carro deve chegar
  const screenWidth = (window.innerWidth - 310);

  if (contem.innerText === 'Avançar' && btnStartRace.textContent === 'Pause') {
    const pixelRandom1 = pixel + Math.ceil(Math.random() * 100);
    const pixelRandom2 = pixel2 + Math.ceil(Math.random() * 100);
    
    car1.style.marginLeft = pixelRandom1 + 'px';
    car2.style.marginLeft = pixelRandom2 + 'px';
    
    
    setTimeout(function() {
      if ((pixelRandom1 + 59) >= screenWidth) {
        winnerSong();
        alert('Carrinho Vermelho Ganhou!!!');
        beginningOfTheGame();
      } else if ((pixelRandom2 + 59) >= screenWidth) {
        winnerSong();
        alert('Carrinho Azul Ganhou!!!');
        beginningOfTheGame();
      } else if (((pixelRandom1 + 59) === (pixelRandom2 + 59)) >= screenWidth) {
        winnerSong();
        alert('Empate!!!');
        beginningOfTheGame();
      }
      
    }, 100)

  };

};

// evento de clicar no botão e iniciar jogo
btnStartRace.addEventListener('click', moveRoad);

// evento de ao mover o mouse sobre o body tocar a música inicial
elementHtml.addEventListener('mouseenter', initialMusic);

// evento para fazer o carrinho avançar ao clicar no botão
document.body.addEventListener('click', advanceCar);

// evento para começar um novo jogo ao apertar botão
document.querySelector('#start-race').addEventListener('click', newGame);

// falta implementar lógica para a música inicial sempre trocar ao abrir a página e ao iniciar novo jogo