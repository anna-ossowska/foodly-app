import BannerCheckout from '../Layout/Header/BannerCheckout';
import Spinner from '../UI/Spinnner';
import classes from './CheckoutForm.module.css';

import { Fragment, useEffect, useState } from 'react';
import useInput from '../../hooks/use-input';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const CheckoutForm = () => {
  // ------- SPINNER -------

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) return;

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [isLoading]);

  const spinnerClasses = isLoading ? 'max-height' : 'hidden min-height';

  // ------- VALIDATION -------
  const cartState = useSelector((state) => state.cart);
  const isSubmitted = useSelector((state) => state.cart.isSubmitted);
  console.log('cart', cartState);

  const dispatch = useDispatch();
  const isNotEmpty = (value) => value.trim() !== '';

  const {
    enteredValue: enteredName,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    isValid: nameIsValid,
    hasError: nameHasError,
    resetInput: resetNameInput,
  } = useInput(isNotEmpty);

  const {
    enteredValue: enteredLastName,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    resetInput: resetLastNameInput,
  } = useInput(isNotEmpty);

  const {
    enteredValue: enteredEmail,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    isValid: emailIsValid,
    hasError: emailHasError,
    resetInput: resetEmailInput,
  } = useInput(isNotEmpty);

  const {
    enteredValue: enteredAddress,
    valueChangeHandler: addressChangeHandler,
    valueBlurHandler: addressBlurHandler,
    isValid: addressIsValid,
    hasError: addressHasError,
    resetInput: resetAddressInput,
  } = useInput(isNotEmpty);

  const {
    enteredValue: enteredPhone,
    valueChangeHandler: phoneChangeHandler,
    valueBlurHandler: phoneBlurHandler,
    isValid: phoneIsValid,
    hasError: phoneHasError,
    resetInput: resetPhoneInput,
  } = useInput(isNotEmpty);

  const {
    enteredValue: enteredZipCode,
    valueChangeHandler: zipCodeChangeHandler,
    valueBlurHandler: zipCodeBlurHandler,
    isValid: zipCodeIsValid,
    hasError: zipCodeHasError,
    resetInput: resetZipCodeInput,
  } = useInput(isNotEmpty);

  let isFormValid = false;
  if (
    nameIsValid &&
    lastNameIsValid &&
    emailIsValid &&
    addressIsValid &&
    phoneIsValid &&
    zipCodeIsValid
  ) {
    isFormValid = true;
    console.log(isFormValid);
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    if (isFormValid) {
      dispatch(cartActions.submitCart(true));
    }

    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
    resetAddressInput();
    resetPhoneInput();
    resetZipCodeInput();
  };

  const generateErrClass = (hasError) => {
    return hasError ? 'invalid' : '';
  };

  return (
    <Fragment>
      <Spinner className={spinnerClasses} />
      {isSubmitted && <p>Thank you for your order!</p>}
      {!isSubmitted && !isLoading && (
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
                  className={generateErrClass(nameHasError)}
                />
                {nameHasError && (
                  <p className={classes.err}>
                    Field cannot be empty and must contain characters
                  </p>
                )}
              </div>
              <div className={classes['form-control']}>
                <label htmlFor="last-name">Last Name</label>
                <input
                  type="text"
                  id="last-name"
                  onChange={lastNameChangeHandler}
                  onBlur={lastNameBlurHandler}
                  value={enteredLastName}
                  className={generateErrClass(lastNameHasError)}
                />
                {lastNameHasError && (
                  <p className={classes.err}>
                    Field cannot be empty and must contain characters
                  </p>
                )}
              </div>
              <div className={classes['form-control']}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  onChange={emailChangeHandler}
                  onBlur={emailBlurHandler}
                  value={enteredEmail}
                  className={generateErrClass(emailHasError)}
                />
                {emailHasError && (
                  <p className={classes.err}>
                    Field cannot be empty and must contain characters
                  </p>
                )}
              </div>
              <div className={classes['form-control']}>
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  onChange={addressChangeHandler}
                  onBlur={addressBlurHandler}
                  value={enteredAddress}
                  className={generateErrClass(addressHasError)}
                />
                {addressHasError && (
                  <p className={classes.err}>
                    Field cannot be empty and must contain characters
                  </p>
                )}
              </div>
              <div className={classes['form-control']}>
                <label htmlFor="zip-code">Zip Code</label>
                <input
                  type="text"
                  id="zip-code"
                  onChange={zipCodeChangeHandler}
                  onBlur={zipCodeBlurHandler}
                  value={enteredZipCode}
                  className={generateErrClass(zipCodeHasError)}
                />
                {zipCodeHasError && (
                  <p className={classes.err}>
                    Field cannot be empty and must contain characters
                  </p>
                )}
              </div>
              <div className={classes['form-control']}>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  onChange={phoneChangeHandler}
                  onBlur={phoneBlurHandler}
                  value={enteredPhone}
                  className={generateErrClass(phoneHasError)}
                />
                {phoneHasError && (
                  <p className={classes.err}>
                    Field cannot be empty and must contain characters
                  </p>
                )}
              </div>
              <div className={classes['form-actions']}>
                <button type="button" className="btn-outline">
                  Cancel
                </button>
                <button
                  type="submit"
                  className={'btn-secondary'}
                  disabled={!isFormValid}
                >
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
