import BannerCheckout from '../Layout/Header/BannerCheckout';
import Spinner from '../UI/Spinnner';
import classes from './CheckoutForm.module.css';

import { Fragment, useEffect, useState } from 'react';

import useInput from '../../hooks/use-input';

const CheckoutForm = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) return;

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 0);

    return () => {
      clearTimeout(timer);
    };
  }, [isLoading]);

  const spinnerClasses = isLoading ? 'max-height' : 'hidden min-height';

  // ------- VALIDATION -------
  const isNotEmpty = (value) => value.trim() !== '';

  const {
    enteredValue: enteredName,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    isValid: nameIsValid,
    hasError: nameHasError,
  } = useInput(isNotEmpty);

  let isFormValid = false;

  const submitHandler = (e) => {
    e.preventDefault();

    if (nameIsValid) {
      isFormValid = true;
    }

    if (!isFormValid) return;
  };

  console.log('isvalid', nameIsValid);
  console.log('has error', nameHasError);

  const nameErrClasses = nameHasError ? 'invalid' : '';

  return (
    <Fragment>
      {/* <Spinner className={spinnerClasses} /> */}
      {!isLoading && (
        <section className={classes['form-section']}>
          <BannerCheckout />
          <form onSubmit={submitHandler} className={classes.form}>
            <div className={classes['form-container']}>
              <div className={classes['form-control']}>
                <label htmlFor="first-name">First Name</label>
                <input
                  type="text"
                  id="first-name"
                  onChange={nameChangeHandler}
                  onBlur={nameBlurHandler}
                  value={enteredName}
                  className={nameErrClasses}
                />
                {nameHasError && (
                  <p className={classes.err}>
                    Field cannot be empty and must contain characters
                  </p>
                )}
              </div>
              <div className={classes['form-control']}>
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" />
              </div>
              <div className={classes['form-control']}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>
              <div className={classes['form-control']}>
                <label htmlFor="address">Address</label>
                <input type="text" id="address" />
              </div>
              <div className={classes['form-control']}>
                <label htmlFor="zip-code">Zip Code</label>
                <input type="text" id="zip-code" />
              </div>
              <div className={classes['form-control']}>
                <label htmlFor="phone">Phone Number</label>
                <input type="text" id="phone" />
              </div>
              <div className={classes['form-actions']}>
                <button type="button" className="btn-outline">
                  Cancel
                </button>
                <button type="submit" className="btn-secondary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </section>
      )}
    </Fragment>
  );
};

export default CheckoutForm;
