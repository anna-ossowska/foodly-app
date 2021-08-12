import { Fragment } from 'react';
import BannerHome from '../components/Layout/BannerHome';
import NewsLetter from '../components/Layout/Newsletter';
import PopularDishes from '../components/Layout/PopularDishes';

const Home = (props) => {
  return (
    <Fragment>
      <BannerHome />
      <PopularDishes />
      <NewsLetter />
    </Fragment>
  );
};
export default Home;
