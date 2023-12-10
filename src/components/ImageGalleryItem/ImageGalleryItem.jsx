import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ images }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItemImage}
        src={images.webformatURL}
        alt={images.tags}
      />
    </li>
  );
};
