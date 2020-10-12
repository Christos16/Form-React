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
    // eslint-disable-next-line
    if (Object.keys(errors).length === 0 && isSubmitting) {
      // eslint-disable-next-line
      callback();
    }
    // eslint-disable-next-line
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default FormInput;
