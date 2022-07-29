const MAX_HASHTAGS = 5;
const MAX_COMMENTLENGTH = 140;
import { isEscapeEvent } from './util.js';

const inputHashtag = document.querySelector('.text__hashtags');
const inputComment = document.querySelector('.text__description');

inputComment.addEventListener('input', () => {
  inputComment.setCustomValidity('');
  const inputCommentText = inputComment.value;

  if (inputCommentText.length > MAX_COMMENTLENGTH) {
    inputComment.setCustomValidity('Максимум ' + MAX_COMMENTLENGTH + ' символов!');
  }
})

inputHashtag.addEventListener('input', () => {
  inputHashtag.setCustomValidity('');
  const inputText = inputHashtag.value.toLowerCase().trim();

  if (!inputText) {
    return;
  }
  const inputArray = inputText.split(/\s+/);
  if (inputArray.length === 0) {
    return;
  }

  if (inputArray.length > MAX_HASHTAGS) {
    inputHashtag.setCustomValidity('Максимум ' + MAX_HASHTAGS + ' хэштэгов!');
  }

  const isRepeatingHashtag = inputArray.some((item, i, arr) => {
    return arr.indexOf(item, i+1) >= i+1;
  });
  if (isRepeatingHashtag) {
    inputHashtag.setCustomValidity('Хэштеги не должны повторяться');
  }

  inputArray.forEach(element => {
    const re = /^#[A-Za-zА-Яа-яЕё0-9]{1,19}$/;
    if (!re.test(element)) {
      inputHashtag.setCustomValidity('Хэш-тег не проходит валидацию!');
    }
  });

})

const onEscapeDown = (evt) => {
  if (isEscapeEvent(evt)) {
    evt.preventDefault();
    evt.stopPropagation();
  }
};

inputHashtag.addEventListener('keydown', onEscapeDown)
inputComment.addEventListener('keydown', onEscapeDown)
