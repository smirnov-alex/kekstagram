// Функция, возвращающая случайное целое число из переданного диапазона включительно.
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Функция для проверки максимальной длины строки.
const checkLengthString = (checkedString, maxLength) => checkedString.length <= maxLength;

//функция для возврата случайного элемента массива
const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

//функция для создания случайного id комментария
const makeId = function () {
  let id = '';
  const possibleSymbol = '0123456789';
  for (let i = 0; i < 5; i++) {
    id += possibleSymbol.charAt(Math.floor(Math.random() * possibleSymbol.length));
  }
  return id;
};

//функция для проверки нажатия клавиши Escape
const isEscapeEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc'
};

const setBodyFixed = () => {
  const body = document.querySelector('body');
  body.classList.add('modal-open');
};

export {getRandomArrayElement, getRandomPositiveInteger, makeId, checkLengthString, isEscapeEvent, setBodyFixed}
