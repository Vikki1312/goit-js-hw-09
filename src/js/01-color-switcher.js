// Метод setTimeout() позволяет запланировать запуск функции через определённое время.
// callback - функция, выполнение которое необходимо запланировать.
//     delay - время в миллисекундах, через которое callback - функция будет вызвана один раз.
// setTimeout(() => {
//   console.log("Second log");
// }, 2000);
// Если нам, по какой - то причине, нужно отменить вызов функции внутри таймаута, используется метод clearTimeout(id), которая принимает идентификатор таймера и очищает(удаляет) его.
// Метод setInterval() - это простой способ повторения кода снова и снова с установленным промежутком времени повторений.
// Остановить исполнение можно вызовом метода clearInterval(id).

const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const bodyEl = document.body;
let timerId = null;

btnStop.setAttribute('disabled', '');

btnStart.addEventListener('click', onBtnStartClick);

btnStop.addEventListener('click', onBtnStopClick);

function onBtnStartClick() {
  timerId = setInterval(() => {
    const randomColor = getRandomHexColor();
    bodyEl.style.backgroundColor = randomColor;
  }, 1000);
  btnStart.setAttribute('disabled', '');
  btnStop.removeAttribute('disabled');
}

function onBtnStopClick() {
  clearInterval(timerId);
  btnStop.setAttribute('disabled', '');
  btnStart.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
