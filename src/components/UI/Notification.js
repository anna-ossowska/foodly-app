import classes from './Notification.module.css';

const Notification = (props) => {
  return (
    <div className={`${props.className} ${classes.notification}`}>
      {props.title && (
        <p>
          <span>{props.title}</span>&nbsp; has been successfully added to your
          cart!
        </p>
      )}

      {props.message && <p>{props.message}</p>}
    </div>
  );
};

export default Notification;
