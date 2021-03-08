import React from 'react';
import styles from './Button.module.css';

const Button = ({ loadMore }) => {
  return (
    <button type="button" className={styles.Button} onClick={loadMore}>
      Load more
    </button>
  );
};

export default Button;
