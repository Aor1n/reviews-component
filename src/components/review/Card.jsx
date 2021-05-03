import { Rating } from './Rating';
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

export const Card = () => {
  return (
    <div>
      <h3 className="reviews--heading">Отзывы о компании ООО “Ковалевский”</h3>
      <div className="reviews">
        <header className="reviews__header">
          <div className="reviews__header__adaptive">
            <span className="default-avatar">
              <DefaultUserIcon />
            </span>
            <div className="reviews__header__aside__adaptive__mobile">
              <Rating currentRate="4.8" />
            </div>
          </div>

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
                <Rating currentRate="4.8" />
              </div>
            </div>
            <div className="reviews__header__wrapper__bottom">
              <span className="reviews__header__wrapper__bottom--messages-amount">235 сообщений</span>
              <span className="reviews__header__wrapper__bottom--bull">&bull;</span>
      
              <div className="reviews__header__wrapper__bottom--adress">
                Музыкальный магазин
                <div className="reviews__header__wrapper__bottom--adress__adaptive"> 
                  <div className="reviews__header__wrapper__bottom--adress__adaptive__mobile">
                    &nbsp;“Super Sound”, Москва...
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
              Предназначен для опытных инвесторов они смогут совершать сделки на бирже и видеть всю информацию о торгах сразу на нескольких экранах, в любом браузере и на любом количестве устройств. Предназначен для опытных инвесторов.
            </div>
          </div>
          <div className="reviews__body__review">
            <div className="reviews__body__review--icon">
              <NegativeSideIcon />
              <label className="reviews__body__review--icon--label">Недостатки</label>
            </div>
            <div className="reviews__body__review--text">
              Предназначен для опытных инвесторов.
            </div>
          </div>
        </main>

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