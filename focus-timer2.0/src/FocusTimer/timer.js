import state from './state.js';
import * as el from './elements.js';
import * as actions from './actions.js';

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes;
  seconds = seconds ?? state.seconds;
  el.minutes.textContent = String(minutes).padStart(2, '0');
  el.seconds.textContent = String(seconds).padStart(2, '0');
}

export function countDown() {
  if (!state.isRunning) {
    return;
  }

  let minutes = Number(el.minutes.textContent);
  let seconds = Number(el.seconds.textContent);

  seconds--;

  if (seconds < 0) {
    seconds = 59;
    minutes--;
  }

  if (minutes < 0) {
    actions.stopRunning();
    return;
  }

  updateDisplay(minutes, seconds);

  setTimeout(() => countDown(), 1000);
}
