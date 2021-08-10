import BannerCheckout from '../Layout/Header/BannerCheckout';
import Spinner from '../UI/Spinnner';
import classes from './CheckoutForm.module.css';

import { Fragment, useEffect, useState } from 'react';

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

  // VALIDATION

  const [enteredName, setEnteredName] = useState('');
  const [nameIsTouched, setNameIsTouched] = useState(false);

  const firstNameChangeHandler = (e) => {
    console.log('change', e.target.value);
    setEnteredName(e.target.value);
  };

  const lastNameBlurHandler = (e) => {
    console.log('blur', e.target.value);
    setNameIsTouched(true);
  };

  const isNotEmpty = (value) => value.trim() !== '';

  const nameInputIsValid = isNotEmpty(enteredName);
  const nameInputHasError = !nameInputIsValid && nameIsTouched;

  let isFormValid = false;

  const submitHandler = (e) => {
    e.preventDefault();

    if (nameInputIsValid) {
      isFormValid = true;
    }

    if (!isFormValid) return;
  };

  console.log('isvalid', nameInputIsValid);
  console.log('has error', nameInputHasError);

  const nameErrClasses = nameInputHasError ? 'invalid' : '';

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
                  onChange={firstNameChangeHandler}
                  onBlur={lastNameBlurHandler}
                  value={enteredName}
                  className={nameErrClasses}
                />
                {nameInputHasError && (
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
              <div className={classes['form-checkout-actions']}>
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
