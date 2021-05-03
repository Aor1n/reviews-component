import '../../styles/main.scss';

export const ProgressBar = (props) => {
  const {title, currentNumber, currentProgress} = props;

  return (
    <div>
      <label>
        {title}
      </label>
      <div className="reviews__totals-card__scales--progress-bar-wrapper">
        <div className={currentProgress}>
          <div />
        </div>
        <span className="reviews__totals-card__scales--value">
          {currentNumber}
        </span>
      </div>
    </div>
  );
};