import { Fragment } from 'react';
import BannerHome from '../components/Layout/BannerHome';
import PopularDishes from '../components/Layout/PopularDishes';

const Home = (props) => {
  return (
    <Fragment>
      <BannerHome />
      <PopularDishes />
    </Fragment>
  );
};
export default Home;
