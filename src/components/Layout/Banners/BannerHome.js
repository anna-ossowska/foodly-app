import classes from './BannerHome.module.css';
import { Link } from 'react-router-dom';

const BannerHome = () => {
  return (
    <section className={classes['banner-section']}>
      <div className={classes['banner-home']}>
        <div className={classes['banner-home-text']}>
          <h2>
            Healthy food
            <br />
            for healthier future
          </h2>
          <p>
            All our meals are created with the highest quality ingredients and
            are freshly prepared by chefs, with no preservatives.
          </p>
          <Link to="/menu">
            <button className="btn-banner">Get started</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BannerHome;
