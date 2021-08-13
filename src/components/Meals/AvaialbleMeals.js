import { useSelector } from 'react-redux';
import MealItem from './MealItem';

const AvailableMeals = () => {
  const items = useSelector((state) => state.menu.items);

  return (
    <ul>
      {items.map((meal) => {
        return (
          <MealItem
            key={meal.id}
            id={meal.id}
            title={meal.title}
            description={meal.description}
            price={meal.price}
          />
        );
      })}
    </ul>
  );
};

export default AvailableMeals;
