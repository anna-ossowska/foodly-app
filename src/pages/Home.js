import { Fragment } from 'react';

import BannerHome from '../components/Layout/Banners/BannerHome';
import NewsLetter from '../components/Layout/Newsletter';
import PopularDishes from '../components/Layout/PopularDishes';

const Home = () => {
  return (
    <Fragment>
      <BannerHome />
      <PopularDishes />
      <NewsLetter />
    </Fragment>
  );
};
export default Home;
