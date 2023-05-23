import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
const btnEl = document.querySelector('button');

// formEl.elements.delay.value = 1100;
// formEl.elements.step.value = 1500;
// formEl.elements.amount.value = 7;

formEl.addEventListener('submit', onSubmit);

function onSubmit(e) {
  const {
    elements: { delay, step, amount },
  } = e.currentTarget;
  const delayValue = Number(delay.value);
  const amountValue = Number(amount.value);
  const stepValue = Number(step.value);

  e.preventDefault();

  let promisePosition = 1;
  let promiseDelay = delayValue;

  for (let i = 0; i < amountValue; i++) {
    createPromise(promisePosition, promiseDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    promisePosition += 1;
    promiseDelay += stepValue;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      setTimeout(() => {
        resolve({ position, delay });
      }, delay);
    } else {
      setTimeout(() => {
        reject({ position, delay });
      }, delay);
    }
  });
}
