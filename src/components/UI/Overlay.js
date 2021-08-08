import classes from './Overlay.module.css';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const Overlay = () => {
  const dispatch = useDispatch();

  const hideCartHandler = () => {
    dispatch(uiActions.hideCart());
  };
  return <div className={classes.overlay} onClick={hideCartHandler}></div>;
};

export default Overlay;
