const drums = document.querySelectorAll('.drum');
drums.forEach((el) => {
  el.addEventListener('click', () => {
    playMusic(el.innerHTML);
  });
});

document.addEventListener('keydown', (e) => {
  const { key } = e;
  playMusic(key);
});

const playMusic = (key) => {
  const tom1 = new Audio('./sounds/tom-1.mp3');
  const tom2 = new Audio('./sounds/tom-2.mp3');
  const tom3 = new Audio('./sounds/tom-3.mp3');
  const tom4 = new Audio('./sounds/tom-4.mp3');
  const crash = new Audio('./sounds/crash.mp3');
  const kickBass = new Audio('./sounds/kick-bass.mp3');
  const snare = new Audio('./sounds/snare.mp3');

  switch (key) {
    case 'w':
      tom1.play();
      break;
    case 'a':
      tom2.play();
      break;
    case 's':
      tom3.play();
      break;
    case 'd':
      tom4.play();
      break;
    case 'j':
      crash.play();
      break;
    case 'k':
      kickBass.play();
      break;
    case 'l':
      snare.play();
      break;

    default:
      break;
  }
  animateButton(key);
};

const animateButton = (key) => {
  const activeBtn = document.querySelector(`.${key}`);
  activeBtn.classList.add('pressed');
  setTimeout(() => {
    activeBtn.classList.remove('pressed');
  }, 200);
};
