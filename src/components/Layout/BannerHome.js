import classes from './BannerHome.module.css';

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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
            ratione vero totam natus eveniet consectetur esse, minima odit
            numquam quae!
          </p>
          <button className="btn-banner">Get started</button>
        </div>
      </div>
    </section>
  );
};

export default BannerHome;
