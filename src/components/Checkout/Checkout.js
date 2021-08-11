import { Fragment } from 'react';
import CheckoutForm from './CheckoutForm';
import CheckoutCompleted from './CheckoutCompleted';
import Spinner from '../UI/Spinnner';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Checkout = () => {
  const isSubmitted = useSelector((state) => state.cart.isSubmitted);

  const [isLoading, setIsLoading] = useState(true);

  // ------- SPINNER -------
  useEffect(() => {
    if (!isLoading) return;

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [isLoading]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isSubmitted]);

  const spinnerClasses = isLoading ? 'max-height' : 'hidden min-height';
  return (
    <Fragment>
      <Spinner className={spinnerClasses} />
      {isSubmitted && <CheckoutCompleted />}
      {!isSubmitted && !isLoading && <CheckoutForm />}
    </Fragment>
  );
};

export default Checkout;
