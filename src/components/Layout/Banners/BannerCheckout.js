import classes from './BannerCheckout.module.css';

const BannerCheckout = () => {
  return (
    <div className={classes['banner-checkout']}>
      <div className={classes['banner-text']}>
        <h2>Checkout</h2>
        <p>
          Enter your credentials and and enjoy delivery straight to your
          doorstep all throughout Norway!
        </p>
      </div>
    </div>
  );
};

export default BannerCheckout;
