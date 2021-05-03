import { StarIcon } from '../icons';
import '../../styles/main.scss';

export const Rating = ({currentRate}) => {
  return (
    <>
      <StarIcon
        width="16.5"
        height="15.75"
        viewBoxWidth="16.5"
        viewBoxHeight="15.75"
      />
      <span className="reviews__header__aside__rating">{currentRate}</span>
    </>
  );
};