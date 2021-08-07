import classes from './MealItemForm.module.css';

const MealItem = (props) => {
  return (
    <div className={classes['menu-form']}>
      <form>
        <div className={classes['menu-form-control']}>
          <label>Amount</label>
          <input type="number" min="1" step="1" max="5" defaultValue="1" />
        </div>

        <div className={classes['form-action']}>
          <button className="btn-secondary">Add</button>
        </div>
      </form>
    </div>
  );
};

export default MealItem;
