import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { Fragment, useState, useEffect } from 'react';
import Notification from '../UI/Notification';

const MealItem = (props) => {
  const { id, title, description, price } = props;
  const [isItemAdded, setIsItemAdded] = useState(false);
  const [isNotifVisible, setIsNotifVisible] = useState(false);

  const dispatch = useDispatch();

  const addToCartHandler = (mealData) => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        description,
        price,
        quantity: mealData,
      })
    );
    setIsItemAdded(true);
  };

  useEffect(() => {
    if (!isItemAdded) return;

    setIsNotifVisible(true);

    const timer = setTimeout(() => {
      setIsNotifVisible(false);
      setIsItemAdded(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [isItemAdded]);

  const notifClasses = isNotifVisible ? '' : 'hidden';

  const message = (
    <Fragment>
      <p>
        <span>{props.title}</span>&nbsp; has been successfully added to your
        cart!
      </p>
    </Fragment>
  );

  return (
    <Fragment>
      <Notification msg={message} className={notifClasses} />
      <li>
        <div className={classes['meal-info']}>
          <h4 className={classes['meal-title']}>{title}</h4>
          <p className={classes['meal-price']}>${price}</p>
          <hr />
          <p className={classes['meal-description']}>{description}</p>
        </div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </li>
    </Fragment>
  );
};

export default MealItem;
