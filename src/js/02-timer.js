import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const dataInputEl = document.querySelector('#datetime-picker');
const btnStartEl = document.querySelector('[data-start]');
const timerEl = document.querySelector('.timer');
const refs = {
  days: timerEl.querySelector('[data-days]'),
  hours: timerEl.querySelector('[data-hours]'),
  minutes: timerEl.querySelector('[data-minutes]'),
  seconds: timerEl.querySelector('[data-seconds]'),
};
let selectedDate;
let timerId = null;

btnStartEl.setAttribute('disabled', '');

flatpickr(dataInputEl, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    statusOfSelectedDate();
  },
});

function statusOfSelectedDate() {
  if (selectedDate - new Date() < 0) {
    Notiflix.Notify.failure('Please choose a date in the future', {
      clickToClose: true,
    });
    btnStartEl.setAttribute('disabled', '');
    btnStartEl.removeEventListener('click', onBtnClick);

    return;
  }

  Notiflix.Notify.info(
    'The date is correct, you can start the timer by pressing the "Start" button',
    {
      clickToClose: true,
    }
  );
  btnStartEl.addEventListener('click', onBtnClick);
  btnStartEl.removeAttribute('disabled');
}

function onBtnClick() {
  timerId = setInterval(() => {
    const { days, hours, minutes, seconds } = convertMs(
      selectedDate - new Date()
    );
    const difference = selectedDate - new Date() < 0;
    if (difference) {
      clearInterval(timerId);
      refs.days.textContent = '00';
      refs.hours.textContent = '00';
      refs.minutes.textContent = '00';
      refs.seconds.textContent = '00';
      dataInputEl.removeAttribute('disabled');
      btnStartEl.removeAttribute('disabled');
    }
    refs.days.textContent = addLeadingZero(days);
    refs.hours.textContent = addLeadingZero(hours);
    refs.minutes.textContent = addLeadingZero(minutes);
    refs.seconds.textContent = addLeadingZero(seconds);
  }, 4);
  dataInputEl.setAttribute('disabled', '');
  btnStartEl.setAttribute('disabled', '');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
