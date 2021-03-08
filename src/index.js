import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import './index.css';
import styles from './Components/App/App.module.css';

ReactDOM.render(
  <React.StrictMode>
    <App classname={styles.App} />
  </React.StrictMode>,
  document.getElementById('root'),
);
