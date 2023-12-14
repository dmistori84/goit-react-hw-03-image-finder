import css from './Button.module.css';

export const Button = ({ handleClick }) => {
  return (
    <button onClick={handleClick} className={css.Button} type="button">
      Load more
    </button>
  );
};
