import classes from './Notification.module.css';

const Notification = (props) => {
  return (
    <div className={`${props.className} ${classes.notification}`}>
      <p>{props.msg}</p>
    </div>
  );
};

export default Notification;
