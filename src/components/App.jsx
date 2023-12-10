import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    searchText: '',
  };

  handleFormSubmit = searchText => {
    this.setState({ searchText });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchText={this.state.searchText} />
        <Button />
      </div>
    );
  }
}
