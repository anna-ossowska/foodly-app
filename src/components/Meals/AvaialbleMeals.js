import MealItem from './MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    title: 'Salad 1',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vel perspiciatis illum ea modi illo quidem rerum.',
    price: 22.99,
  },
  {
    id: 'm2',
    title: 'Salad 2',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vel perspiciatis illum ea modi illo quidem rerum.',
    price: 16.5,
  },
  {
    id: 'm3',
    title: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  return (
    <ul>
      {DUMMY_MEALS.map((meal) => {
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
