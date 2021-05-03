import { ProgressBar } from './ProgressBar';
import { StarBiggerIcon, StarBiggerHalfIcon } from '../icons';
import '../../styles/main.scss';

export const Totals = () => {
  const stars = (
    [1, 2, 3, 4].map((i) => {
      return (
        <StarBiggerIcon
          key={i.toString()}
        />
      )
    })
  )

  return (
    <aside className="reviews__totals-card">
      <h3 className="reviews__totals-card--heading">Общий рейтинг компании</h3>
      <div className="reviews__totals-card__adaptive">
        <div className="reviews__totals-card__group">
          <div className="reviews__totals-card__group--rating">
            <span className="reviews__totals-card__group--rating--current">4.8</span>&nbsp; / 5
          </div>
          <div>
            {stars}<StarBiggerHalfIcon />
            {/* TODO decrease star size for mobiles */}
          </div>
          <div className="reviews__totals-card__group--reviews-amount">
            6 отзывов
          </div>
        </div>

        <div className="reviews__totals-card__scales">
          <ProgressBar
            title='Скорость работы'
            currentProgress="reviews__totals-card__scales--progress-bar1"
            currentNumber="4.8"
          />
          <ProgressBar
            title='Качество обслуживания'
            currentProgress="reviews__totals-card__scales--progress-bar2"
            currentNumber="3.1"
          />
          <ProgressBar
            title='Ценовая политика'
            currentProgress="reviews__totals-card__scales--progress-bar3"
            currentNumber="1.6"
          />
        </div>
      </div>
    </aside>
  );
};