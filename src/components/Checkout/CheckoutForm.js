import BannerCheckout from '../Layout/Banners/BannerCheckout';
import classes from './CheckoutForm.module.css';

import useInput from '../../hooks/use-input';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const CheckoutForm = () => {
  // ------- VALIDATION -------
  const dispatch = useDispatch();

  const cartState = useSelector((state) => state.cart);
  console.log('cart', cartState);

  const isNameValid = (value) => {
    const regex = /^[a-z ,.'-]+$/i;
    return regex.test(value);
  };

  const isEmailValid = (value) => {
    const regex = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}/g;
    return regex.test(value);
  };

  const isAddressValid = (value) => {
    const regex = /^[#.0-9a-zA-Z\s,-]+$/;
    return regex.test(value);
  };

  const isZipCodeValid = (value) => {
    const regex = /^\d{4}$/;
    return regex.test(value);
  };

  const isPhoneValid = (value) => {
    const regex = /^(\+)?[0-9]{8,12}$/;
    return regex.test(value);
  };

  const {
    enteredValue: enteredName,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    isValid: nameIsValid,
    hasError: nameHasError,
    resetInput: resetNameInput,
  } = useInput(isNameValid);

  const {
    enteredValue: enteredLastName,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    resetInput: resetLastNameInput,
  } = useInput(isNameValid);

  const {
    enteredValue: enteredEmail,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    isValid: emailIsValid,
    hasError: emailHasError,
    resetInput: resetEmailInput,
  } = useInput(isEmailValid);

  const {
    enteredValue: enteredAddress,
    valueChangeHandler: addressChangeHandler,
    valueBlurHandler: addressBlurHandler,
    isValid: addressIsValid,
    hasError: addressHasError,
    resetInput: resetAddressInput,
  } = useInput(isAddressValid);

  const {
    enteredValue: enteredZipCode,
    valueChangeHandler: zipCodeChangeHandler,
    valueBlurHandler: zipCodeBlurHandler,
    isValid: zipCodeIsValid,
    hasError: zipCodeHasError,
    resetInput: resetZipCodeInput,
  } = useInput(isZipCodeValid);

  const {
    enteredValue: enteredPhone,
    valueChangeHandler: phoneChangeHandler,
    valueBlurHandler: phoneBlurHandler,
    isValid: phoneIsValid,
    hasError: phoneHasError,
    resetInput: resetPhoneInput,
  } = useInput(isPhoneValid);

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
              <p className={classes.err}>Field must contain letters [a-zA-Z]</p>
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
              <p className={classes.err}>Field must contain letters [a-zA-Z]</p>
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
              <p className={classes.err}>Please enter a valid e-mail address</p>
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
              <p className={classes.err}>Please enter a valid address</p>
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
              <p className={classes.err}>Field must be 4 digits long</p>
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
                Field can start with '+' sign, and must be 8-12 digits long
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
  );
};

export default CheckoutForm;
