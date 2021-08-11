import { Link } from 'react-router-dom';
import classes from './CheckoutCompleted.module.css';

const CheckoutCompleted = (props) => {
  return (
    <section className={`${props.className} ${classes['completed-section']}`}>
      <div className={classes['completed-container']}>
        <div className={classes['completed-img']}></div>

        <div className={classes['completed-text']}>
          <h3>Thank you!</h3>
          <hr />
          <p>
            Your order was completed successfully. You should receive an email
            with payment instructions shortly.
          </p>
          <div className={classes['completed-actions']}>
            <Link to="/menu">
              <button type="button" className="btn-section">
                Continue
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutCompleted;
