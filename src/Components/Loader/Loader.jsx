import Loader from 'react-loader-spinner';
import React from 'react';
import style from './Loader.module.css';

const Spiner = () => {
  return (
    <div className={style.loader}>
      <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
    </div>
  );
};
export default Spiner;
