import state from '../FocusTimer/state.js';
import * as timer from './timer.js';
import * as events from './events.js';
import * as el from './elements.js';

export function startTimer(minutes, seconds) {
  state.minutes = minutes;
  state.seconds = seconds;

  timer.updateDisplay();

  events.registerControls();
}
