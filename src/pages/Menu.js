import BannerMenu from '../components/Layout/Banners/BannerMenu';
import BannerBoard from '../components/Layout/Banners/BannerBoard';
import MenuCard from '../components/UI/MenuCard';
import classes from './Menu.module.css';
import { useEffect } from 'react';

const Menu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={classes['menu-grid']}>
      <BannerMenu />
      <BannerBoard />
      <MenuCard />
    </main>
  );
};

export default Menu;
