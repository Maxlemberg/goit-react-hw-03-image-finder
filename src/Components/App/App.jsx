import React, { Component } from 'react';
import SearchBar from '../SearchBar';
import ImageGallery from '../ImageGallery';
import ImageGalleryItem from '../ImageGalleryItem';
import FetchApi from '../services/gallery-api';
import Button from '../Button';
import Spiner from '../Loader';
import Modal from '../Modal';

class App extends Component {
  state = {
    todos: [],
    name: '',
    page: 1,
    isLoading: false,
    largeImageURL: '',
  };

  closeModal = () => {
    this.setState({ largeImageURL: '' });
  };

  toggleModal = e => {
    const largeImg = this.state.todos.find(todo => {
      return todo.webformatURL === e.target.src;
    });
    this.setState({ largeImageURL: largeImg.largeImageURL });
  };
  onSubmit = async value => {
    await this.setState({ isLoading: true });
    if (this.state.name !== value) {
      this.setState({
        todos: [],
        name: '',
        page: 1,
      });
    }
    try {
      const res = await FetchApi(value, this.state.page);
      const data = res.data.hits;
      const arrData = data.map(({ id, webformatURL, largeImageURL }) => {
        const todo = {
          id,
          webformatURL,
          largeImageURL,
        };
        return todo;
      });
      this.setState(prevState => {
        return {
          todos: [...prevState.todos, ...arrData],
          name: value,
          page: this.state.page + 1,
        };
      });
    } catch (error) {
      alert('Error');
    } finally {
      setTimeout(() => this.setState({ isLoading: false }), 1000);
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  onLoadMore = () => {
    this.onSubmit(this.state.name);
  };

  render() {
    const { todos, isLoading, largeImageURL } = this.state;
    const { onSubmit, onLoadMore, toggleModal, closeModal } = this;
    return (
      <>
        <SearchBar onSubmit={onSubmit} />
        {todos.length > 0 && (
          <>
            {largeImageURL && (
              <Modal largeImageURL={largeImageURL} closeModal={closeModal} />
            )}
            <ImageGallery>
              <ImageGalleryItem todos={todos} toggleModal={toggleModal} />
            </ImageGallery>
            {isLoading ? <Spiner /> : <Button loadMore={onLoadMore} />}
          </>
        )}
      </>
    );
  }
}

export default App;
