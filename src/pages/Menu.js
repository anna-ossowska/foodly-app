import Banner from '../components/Layout/Banner';
import BannerBoard from '../components/Layout/BannerBoard';
import MenuCard from '../components/UI/MenuCard';
import classes from './Menu.module.css';

const Menu = (props) => {
  return (
    <main className={classes['menu-grid']}>
      <Banner />
      <BannerBoard />
      <MenuCard />
    </main>
  );
};

export default Menu;
