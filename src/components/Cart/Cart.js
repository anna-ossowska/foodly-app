import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import { Link } from 'react-router-dom';

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice.toFixed(2));

  const dispatch = useDispatch();

  const hideCartHandler = () => {
    dispatch(uiActions.hideCart());
  };

  return (
    <Modal>
      {cartItems.length === 0 ? (
        <p className={classes['msg-empty']}>Your cart is empty.</p>
      ) : (
        ''
      )}
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
          {cartItems.length === 0 ? 'Go back' : 'Cancel'}
        </button>
        {cartItems.length === 0 ? (
          ''
        ) : (
          <Link to="/checkout">
            <button className="btn-secondary" onClick={hideCartHandler}>
              Order
            </button>
          </Link>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
