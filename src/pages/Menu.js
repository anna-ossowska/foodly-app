import BannerMenu from '../components/Layout/BannerMenu';
import BannerBoard from '../components/Layout/BannerBoard';
import MenuCard from '../components/UI/MenuCard';
import classes from './Menu.module.css';

const Menu = (props) => {
  return (
    <main className={classes['menu-grid']}>
      <BannerMenu />
      <BannerBoard />
      <MenuCard />
    </main>
  );
};

export default Menu;
