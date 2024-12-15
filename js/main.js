const PHOTOS_COUNT = 25;

const MIN_LIKES = 15;
const MAX_LIKES = 200;

const MIN_AVATAR_ID = 1;
const MAX_AVATAR_ID = 6;

const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;
const commentsMessages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const commentsNames = ['Артём', 'Алёна', 'Даня', 'Лена', 'Маша', 'Никита'];

/**
 * Generates a random number in specified range
 * @param {Number} start Start of the range
 * @param {Number} end End of the range
 * @returns Random number in range
 */
const randomInRange = function (start, end) {
  return Math.floor(Math.random() * (end - start + 1) + start);
};

/**
 * Generates random comments for photo
 * @param {Number} photoId Photo id
 * @returns Comments
 */
const genPhotoComments = function (photoId) {
  const comments = [];

  const commentsCount = randomInRange(MIN_COMMENTS, MAX_COMMENTS);
  for (let i = 0; i < commentsCount; i++) {
    const curCommentId = Number(`${photoId}${i}`);
    const avatarId = randomInRange(MIN_AVATAR_ID, MAX_AVATAR_ID);
    const messageIndex = randomInRange(0, commentsMessages.length - 1);
    const nameIndex = randomInRange(0, commentsNames.length - 1);

    const curComment = {
      id: curCommentId,
      avatar: `img/avatar-${avatarId}.svg`,
      message: commentsMessages[messageIndex],
      name: commentsNames[nameIndex],
    };

    comments.push(curComment);
  }

  return comments;
};

/**
 * Generates photos randomly
 * @returns Photos
 */
const genPhotos = function () {
  const photos = [];
  for (let i = 0; i < PHOTOS_COUNT; i++) {
    const curLikes = randomInRange(MIN_LIKES, MAX_LIKES);

    const newPhoto = {
      id: i,
      url: `photos/${i}.jpg`,
      description: `Kekstagram photo #${i}`,
      likes: curLikes,
      comments: genPhotoComments(i),
    };

    photos.push(newPhoto);
  }

  return photos;
};

export const generatedPhotos = genPhotos();
