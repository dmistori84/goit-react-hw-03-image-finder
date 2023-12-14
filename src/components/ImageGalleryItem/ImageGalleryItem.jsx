import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({
  images,
  openModal,
  handleModalLargeImage,
  largeImageURL,
}) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItemImage}
        src={images.webformatURL}
        alt={images.tags}
        onClick={() => {
          openModal();
          handleModalLargeImage(largeImageURL);
        }}
      />
    </li>
  );
};
