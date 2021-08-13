import classes from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={classes.container}>
      <p>
        <span className={classes.err}>400</span>
        <br />
        <span className={classes.msg}>page not found</span>
      </p>
    </div>
  );
};

export default NotFound;
