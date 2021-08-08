import { Fragment } from 'react';
import ModalOverlay from './ModalOverlay';
import Overlay from './Overlay';
import ReactDOM from 'react-dom';

const Modal = (props) => {
  const portalEl = document.getElementById('overlays');
  return (
    <Fragment>
      {ReactDOM.createPortal(<Overlay />, portalEl)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalEl
      )}
    </Fragment>
  );
};

export default Modal;
