import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    title: 'Salad 1',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vel perspiciatis illum ea modi illo quidem rerum.',
    price: 22.99,
  },
  {
    id: 'm2',
    title: 'Salad 2',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vel perspiciatis illum ea modi illo quidem rerum.',
    price: 16.5,
  },
  {
    id: 'm3',
    title: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const Cart = (props) => {
  return (
    <Modal>
      {DUMMY_MEALS.map((meal) => {
        return <CartItem key={meal.id} title={meal.title} price={meal.price} />;
      })}
      <div className={classes['cart-summary']}>
        <h3 className={classes.total}>Total</h3>
        <h3 className={classes['total-amount']}>$120</h3>
      </div>
      <div className={classes['summary-actions']}>
        <button className="btn-outline">Cancel</button>
        <button className="btn-secondary">Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
