import React from 'react';
import { useSelector } from 'react-redux';
import './Form.css';

const FormSuccess = () => {
  const user = useSelector(state => state.user.User);

  let displayInfo;
  if (user) {
    displayInfo = (
      <div className='form-success-info'>
        <div>
          <h2>Name:</h2>
          {user.name}
        </div>
        <div>
          <h2>Surname:</h2>
          {user.name}
        </div>
        <div>
          <h2>Date of birth:</h2>
          {user.dateOfBirth}
        </div>
        <div>
          <h2>Phone number:</h2>
          {user.phoneNumber}
        </div>
        <div>
          <h2>Address:</h2>
          {user.address}
        </div>
        {user.address2 && (
          <div>
            <h2>Second Address:</h2>
            {user.address2}
          </div>
        )}
      </div>
    );
  }
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>
        You form have been succesfully submitted!
      </h1>
      <div className='form-success-image'>
        <img
          style={{ width: '100px' }}
          src='https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/18552593841537356147-512.png'
          alt='success-image'
        />
      </div>
      <div>{displayInfo}</div>
    </div>
  );
};

export default FormSuccess;
