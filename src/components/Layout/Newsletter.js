import classes from './Newsletter.module.css';
import { Fragment, useRef, useState, useEffect } from 'react';
import Notification from '../UI/Notification';

const NewsLetter = () => {
  const inputRef = useRef();
  const [msg, setMsg] = useState('');
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  const [isNotifVisible, setIsNotifVisible] = useState(false);

  const isEmailValid = (value) => {
    const regex = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}/g;
    return regex.test(value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsEmailSubmitted(true);

    const isValid = isEmailValid(inputRef.current.value);

    if (!isValid) {
      setMsg(
        <p>
          Please enter a <span>valid</span> email address.
        </p>
      );
    } else {
      setMsg(
        <p>
          <span>Thank you for your subscription!</span> You will receive the
          confirmation email shortly.
        </p>
      );
    }
  };

  useEffect(() => {
    if (!isEmailSubmitted) return;

    setIsNotifVisible(true);

    const timer = setTimeout(() => {
      setIsNotifVisible(false);
      setIsEmailSubmitted(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [isEmailSubmitted]);

  const notifClasses = isNotifVisible ? '' : 'hidden';

  return (
    <Fragment>
      <Notification msg={msg} className={notifClasses} />
      <section className={classes['newsletter-section']}>
        <div className={classes['newsletter-container']}>
          <h4>
            Join as a new member
            <br />
            and get discount up to 50%
          </h4>
          <form onSubmit={submitHandler}>
            <div className={classes['newsletter-control']}>
              <input placeholder="Enter your email" ref={inputRef} />
              <button type="submit" className={'btn-newsletter'}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default NewsLetter;
