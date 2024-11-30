import s from './ImageCard.module.css';

import React from 'react';

const ImageCard = ({ image }) => {
  const {
    urls: { small, regular },
    alt_description,
    user,
    likes,
  } = image;

  return (
    <>
      <img
        src={small}
        alt={alt_description}
        className={s.img}
        width="360px"
        height="240px"
      />
      <div className={s.info}>
        <p>
          Author: <span className={s.bold}>{user.name}</span>
        </p>
        <p>
          Likes: <span className={s.bold}>{likes}</span>
        </p>
      </div>
    </>
  );
};

export default ImageCard;
