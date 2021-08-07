import classes from './Footer.module.css';
import logo from '../../images/logo.png';

const Footer = () => {
  return (
    <footer className={classes['footer']}>
      <div className={classes['footer-info']}>
        <div className={classes['footer-logo']}>
          <img src={logo} alt="" />
        </div>
        <p>Espelundsveien 130</p>
        <p>Kristiansand 4630 Norway</p>
        <p>+47 951 97 489</p>
      </div>
      <div className={classes['footer-other']}>
        <ul>
          <li>
            <strong>Information</strong>
          </li>
          <li>About Us</li>
          <li>More Search</li>
          <li>Testimonials</li>
        </ul>
        <ul>
          <li>
            <strong>Helpful links</strong>
          </li>
          <li>Service</li>
          <li>Privacy</li>
          <li>Consitions</li>
        </ul>
        <ul>
          <li>
            <strong>Our Clients</strong>
          </li>
          <li>Events</li>
          <li>Memebership</li>
          <li>Special Offer</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
