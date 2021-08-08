import { Fragment } from 'react';
import Card from './Card';
import classes from './ModalOverlay.module.css';

const ModalOverlay = (props) => {
  return (
    <Fragment>
      <div className={classes.modal}>
        <Card>{props.children}</Card>
      </div>
    </Fragment>
  );
};

export default ModalOverlay;
