import { Rating } from './Rating';
import { Button } from '../buttons';
import {
  DefaultUserIcon,
  FlagUAIcon,
  DotsIcon,
  LikeIcon,
  DislikeIcon,
  PositiveSideIcon,
  NegativeSideIcon
} from '../icons';
import '../../styles/main.scss';

export const Card = (props) => {
  const {
    currentRate,
    username,
    role,
    country,
    date,
    messagesAmount,
    adress,
    pluses,
    minuses,
    likesAmount,
    dislikesAmount,
    isLike,
    isDislike
  } = props;

  return (
    <div>
      <div className="reviews">
        <header className="reviews__header">
          <div className="reviews__header__adaptive">
            <span className="default-avatar">
              <DefaultUserIcon />
            </span>
            <div className="reviews__header__aside__adaptive__mobile">
              <Rating currentRate={currentRate} />
            </div>
          </div>

          <div className="reviews__header__wrapper">
            <div className="reviews__header__wrapper__top">
              <div className="reviews__header__wrapper__top--info">
                <span className="reviews__header__wrapper__top--info--name">{username}</span>
                <span className={`reviews__header__wrapper__top--info--${role ? 'green' : 'red'}-role`}>{role ? 'Опытный' : 'Заблокирован'}</span>
                <span className="reviews__header__wrapper__top--info--country">
                  <FlagUAIcon />
                  <span className="reviews__header__wrapper__top--info--country--text">
                    {country}
                  </span>
                </span>
                <span className="reviews__header__wrapper__top--info--date">{date}</span>
              </div>

              <div className="reviews__header__aside">
                <Rating currentRate="4.8" />
              </div>
            </div>
            <div className="reviews__header__wrapper__bottom">
              <span className="reviews__header__wrapper__bottom--messages-amount">{messagesAmount} сообщений</span>
              <span className="reviews__header__wrapper__bottom--bull">&bull;</span>

              <div className="reviews__header__wrapper__bottom--adress">
                Музыкальный магазин&nbsp;
                <div className="reviews__header__wrapper__bottom--adress__adaptive">
                  <div className="reviews__header__wrapper__bottom--adress__adaptive__mobile">
                    “Super Sound”, {adress}
                  </div>
                  <a
                    className="reviews__header__wrapper__bottom--link"
                    href="http://localhost:3000/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >Перейти</a>
                </div>
              </div>
            </div>
          </div>
          <span className="reviews--dots">
            <DotsIcon />
          </span>
        </header>

        <main className="reviews__body">
          <div className="reviews__body__review">
            <div className="reviews__body__review--icon">
              <PositiveSideIcon />
              <label className="reviews__body__review--icon--label">Достоинства</label>
            </div>
            <div className="reviews__body__review--text">
              {pluses}
            </div>
          </div>
          <div className="reviews__body__review">
            <div className="reviews__body__review--icon">
              <NegativeSideIcon />
              <label className="reviews__body__review--icon--label">Недостатки</label>
            </div>
            <div className="reviews__body__review--text">
              {minuses}
            </div>
          </div>
        </main>

        <footer className="reviews__footer">
          <Button title="Ответить" />
          <div className="reviews__footer__wrapper">
            <div className="reviews__footer__wrapper__interaction-button">
              <LikeIcon isLike={isLike ? '#219653' : '#87919C'} />
              <span className="reviews__footer__wrapper__interaction-button--number">{likesAmount}</span>
            </div>
            <div className="reviews__footer__wrapper__interaction-button">
              <DislikeIcon isDislike={isDislike ? '#EB5757' : '#87919C'} />
              <span className="reviews__footer__wrapper__interaction-button--number">{dislikesAmount}</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}