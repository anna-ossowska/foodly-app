import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { Fragment, useState, useEffect } from 'react';
import Notification from '../UI/Notification';

const MealItem = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  console.log(cartItems, totalPrice);

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

  return (
    <Fragment>
      <Notification title={title} className={notifClasses} />
      <li>
        <div className={classes['meal-info']}>
          <h4 className={classes['meal-title']}>
            {title} &nbsp;&nbsp;&nbsp;
            <span className={classes['meal-price']}>${price}</span>
          </h4>
          <hr />
          <p className={classes['meal-description']}>{description}</p>
        </div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </li>
    </Fragment>
  );
};

export default MealItem;
