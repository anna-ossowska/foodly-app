import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const CartItem = (props) => {
  const { id, title, quantity, price } = props.item;

  const changeHandler = () => {};

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        quantity: 1,
      })
    );
  };

  const removeFromCartHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <li className={classes['cart-item']}>
      <div className={classes['cart-info']}>
        <h3>{title}</h3>
        <span className={classes.price}>${price}</span>
      </div>

      <div className={classes['cart-actions']}>
        <button onClick={addToCartHandler} className={classes['btn-plus']}>
          +
        </button>
        <input
          type="text"
          inputMode="numeric"
          onChange={changeHandler}
          value={quantity}
        />
        <button
          onClick={removeFromCartHandler}
          className={classes['btn-minus']}
        >
          &#8211;
        </button>
      </div>
    </li>
  );
};

export default CartItem;
