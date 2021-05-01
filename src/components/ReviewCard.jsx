import {
  DefaultUserIcon,
  FlagUAIcon,
  StarIcon,
  DotsIcon,
  LikeIcon,
  DislikeIcon,
  PositiveSideIcon,
  NegativeSideIcon
} from './icons';
import '../styles/main.scss';

export const ReviewCard = () => {
  return (
    <div className="outer-wrapper">
      <h3 className="reviews--heading">Отзывы о компании ООО “Ковалевский”</h3>
      <div className="reviews">
        <header className="reviews__header">
          <span className="default-avatar">
            <DefaultUserIcon />
          </span>

          <div className="reviews__header__wrapper">

            <div className="reviews__header__wrapper__top">
              <div className="reviews__header__wrapper__top--info">

                <span className="reviews__header__wrapper__top--info--name">Александр</span>
                <span className="reviews__header__wrapper__top--info--green-role">Опытный</span>
                <span className="reviews__header__wrapper__top--info--country">
                  <FlagUAIcon />
                  <span className="reviews__header__wrapper__top--info--country--text">
                    Украина
                </span>
                </span>
                <span className="reviews__header__wrapper__top--info--date">23.02.2019 в 15:06</span>
              </div>

              <div className="reviews__header__aside">
                <StarIcon />
                <span className="reviews__header__aside__rating">4.8</span>
              </div>
            </div>
            <div className="reviews__header__wrapper__bottom">
              <span className="reviews__header__wrapper__bottom--messages-amount">235 сообщений</span>
              <span className="reviews__header__wrapper__bottom--bull">&bull;</span>
              <span className="reviews__header__wrapper__bottom--adress">
                Музыкальный магазин “Super Sound”, Москва,...
              <a
                  className="reviews__header__wrapper__bottom--adress--link"
                  href="http://localhost:3000/"
                  target="_blank"
                  rel="noreferrer noopener"
                >Перейти</a>
              </span>
            </div>
          </div>
          <DotsIcon />
        </header>

        <div className="reviews__body">
          <div className="reviews__body__review">
            <div className="reviews__body__review--icon">
              <PositiveSideIcon />
            </div>
            <div className="reviews__body__review--text">
              Предназначен для опытных инвесторов они смогут совершать сделки на бирже и видеть всю информацию о торгах сразу на нескольких экранах, в любом браузере и на любом количестве устройств. Предназначен для опытных инвесторов.
          </div>
          </div>
          <div className="reviews__body__review">
            <div className="reviews__body__review--icon">
              <NegativeSideIcon />
            </div>
            <div className="reviews__body__review--text">
              Предназначен для опытных инвесторов.
          </div>
          </div>
        </div>

        <footer className="reviews__footer">
          <button className="default-button" type="button">Ответить</button>
          <div className="reviews__footer__wrapper">
            <div className="reviews__footer__wrapper__interaction-button">
              <LikeIcon alt="asd" />
              <span className="reviews__footer__wrapper__interaction-button--number">23</span>
            </div>
            <div className="reviews__footer__wrapper__interaction-button">
              <DislikeIcon />
              <span className="reviews__footer__wrapper__interaction-button--number">10</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}