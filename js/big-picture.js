import { isEscapeEvent, setBodyFixed } from './util.js';
const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = document.querySelector('.big-picture__cancel');
const body = document.querySelector('body');

const onPopupEscKeydown = (evt) => {
  if (isEscapeEvent(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
}

const showBigPicture = (userPicture, userPictureUrl, userPictureComments, userPictureLikes, userPictureDescription) => {
  userPicture.addEventListener('click', () => {
    bigPicture.classList.remove('hidden');
    bigPicture.querySelector('.big-picture__img--photo').src = userPictureUrl;
    bigPicture.querySelector('.social__caption').textContent = userPictureDescription;
    bigPicture.querySelector('.likes-count').textContent = userPictureLikes;
    bigPicture.querySelector('.social__comment-count').classList.add('hidden');
    bigPicture.querySelector('.comments-loader').classList.add('hidden');
    setBodyFixed();

    //comments
    const socialComments = bigPicture.querySelector('.social__comments');
    socialComments.innerHTML = '';
    for (let i=0; i < userPictureComments.length; i++) {
      const socialComment = document.createElement('li');
      socialComment.classList.add('social__comment');

      const socialPicture = document.createElement('img');
      socialPicture.classList.add('social__picture');
      socialPicture.src = userPictureComments[i].avatar;
      socialPicture.alt = userPictureComments[i].name;
      socialPicture.width = '35';
      socialPicture.height = '35';

      const socialText = document.createElement('p');
      socialText.classList.add('social__text');
      socialText.textContent = userPictureComments[i].message;

      socialComment.append(socialPicture);
      socialComment.append(socialText);
      socialComments.append(socialComment);
    }

    document.addEventListener('keydown', onPopupEscKeydown);
  });

  //закрытие по кнопке крестиком
  bigPictureCancel.addEventListener('click', () => {
    closeBigPicture();
  });
}

export {showBigPicture}
