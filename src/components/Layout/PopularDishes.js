import classes from './PopularDishes.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PopularDish from './PopularDish';

const PopularDishes = () => {
  const items = useSelector((state) => state.menu.items);
  const filteredItems = items.filter((item) => item.isPopular === true);
  return (
    <section className={classes['popular-section']}>
      <div className={classes['poular-header']}>
        <h3>Popular dishes</h3>
        <p>Always made with premium ingredients</p>
      </div>
      <div className={classes['poular-container']}>
        {filteredItems.map((item) => {
          return (
            <PopularDish
              title={item.title}
              shortDescription={item.shortDescription}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </div>
      <div className={classes['popular-actions']}>
        <Link to="/menu">
          <button type="button" className={'btn-section'}>
            Learn more
          </button>
        </Link>
      </div>
    </section>
  );
};

export default PopularDishes;
