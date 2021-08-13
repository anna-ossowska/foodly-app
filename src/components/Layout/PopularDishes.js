import classes from './PopularDishes.module.css';
import dish1Image from '../../images/dish-1.png';
import dish2Image from '../../images/dish-2.png';
import dish3Image from '../../images/dish-3.png';
import { Link } from 'react-router-dom';

const PopularDishes = () => {
  return (
    <section className={classes['popular-section']}>
      <div className={classes['poular-header']}>
        <h3>Popular dishes</h3>
        <p>Always made with premium ingredients</p>
      </div>
      <div className={classes['poular-container']}>
        <div className={classes['dish-card']}>
          <img src={dish1Image} alt="dish" />
          <div className={classes.info}>
            <h4 className={classes.title}>
              Pumpkin Ginger Soup
              <br />
              with Coconut Milk and Mint
            </h4>
            <p className={classes.price}>$21</p>
          </div>
        </div>
        <div className={classes['dish-card']}>
          <img src={dish2Image} alt="dish" />
          <div className={classes.info}>
            <h4 className={classes.title}>
              Pumpkin Ginger Soup
              <br />
              with Coconut Milk and Mint
            </h4>
            <p className={classes['price']}>$21</p>
          </div>
        </div>
        <div className={classes['dish-card']}>
          <img src={dish3Image} alt="dish" />
          <div className={classes.info}>
            <h4 className={classes.title}>
              Pumpkin Ginger Soup
              <br />
              with Coconut Milk and Mint
            </h4>
            <p className={classes.price}>$21</p>
          </div>
        </div>
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
