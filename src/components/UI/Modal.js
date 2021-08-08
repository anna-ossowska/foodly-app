import { Fragment } from 'react';
import Card from './Card';
import classes from './Modal.module.css';

const Modal = (props) => {
  return (
    <Fragment>
      <div className={classes.modal}>
        <Card>{props.children}</Card>
      </div>
    </Fragment>
  );
};

export default Modal;
