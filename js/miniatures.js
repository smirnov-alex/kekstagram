import {createPhoto} from './data.js';
//import {showBigPicture} from './big-picture.js';

const miniaturePictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesSection = document.querySelector('.pictures');

const userPictures = createPhoto();
const userPicturesFragment = document.createDocumentFragment();
userPictures.forEach(({url, description, comments, likes}) => {
  const userPicture = miniaturePictureTemplate.cloneNode(true);
  userPicture.querySelector('.picture__img').src = url;
  userPicture.querySelector('.picture__img').alt = description;
  userPicture.querySelector('.picture__comments').textContent = comments.length;
  userPicture.querySelector('.picture__likes').textContent= likes;
  //showBigPicture(userPicture, url, comments, likes, description);
  userPicturesFragment.appendChild(userPicture);
})

picturesSection.appendChild(userPicturesFragment);
