import { createSlice } from '@reduxjs/toolkit';
import dish1Image from '../images/dish-1.png';
import dish2Image from '../images/dish-2.png';
import dish3Image from '../images/dish-3.png';

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    items: [
      {
        id: 'm1',
        title: 'Grilled lobster with Thai herbs',
        description:
          'lobster, lemongrass, baby spinach, peas, coconut milk, mint, coriander, garlic.',
        shortDescription: 'lobster, lemongrass...',
        price: 36.99,
        isPopular: false,
        image: null,
      },

      {
        id: 'm2',
        title: 'Slow cooker chicken Pho',
        description:
          'chicken, ginger, Thai fish sauce, fresh red chilli peppers, broccoli, carrot, garlic, rice noodles',
        shortDescription: 'chicken, ginger, Thai fish sauce...',
        price: 32.99,
        isPopular: true,
        image: dish1Image,
      },

      {
        id: 'm3',
        title: 'Steamed ginger fish',
        description:
          'cod, basil leaves, parsley, ginger, sesame oil, eggs, spring onions, curry, jasmine rice',
        shortDescription: 'cod, basil leaves, parsley...',
        price: 30.99,
        isPopular: false,
        image: null,
      },

      {
        id: 'm4',
        title: 'Goat cheese quenelles',
        description:
          'fresh peas, pea shoots, radishes, mint leaves, orange juice',
        shortDescription: 'fresh peas, pea shoots...',
        price: 28.99,
        isPopular: false,
        image: null,
      },

      {
        id: 'm5',
        title: 'Halloumi salad',
        description:
          'harissa paste, lemon, vine tomatoes, cider vinegar, Greek-style yoghurt, rocket leaves',
        shortDescription: 'harissa paste, lemon, vine tomatoes...',
        price: 25.99,
        isPopular: false,
        image: null,
      },

      {
        id: 'm6',
        title: 'Tomato soup with seeds',
        description:
          'ripe tomatoes, carrot, miso, toasted pumpkin and sesame seeds, low-fat yoghurt',
        shortDescription: 'ripe tomatoes, carrot, miso...',
        price: 20.99,
        isPopular: true,
        image: dish2Image,
      },
      {
        id: 'm7',
        title: 'Roasted mushroom salad',
        description:
          'cremini mushrooms, cherry tomatoes, lemon, garlic, parsley, basil, rocket salad',
        shortDescription: 'cherry tomatoes, lemon...',
        price: 22.99,
        isPopular: true,
        image: dish3Image,
      },
      {
        id: 'm8',
        title: 'Avocado rice bowl',
        description:
          'brown rice, ripe avocado, radishes, apple cider vinegar, fresh coriander, lemon',
        shortDescription: 'brown rice, ripe avocado, radishes...',
        price: 18.99,
        isPopular: false,
        image: null,
      },
    ],
    reducers: {},
  },
});

export default menuSlice;
