import classes from './Notification.module.css';

const Notification = (props) => {
  return (
    <div className={`${props.className} ${classes.notification}`}>
      {/* /////////////////////// */}
      <div>{props.msg}</div>
    </div>
  );
};

export default Notification;
