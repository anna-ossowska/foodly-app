import BannerCheckout from '../Layout/Header/BannerCheckout';
import classes from './CheckoutForm.module.css';

const CheckoutForm = () => {
  return (
    <section className={classes['form-section']}>
      <BannerCheckout />
    </section>
  );
};

export default CheckoutForm;
