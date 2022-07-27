const SCALE = {
  MAX: 100,
  MIN: 25,
  STEP: 25,
};

import { isEscapeEvent, setBodyFixed } from './util.js';
import { effectLevel, lastClass } from './effects.js';
const body = document.querySelector('body');

const uploadImageInput = document.querySelector('#upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadPreview = document.querySelector('.img-upload__preview');
const imgUploadPreviewImage = imgUploadPreview.querySelector('img');
const imgUploadCancel = document.querySelector('.img-upload__cancel');
//const textDescription = document.querySelector('.text__description');

const onPopupEscKeydown = (evt) => {
  if (isEscapeEvent(evt)) {
    evt.preventDefault();
    closeUploadPicture();
  }
};

const closeUploadPicture = () => {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  uploadImageInput.value = '';
}

uploadImageInput.addEventListener('change', () => {
  resetSettings();
  imgUploadOverlay.classList.remove('hidden');
  setBodyFixed();
  const file = uploadImageInput.files[0];
  imgUploadPreviewImage.src = URL.createObjectURL(file);
  localStorage.setItem('userImage', imgUploadPreviewImage.src);
  imgUploadPreviewImage.src = localStorage.getItem('userImage');
  //не должен срабатывать при фокусе в поле комментария
  document.addEventListener('keydown', onPopupEscKeydown);
});

imgUploadCancel.addEventListener('click', () => {
  closeUploadPicture();
});

//масштабирование изображения
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
let scaleControlValue = document.querySelector('.scale__control--value');


const resetSettings = () => {
  imgUploadPreviewImage.style = 'transform: scale(1.00)';
  scaleControlValue.value = '100%';
  imgUploadPreviewImage.style.filter = '';
  if (lastClass) {
    imgUploadPreviewImage.classList.remove(lastClass);
  }
  effectLevel.classList.add('visually-hidden');
}

scaleControlSmaller.addEventListener('click', () => {
  let scaleValue = parseInt(scaleControlValue.value, 10)
  if (scaleValue === SCALE.MIN) {
    scaleControlValue.value = `${SCALE.MIN}%`;
  } else {
    scaleValue = scaleValue - SCALE.STEP;
    scaleControlValue.value = `${scaleValue}%`;
    imgUploadPreviewImage.style.transform = 'scale(' + scaleValue/ 100 + ')'
  }
});

scaleControlBigger.addEventListener('click', () => {
  let scaleValue = parseInt(scaleControlValue.value, 10)
  if (scaleValue === SCALE.MAX) {
    scaleControlValue.value = `${SCALE.MAX}%`;
  } else {
    scaleValue = scaleValue + SCALE.STEP;
    scaleControlValue.value = `${scaleValue}%`;
    imgUploadPreviewImage.style.transform = 'scale(' + scaleValue / 100 + ')'
  }
});

