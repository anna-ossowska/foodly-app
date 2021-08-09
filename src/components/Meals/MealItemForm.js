import classes from './MealItemForm.module.css';
import { useRef, useState } from 'react';

const MealItem = (props) => {
  const amountInputRef = useRef();
  const [isInputValid, setIsInputValid] = useState(true);

  const mealSubmitHandler = (e) => {
    e.preventDefault();

    let enetredAmount = +amountInputRef.current.value;
    console.log(enetredAmount);

    // Validate input
    if (enetredAmount > 5 || enetredAmount < 0) {
      setIsInputValid(false);
      return;
    }

    if (isInputValid) props.onAddToCart(enetredAmount);
  };

  return (
    <div className={classes['menu-form']}>
      <form onSubmit={mealSubmitHandler}>
        <div className={classes['menu-form-control']}>
          <label>Amount</label>
          <input
            type="number"
            min="1"
            step="1"
            max="5"
            defaultValue="1"
            ref={amountInputRef}
          />
        </div>

        <div className={classes['form-action']}>
          <button className="btn-secondary">Add</button>
        </div>
      </form>
    </div>
  );
};

export default MealItem;
