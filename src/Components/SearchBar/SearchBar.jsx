import { React, Component } from 'react';
import styles from './SearchBar.module.css';

class SerchBar extends Component {
  state = {
    value: '',
  };

  onInput = e => {
    this.setState({ value: e.target.value });
  };
  submitFn = e => {
    e.preventDefault();
    const { value } = this.state;
    this.props.onSubmit(value);
    this.reset();
  };

  reset = () => {
    this.setState({ value: '' });
  };
  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.submitFn}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="input"
            value={this.state.value}
            onInput={this.onInput}
          />
        </form>
      </header>
    );
  }
}

export default SerchBar;
