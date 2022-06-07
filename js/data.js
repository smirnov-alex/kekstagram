import { getRandomArrayElement, getRandomPositiveInteger, makeId } from './util.js';

const SIMILAR_PHOTO_COUNT = 25;

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Паоло',
  'Душан',
  'Леонардо',
  'Джорджо',
  'Матейс',
  'Войцех',
  'Федерико',
  'Адриан',
];

const DESCRIPTIONS = [
  'Красивый закат',
  'Я держу Пизанскую башню',
  'Завтрак',
  'Великолепный замок',
  'Отпуск в горах',
  'Велопоход',
  'Пробежка в лесу',
  'Морское побережье',
  'Милые еноты',
  'Котики',
];

const Comments_num = {
  MIN: 1,
  MAX: 4,
};

const Avatars_num = {
  MIN: 1,
  MAX: 6,
};

const Likes = {
  MIN: 15,
  MAX: 200,
}

const createComment = () => ({
  id: makeId(),
  avatar: `img/avatar-${getRandomPositiveInteger(Avatars_num.MIN, Avatars_num.MAX)}.svg`,
  message: getRandomArrayElement(COMMENTS),
  name: getRandomArrayElement(NAMES),
});

const createPhoto = () => {
  const similarPhotos = [];
  for (let i = 1; i <= SIMILAR_PHOTO_COUNT; i++) {
    const commentsList = [];
    for (let j = 1; j <= getRandomPositiveInteger(Comments_num.MIN, Comments_num.MAX); j++) {
      commentsList.push(createComment());
    }
    similarPhotos.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: getRandomArrayElement(DESCRIPTIONS),
      likes: getRandomPositiveInteger(Likes.MIN, Likes.MAX),
      comments: commentsList,
    });
  }
  return similarPhotos;
};

export {createPhoto};
