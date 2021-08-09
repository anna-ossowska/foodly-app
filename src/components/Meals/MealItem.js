import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const MealItem = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  console.log(cartItems, totalPrice);

  const dispatch = useDispatch();

  const { id, title, description, price } = props;

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
  };

  return (
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
  );
};

export default MealItem;
