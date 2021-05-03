import { Card, Totals, Button } from '../components';
import { reviews } from '../store/reviews';
import '../styles/main.scss';

export const Reviews = () => {
  const mappedReviews = reviews.map(({
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
  }, key) => {
    return (
      <Card
        key={key.toString()}
        currentRate={currentRate}
        username={username}
        role={role}
        country={country}
        date={date}
        messagesAmount={messagesAmount}
        adress={adress}
        pluses={pluses}
        minuses={minuses}
        likesAmount={likesAmount}
        dislikesAmount={dislikesAmount}
        isLike={isLike}
        isDislike={isDislike}
      />
    );
  });

  return (
    <main className="reviews-page">
      <div>
        <h3 className="reviews--heading">Отзывы о компании ООО “Ковалевский”</h3>
        {mappedReviews}
        <div align="center">
          <Button
            title="Показать еще"
            element={<span className="default-button--span">34</span>}
            className="default-button--show-more"
          />
        </div>
      </div>
      <Totals
        header="Общий рейтинг компании"
        averageRating="4.8"
        reviewsAmount="6"
      />
    </main>
  );
};