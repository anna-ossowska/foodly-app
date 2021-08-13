import MealItem from './MealItem';

const AVAILABLE_MEALS = [
  {
    id: 'm1',
    title: 'Grilled lobster with Thai herbs',
    description:
      'lobster, lemongrass, baby spinach, peas, coconut milk, mint, coriander, garlic.',
    price: 36.99,
    popular: false,
  },

  {
    id: 'm2',
    title: 'Slow cooker chicken Pho',
    description:
      'chicken, ginger, fresh red chilli peppers, broccoli, carrot, garlic, Thai fish sauce, rice noodles',
    price: 32.99,
    popular: true,
  },

  {
    id: 'm3',
    title: 'Steamed ginger fish',
    description:
      'cod, basil leaves, parsley, ginger, sesame oil, eggs, spring onions, curry, jasmine rice',
    price: 30.99,
    popular: false,
  },

  {
    id: 'm4',
    title: 'Goat cheese quenelles',
    description: 'fresh peas, pea shoots, radishes, mint leaves, orange juice',
    price: 28.99,
    popular: false,
  },

  {
    id: 'm5',
    title: 'Halloumi salad',
    description:
      'harissa paste, lemon, vine tomatoes, cider vinegar, Greek-style yoghurt, rocket leaves',
    price: 25.99,
    popular: false,
  },

  {
    id: 'm6',
    title: 'Tomato soup with seeds',
    description:
      'ripe tomatoes, carrot, garlic, toasted pumpkin and sesame seeds, miso, low-fat yoghurt',
    price: 20.99,
    popular: true,
  },
  {
    id: 'm7',
    title: 'Roasted mushroom salad',
    description:
      'cremini mushrooms, cherry tomatoes, lemon, garlic, parsley, basil, rocket salad',
    price: 22.99,
    popular: true,
  },
  {
    id: 'm8',
    title: 'Avocado rice bowl',
    description:
      'grain brown rice, ripe avocado, radishes, apple cider vinegar, fresh coriander, lemon',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  return (
    <ul>
      {AVAILABLE_MEALS.map((meal) => {
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
