import classes from './Newsletter.module.css';
import { useRef } from 'react';

const NewsLetter = () => {
  const inputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('xx');

    // if (inputRef.current.value === '' || )
  };
  return (
    <section className={classes['newsletter-section']}>
      <div className={classes['newsletter-container']}>
        <h4>
          Join as a new member
          <br />
          and get discount up to 50%
        </h4>
        <form onSubmit={submitHandler}>
          <div className={classes['newsletter-control']}>
            <input
              type="email"
              placeholder="Enter your email"
              value={inputRef}
            />
            <button type="submit" className={'btn-main'}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
