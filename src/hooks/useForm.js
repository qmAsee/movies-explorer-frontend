import React, { useCallback, useState } from 'react';

import { CurrentUserContext } from '../context/CurrentUserContext';

export default function useForm() {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const currentUser = React.useContext(CurrentUserContext)

  const handleChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    
    setValues({
      ...values,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: evt.target.validationMessage,
    });
    
    setIsFormValid(evt.target.closest('#form').checkValidity());

    if (value === currentUser.name || value === currentUser.email) {
      setIsFormValid(false)
    }
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsFormValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsFormValid(newIsFormValid);
    },
    [setValues, setErrors, setIsFormValid],
  );

  return {
    setValues,
    values,
    handleChange,
    resetForm,
    errors,
    isFormValid,
  };
};