import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { getImages } from 'Servises/getImages';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    searchText: '',
    images: null,
    isLoading: false,
    page: 1,
    isShowModal: false,
    largeImageURL: '',
    isShowButton: true,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.searchText !== this.state.searchText ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true });
      getImages(this.state.searchText, this.state.page)
        .then(response => response.json())
        .then(data =>
          this.setState(prev => ({
            images: prev.images ? [...prev.images, ...data.hits] : data.hits,
            isShowButton: prev.page < data.totalHits / 12,
          }))
        )
        .catch(error => {
          console.log('my error', error);
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  handleFormSubmit = searchText => {
    this.setState({ images: [], searchText, page: 1 });
  };

  loadMore = () => {
    this.setState(prev => ({
      ...prev,
      page: prev.page + 1,
    }));
  };

  toogleModal = () => {
    this.setState(prev => ({
      isShowModal: !prev.isShowModal,
    }));
  };

  handleModalLargeImage = largeImageURL => {
    this.setState({ largeImageURL });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          images={this.state.images}
          isLoading={this.state.isLoading}
          openModal={this.toogleModal}
          handleModalLargeImage={this.handleModalLargeImage}
        />
        {this.state.images &&
          this.state.images.length > 0 &&
          this.state.isShowButton && <Button handleClick={this.loadMore} />}
        {this.state.isShowModal && (
          <Modal
            openModal={this.toogleModal}
            largeImageURL={this.state.largeImageURL}
          />
        )}
      </div>
    );
  }
}
