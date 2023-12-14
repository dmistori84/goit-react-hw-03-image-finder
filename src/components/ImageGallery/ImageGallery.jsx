import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';

export const ImageGallery = ({
  images,
  isLoading,
  openModal,
  handleModalLargeImage,
}) => {
  return (
    <>
      {isLoading && <Loader />}
      <ul className={css.ImageGallery}>
        {images &&
          images.map(image => {
            return (
              <ImageGalleryItem
                key={image.id}
                images={image}
                openModal={openModal}
                handleModalLargeImage={handleModalLargeImage}
                largeImageURL={image.largeImageURL}
              />
            );
          })}
      </ul>
    </>
  );
};
