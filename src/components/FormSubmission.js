import React from 'react';
import validate from './utils/validateInfo';
import useForm from '../components/utils/formInput';
import { useSelector } from 'react-redux';
import './Form.css';
import LoadingScreen from './utils/LoadingScreen';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  const isLoading = useSelector(state => state.user.loading);

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Get started with us today! Fill in the fields below to continue.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Name</label>
          <input
            className='form-input'
            type='text'
            name='name'
            placeholder='Enter your name'
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Surname</label>
          <input
            className='form-input'
            type='text'
            name='surname'
            placeholder='Enter your surname'
            value={values.surname}
            onChange={handleChange}
          />
          {errors.surname && <p>{errors.surname}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Date of birth</label>
          <input
            className='form-input'
            type='text'
            name='dateOfBirth'
            placeholder='Enter your date of birth: e.g 1992/02/19 or 1989-05-18'
            value={values.dateOfBirth}
            onChange={handleChange}
          />
          {errors.dateOfBirth && <p>{errors.dateOfBirth}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Phone Number</label>
          <input
            className='form-input'
            type='number'
            name='phoneNumber'
            placeholder='Enter your phone number'
            value={values.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Address</label>
          <input
            className='form-input'
            type='text'
            name='address'
            placeholder='Enter your home address'
            value={values.address}
            onChange={handleChange}
          />
          {errors.address && <p>{errors.address}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Second Address (Optional)</label>
          <input
            className='form-input'
            type='text'
            name='address2'
            placeholder='Enter your second address'
            value={values.address2}
            onChange={handleChange}
          />
        </div>
        <button className='form-input-btn' type='submit'>
          {isLoading ? <LoadingScreen /> : <span>Submit</span>}
        </button>
      </form>
    </div>
  );
};

export default FormSignup;
