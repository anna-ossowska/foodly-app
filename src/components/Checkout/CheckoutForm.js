import BannerCheckout from '../Layout/Header/BannerCheckout';
import Spinner from '../UI/Spinnner';
import classes from './CheckoutForm.module.css';

import { Fragment, useEffect, useState } from 'react';
import useInput from '../../hooks/use-input';
import { Link } from 'react-router-dom';

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
    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
    resetAddressInput();
    resetPhoneInput();
    resetZipCodeInput();
  };

  const nameErrClass = nameHasError ? 'invalid' : '';
  const lastNameErrClass = lastNameHasError ? 'invalid' : '';
  const emailErrClass = emailHasError ? 'invalid' : '';
  const addressErrClass = addressHasError ? 'invalid' : '';
  const phoneErrClass = phoneHasError ? 'invalid' : '';
  const zipCodeErrClass = zipCodeHasError ? 'invalid' : '';
  console.log(
    nameIsValid,
    lastNameIsValid,
    emailIsValid,
    addressIsValid,
    phoneIsValid,
    zipCodeIsValid
  );
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
                  className={nameErrClass}
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
                  className={lastNameErrClass}
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
                  className={emailErrClass}
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
                  className={addressErrClass}
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
                  className={zipCodeErrClass}
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
                  className={phoneErrClass}
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
                <Link to="/menu">
                  <button type="submit" disabled={!isFormValid}>
                    Submit
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </section>
      )}
    </Fragment>
  );
};

export default CheckoutForm;
