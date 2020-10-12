function underAgeValidate(birthday) {
  // it will accept two types of format yyyy-mm-dd and yyyy/mm/dd
  var optimizedBirthday = birthday.replace(/-/g, '/');

  //set date based on birthday at 01:00:00 hours GMT+0100 (CET)
  var myBirthday = new Date(optimizedBirthday);

  // set current day on 01:00:00 hours GMT+0100 (CET)
  var currentDate = new Date().toJSON().slice(0, 10) + ' 01:00:00';

  // calculate age comparing current date and borthday
  var myAge = ~~((Date.now(currentDate) - myBirthday) / 31557600000);

  if (myAge < 18) {
    return false;
  } else {
    return true;
  }
}

const phoneNumberCheck = input => {
  var phoneno = /^\d{10}$/;
  if (input.match(phoneno)) {
    return true;
  } else {
    return false;
  }
};

export default function validateInfo(values) {
  let errors = {};

  //Name validator
  if (!values.name.trim()) {
    errors.name = 'Name required';
  } else if (values.name.length < 5) {
    errors.name = 'Name should have at least 5 characters';
  }

  //Surname validator
  if (!values.surname.trim()) {
    errors.surname = 'Surname required';
  } else if (values.surname.length < 5) {
    errors.surname = 'Surname should have at least 5 characters';
  }

  //Date Of Birth validator
  if (!values.dateOfBirth.trim()) {
    errors.dateOfBirth = 'Date of birth required';
  } else if (!underAgeValidate(values.dateOfBirth)) {
    errors.dateOfBirth = 'You must be older than 18 years old';
  }

  //Phone Number validator
  if (!values.phoneNumber) {
    errors.phoneNumber = 'Phone Number is required';
  } else if (!phoneNumberCheck(values.phoneNumber)) {
    errors.phoneNumber = '10 digits are required';
  }

  //Address validator
  if (!values.address.trim()) {
    errors.address = 'Address is required';
  }
  return errors;
}
