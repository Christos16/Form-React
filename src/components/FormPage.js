import React, { useState } from 'react';
import './Form.css';
import FormSuccess from './FormSuccess';
import FormSubmission from './FormSubmission';
import { setLoading } from '../actions/index';
import { useDispatch } from 'react-redux';
import landingImage from '../img/sapiens.png';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();

  function submitForm() {
    dispatch(setLoading());
    setTimeout(function() {
      setIsSubmitted(true);
    }, 3000);
  }

  return (
    <>
      <div className='form-container'>
        <div className='form-content-left'>
          <img className='form-img' src={landingImage} alt='' />
        </div>
        {!isSubmitted ? (
          <FormSubmission submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
