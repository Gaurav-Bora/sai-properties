// Signup.jsx
import '../style/signup.css'
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Assuming you are using React Router

import PropertyHolderType from '../assets/propertyHolderType';
// import SignupBg from '../assets/loginBg.jpg'; // Import your signup background image
// import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { createUrl } from '../utils/Utils';
import MainFooter from '../Components/MainFooter';
const Signup = () => {
  const navigate = useNavigate()

  const getFormattedDateTime = () => {
    const now = new Date();
    const numericDateTime = now
      .toISOString()
      .replace(/[^0-9]/g, ''); // Remove non-numeric characters
    return `${numericDateTime}`;
  };

  const [fullName, setFullName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [error] = useState('');
  const [propertyHolderType, setPropertyHolderType] = useState(''); // New state for Property Holder Type
  const [status,] = useState('inactive');
  // const [createdAt, ] = useState(getFormattedDateTime());
  const [isDeleted,] = useState(1);
  const [phKey,] = useState(`PH-${getFormattedDateTime()}`);
  // const [ setShowToast] = useState(false);
  const [nameError, setNameError] = useState('');
  const [contactError, setContactError] = useState('');
  // const [emailErrorr, setEmailErrorr] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [cpasswordError, setCPasswordError] = useState('');
  const [propertyHolderTypeError, setPropertyHolderTypeError] = useState('');


  const handlePropertyHolderTypeChange = (event) => {
    setPropertyHolderType(event.target.value);
    setPropertyHolderTypeError('');
  };

  const handleFullNameChange = (event) => {
    const { name, value } = event.target;
    
    // Check if the name is "fname" and if it contains any numbers
    if (name === "fname" && /\d/.test(value)) {
        // If numbers are detected, return without updating the state
        return;
    }
    
    // Update the state with the new value
    setFullName(value);
};


  const handleContactChange = (event) => {
    let contact = event.target.value.slice(0, 10); // Truncate input to 10 digits
    setContact(contact);
    setContactError('');
  
    // Check if the truncated contact number length is less than the original input length
    
  };
  

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError('');  
  };

  const handlePasswordChange = (event) => {
    const password = event.target.value;
    setPassword(password);
    setPasswordError('');
  
    // Check if the password length is greater than 6
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
    }
  };
  
  const handleCPasswordChange = (event) => {
    setCPassword(event.target.value);
    setCPasswordError('');
  };
  useEffect(() => {
    const validateEmail = async () => {
      if (!email) return; // Skip validation if email is empty

      const emailValidationUrl = createUrl('/user/signup-email-validation.php');
      try {
        const response = await axios.post(emailValidationUrl, { email });
        if (!response.data.valid) {
          setEmailError(response.data.message);
        } else {
          setEmailError('');
        }
      } catch (error) {
        console.error('Error during email validation:', error);
        setEmailError('Email validation failed');
      }
    };

    validateEmail();
  }, [email]);


  const handleSubmit = async (event) => {
    event.preventDefault();
    const signupUrl = createUrl('/user/signup.php');
    const errors = {}; // Object to store all validation errors
   
    // Validate form fields
    if (!propertyHolderType) {
      errors.propertyHolderType = 'Please select a Property Holder Type';
    }
    if (!fullName) {
      errors.fullName = 'Full Name cannot be empty';
    }
    if (!contact) {
      errors.contact = 'Contact cannot be empty';
    } else if (contact.length !== 10) {
      errors.contact = 'Enter valid contact number';
    }
    if (!email) {
      errors.email = 'Email cannot be empty';
    }
    if (!email) {
      errors.email = 'Email cannot be empty';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email format';
    }
    if (!password) {
      errors.password = 'Password cannot be empty';
    }
    if (!cpassword) {
      errors.cpassword = 'Confirm Password cannot be empty';
    }
    if (password !== cpassword) {
      errors.cpassword = 'Password and Confirm Password do not match';
    }
    if (emailError) {
      errors.emailError = 'Email already exists';
    }
  
    // Update state with all the errors
    setPropertyHolderTypeError(errors.propertyHolderType || '');
    setNameError(errors.fullName || '');
    setContactError(errors.contact || '');
    setEmailError(errors.email || '');
    setPasswordError(errors.password || '');
    setCPasswordError(errors.cpassword || '');
  
    // Check if there are any errors
    if (Object.keys(errors).length > 0) {
      return; // Return early if there are errors
    }
  
    try {
      const response = await axios.post(signupUrl, {
        fname: fullName,
        email: email,
        mobile1: contact,
        status: status,
        isdeleted: isDeleted,
        propertyholdertype: propertyHolderType,
        phkey: phKey,
        username: email,
        password: password,
      });
  
      if (response.data.status === 'success') {
        // notify(response.data.message, 'success');
        setFullName('');
        setEmail('');
        setContact('');
        setPassword('');
        setPropertyHolderType('');
        setCPassword('');
        setTimeout(() => {
          navigate('/front/login');
        }, 1000);
      } else {
        // notify(response.data.message, 'error');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      // notify('Internal Server Error', 'error');
    }
  };
  


  return (
    <div
      className="container-fluid mt-5 row"
      style={{
        backgroundImage: `url(http://stage.saiproperties.co.in/front/front-images/loginBg.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Ensure the background covers the entire viewport height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Optional: Add a light background color for better readability
      }}
    >

      <div className="row justify-content-center align-items-center min-vh-100 container my-4">
        <div className="col-md-6 row">
          <div className="card">
            <div className="card-header text-center text-white bg-dark">
              <h3 className="fw-bold ">Sign Up</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                  <label htmlFor="propertyHolderType" className="form-label fw-bold">
                    Property Holder Type
                  </label>
                  <select
                    className="form-control"
                    id="propertyHolderType"
                    value={propertyHolderType}
                    name='propertyholdertype'
                    onChange={handlePropertyHolderTypeChange}
                  >
                    <option value=''>Select</option>
                    {PropertyHolderType.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {propertyHolderTypeError && <div className="text-danger">{propertyHolderTypeError}</div>}

                </div>
                
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-bold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className={`form-control ${nameError ? 'error-border' : ''}`}
                    id="name"
                    name="fname"
                    value={fullName}
                    onChange={handleFullNameChange}
                  />
                  {nameError && <div className="text-danger">{nameError}</div>}
                </div>
                {/* Contact */}
                <div className="mb-3">
                  <label htmlFor="contact" className="form-label fw-bold">
                    Contact
                  </label>
                  <input
                    type="number"
                    className={`form-control ${contactError ? 'error-border' : ''}`}
                    id="contact"
                    name="mobile1"
                    value={contact}
                    onChange={handleContactChange}
                  />
                  {contactError && <div className="text-danger">{contactError}</div>}
                </div>
                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-bold">
                    Email address
                  </label>
                  <input
                    type="email"
                    className={`form-control ${emailError ? 'error-border' : ''}`}
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  {emailError && <div className="text-danger">{emailError}</div>}
                </div>
                {/* Password */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label fw-bold">
                    Password
                  </label>
                  <input
                    type="password"
                    className={`form-control ${passwordError ? 'error-border' : ''}`}
                    id="password"
                    name="pass"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  {passwordError && <div className="text-danger">{passwordError}</div>}
                </div>
                {/* Confirm Password */}
                <div className="mb-3">
                  <label htmlFor="cpassword" className="form-label fw-bold">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className={`form-control ${cpasswordError ? 'error-border' : ''}`}
                    id="cpassword"
                    name="pass"
                    value={cpassword}
                    onChange={handleCPasswordChange}
                  />
                  {cpasswordError && <div className="text-danger">{cpasswordError}</div>}
                </div>
                <input type="hidden" name="status" value={status} />

                <input type="hidden" name="isdeleted" value={isDeleted} />
                <input type="hidden" name="phKey" value={phKey} />
                {/* <input type="hidden" name="username" value={email} /> */}
                {error && <div className="alert alert-danger">{error}</div>}
                {/* Submit Button */}
                <button type="submit" className="btn btn-primary w-100">
                  Sign Up
                </button>
              </form>
            </div>
            <div className="card-footer text-center text-white bg-dark">
              <p className="mb-0">
                Already have an account? <Link to="/front/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <ToastContainer /> */}
      <MainFooter />
    </div>
  );
};

export default Signup;
