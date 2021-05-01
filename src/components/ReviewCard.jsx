import '../styles/main.scss';

export const ReviewCard = () => {
  return (
    <div className="reviews">
      <header className="reviews__header">
        <span>avatar</span>
        <div className="reviews__header__wrapper">

          <div className="reviews__header__wrapper__top">

            <span className="reviews__header__wrapper__top__name">name</span>
            <span className="reviews__header__wrapper__top__role--green">role</span>
            <span className="reviews__header__wrapper__top__country">county</span>
            <span className="reviews__header__wrapper__top__date">23.02.2019 в 15:06</span>
        
          </div>
          <div className="reviews__header__wrapper__bottom">
            <span className="reviews__header__wrapper__bottom__messages-amount">235 сообщений</span>
            <span className="reviews__header__wrapper__bottom__bull">&bull;</span>
            <span className="reviews__header__wrapper__bottom__adress">
              Музыкальный магазин “Super Sound”, Москва,... Перейти
              {/* (if length isn't enough) make it short and put link in it as "Перейти" */}
            </span>
          </div>
        </div>
        <div className="reviews__header__aside">
          <span>**</span>
          <span class="reviews__header__aside__rating">4.8</span>
        </div>
        <span>dots</span>
      </header>

      <div className="reviews__body">
        <div>
          <img src="" alt="Good sides"/>
          <div>
            Предназначен для опытных инвесторов они смогут совершать сделки на бирже и видеть всю информацию о торгах сразу на нескольких экранах, в любом браузере и на любом количестве устройств. Предназначен для опытных инвесторов.
          </div>
        </div>
        <div>
          <img src="" alt="Bad sides"/>
          <div>
            Предназначен для опытных инвесторов.
          </div>
        </div>
      </div>

      <footer className="reviews__footer">
        <button type="button">Ответить</button>
        <div className="reviews__footer__wrapper">
          <div className="reviews__footer__wrapper__interaction-button">
            <img src="" alt="Like button"/>
            <div>Like</div>
          </div>
          <div className="reviews__footer__wrapper__interaction-button">
            <img src="" alt="Dislike button"/>
            <div>Dislike</div>
          </div>
        </div>
      </footer>
    </div>
  )
}