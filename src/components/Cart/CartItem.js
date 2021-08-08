import classes from './CartItem.module.css';

const CartItem = (props) => {
  return (
    <li className={classes['cart-item']}>
      <div className={classes['cart-info']}>
        <h3>{props.title}</h3>
        <div className={classes['cart-details']}>
          <span className={classes.price}>${props.price}</span>
          <span className={classes.amount}>x 3</span>
        </div>
      </div>

      <div className={classes['cart-actions']}>
        <button className={classes['btn-plus']}>+</button>
        <input type="text" inputmode="numeric" defaultValue="1" />
        <button className={classes['btn-minus']}>&#8211;</button>
      </div>
    </li>
  );
};

export default CartItem;
