import classes from './BannerBoard.module.css';

const BannerBoard = () => {
  return (
    <div className={classes['banner-board']}>
      <h3>
        Hungry?
        <br />
        You're in the right place
      </h3>
      <hr />
      <p>
        Choose your favorite meal from our broad selection, and enjoy a
        delicious lunch or dinner at home.
      </p>
    </div>
  );
};

export default BannerBoard;
