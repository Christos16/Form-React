import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUserForm } from '../../actions/index';

const FormInput = (callback, validate) => {
  const [values, setValues] = useState({
    name: '',
    surname: '',
    dateOfBirth: '',
    phoneNumber: '',
    address: '',
    address2: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    dispatch(setUserForm(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default FormInput;
