import React from 'react';
import styles from './ImageItem.module.css';

const ImageGalleryItem = ({ todos, toggleModal }) => {
  const gallery = todos.map(({ id, webformatURL }) => {
    return (
      <li className={styles.ImageGalleryItem} key={id} onClick={toggleModal}>
        <img
          src={webformatURL}
          alt=""
          className={styles.ImageGalleryItemImage}
        />
      </li>
    );
  });
  return gallery;
};

export default ImageGalleryItem;
