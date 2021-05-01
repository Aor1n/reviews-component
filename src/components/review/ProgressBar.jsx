import '../../styles/main.scss';

export const ProgressBar = (props) => {
  const {title, currentNumber, currentProgress} = props;

  return (
    <>
      <span>
          {title}
        </span>
        <div className="reviews__totals-card--progress-bar-wrapper">
          <div className={currentProgress}>
            <div />
          </div>
          <span>
            {currentNumber}
          </span>
        </div>
    </>
  );
};