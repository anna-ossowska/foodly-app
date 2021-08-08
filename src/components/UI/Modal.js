import { Fragment } from 'react';
import Card from './Card';

const Modal = (props) => {
  return (
    <Fragment>
      <div className="modal">
        <Card />
      </div>
    </Fragment>
  );
};

export default Modal;
