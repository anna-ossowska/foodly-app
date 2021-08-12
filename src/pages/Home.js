import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import BannerHome from '../components/Layout/Banners/BannerHome';
import NewsLetter from '../components/Layout/Newsletter';
import PopularDishes from '../components/Layout/PopularDishes';

const Home = () => {
  return (
    <Fragment>
      <Link to="/menu">
        <BannerHome />
      </Link>
      <PopularDishes />
      <NewsLetter />
    </Fragment>
  );
};
export default Home;
