import classes from './Newsletter.module.css';

const NewsLetter = () => {
  return (
    <section className={classes['newsletter-section']}>
      <div className={classes['newsletter-container']}>
        <h4>
          Join as a new member
          <br />
          and get discount up to 50%
        </h4>
        <form>
          <div className={classes['newsletter-control']}>
            <input type="email" placeholder="Enter your email" />
            <button className={'btn-main'}>Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
