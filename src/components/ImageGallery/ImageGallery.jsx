import { Component } from 'react';
import css from './ImageGallery.module.css';
import { getImages } from 'Servects/getImages';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';

export class ImageGallery extends Component {
  state = {
    images: null,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchText !== this.props.searchText) {
      this.setState({ isLoading: true });
      getImages(this.props.searchText)
        .then(response => response.json())
        .then(data => this.setState({ images: data.hits }))
        .catch(error => {
          console.log('my error', error);
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  render() {
    return (
      <>
        {this.state.isLoading && <Loader />}
        <ul className={css.ImageGallery}>
          {this.state.images &&
            this.state.images.map(image => {
              return <ImageGalleryItem images={image} key={image.id} />;
            })}
        </ul>
      </>
    );
  }
}
