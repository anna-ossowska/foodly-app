import { useState } from 'react';

const useInput = (validate) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [valueIsTouched, setValueIsTouched] = useState(false);

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const valueBlurHandler = (e) => {
    setValueIsTouched(true);
  };

  const isValid = validate(enteredValue);
  const hasError = !isValid && valueIsTouched;

  const resetInput = () => {
    setEnteredValue('');
  };

  return {
    enteredValue,
    valueChangeHandler,
    valueBlurHandler,
    isValid,
    hasError,
    resetInput,
  };
};

export default useInput;
