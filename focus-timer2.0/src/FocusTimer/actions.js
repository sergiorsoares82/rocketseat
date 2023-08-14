import state from './state.js';
import * as timer from './timer.js';
import * as audios from './audios.js';

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running');

  timer.countDown();
}

export function stopRunning() {
  state.isRunning = false;
  document.documentElement.classList.remove('running');
  timer.updateDisplay();
}

export function playForest() {
  const isForestAudioPlaying = document
    .querySelector('#playForest')
    .classList.toggle('playing');
  console.log(!isForestAudioPlaying);
  if (isForestAudioPlaying) {
    audios.forestSound.play();
  } else {
    audios.forestSound.pause();
  }
}

export function playCoffeeShop() {
  const isCoffeeAudioPlaying = document
    .querySelector('#playCoffeeShop')
    .classList.toggle('playing');
  if (isCoffeeAudioPlaying) {
    audios.coffeeShopSound.play();
  } else {
    audios.coffeeShopSound.pause();
  }
}

export function playRain() {
  const isForestAudioPlaying = document
    .querySelector('#playRain')
    .classList.toggle('playing');
  if (isForestAudioPlaying) {
    audios.rainSound.play();
  } else {
    audios.rainSound.pause();
  }
}

export function playFireplace() {
  const isFireplaceAudioPlaying = document
    .querySelector('#playFireplace')
    .classList.toggle('playing');
  if (isFireplaceAudioPlaying) {
    audios.fireplaceSound.play();
  } else {
    audios.fireplaceSound.pause();
  }
}
