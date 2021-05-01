import { ProgressBar } from './ProgressBar';
import { StarIcon } from '../icons';
import '../../styles/main.scss';

export const Totals = () => {
  const stars = (
    [1, 2, 3, 4, 5].map((i) => {
      return (
        <StarIcon
          key={i.toString()}
          width="27"
          height="25.78"
          viewBoxWidth="27"
          viewBoxHeight="25.78"
        />
      )
    })
  )

  return (
    <div className="reviews__totals-card">
      <h3 className="reviews__totals-card--heading">Общий рейтинг компании</h3>
      <div className="reviews__totals-card--rating">
        <span className="reviews__totals-card--rating--current">4.8</span> / 5
      </div>
      <div>
        {stars}
      </div>
      <div className="reviews__totals-card--reviews-amount">
        6 отзывов
      </div>
      <div>
        <ProgressBar
          title='Скорость работы'
          currentProgress="reviews__totals-card--progress-bar1"
          currentNumber="4.8"
        />
        <ProgressBar
          title='Качество обслуживания'
          currentProgress="reviews__totals-card--progress-bar2"
          currentNumber="3.1"
        />
        <ProgressBar
          title='Ценовая политика'
          currentProgress="reviews__totals-card--progress-bar3"
          currentNumber="1.6"
        />
      </div>
    </div>
  );
};