import classes from './MenuCard.module.css';
import AvailableMeals from '../Meals/AvaialbleMeals';

const MenuCard = () => {
  return (
    <div className={classes['menu-card']}>
      <AvailableMeals />
    </div>
  );
};

export default MenuCard;
