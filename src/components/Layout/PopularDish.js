import classes from './PopularDish.module.css';

const PopularDish = (props) => {
  return (
    <div className={classes['dish-card']}>
      <img src={props.image} alt="dish" />
      <div className={classes.info}>
        <div className="info-header">
          <h4 className={classes.title}>{props.title}</h4>
          <p className={classes.description}>{props.shortDescription}</p>
        </div>
        <p className={classes.price}>${props.price}</p>
      </div>
    </div>
  );
};

export default PopularDish;
