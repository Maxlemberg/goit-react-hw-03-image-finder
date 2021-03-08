import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKay);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKay);
  }

  handleKay = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  onClose = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    return createPortal(
      <div className={styles.Overlay} onClick={this.onClose}>
        <div className={styles.Modal}>
          <img src={this.props.largeImageURL} alt="" />
        </div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;
