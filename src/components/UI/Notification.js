import classes from './Notification.module.css';

const Notification = (props) => {
  return (
    <div className={`${props.className} ${classes.notification}`}>
      <p>
        <span>{props.title}</span>&nbsp; has been successfully added to your
        cart!
      </p>
    </div>
  );
};

export default Notification;
