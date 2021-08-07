import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
  return (
    <li>
      <div className={classes['meal-info']}>
        <h4 className={classes['meal-title']}>
          {props.title}, &nbsp;
          <span className={classes['meal-price']}>${props.price}</span>
        </h4>
        <hr />
        <p className={classes['meal-description']}>{props.description}</p>
      </div>
      <MealItemForm />
    </li>
  );
};

export default MealItem;
