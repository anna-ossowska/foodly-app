import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice.toFixed(2));

  const dispatch = useDispatch();

  const hideCartHandler = () => {
    dispatch(uiActions.hideCart());
  };

  return (
    <Modal>
      <ul className={classes['cart-items']}>
        {cartItems.map((item) => {
          return (
            <CartItem
              key={item.id}
              item={{
                id: item.id,
                title: item.title,
                description: item.description,
                quantity: item.quantity,
                price: item.price,
              }}
            />
          );
        })}
      </ul>
      <div className={classes['cart-summary']}>
        <h3 className={classes.total}>Total</h3>
        <h3 className={classes['total-amount']}>${totalPrice}</h3>
      </div>
      <div className={classes['summary-actions']}>
        <button className="btn-outline" onClick={hideCartHandler}>
          Cancel
        </button>
        <button className="btn-secondary">Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
