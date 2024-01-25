// Signup.jsx

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom'; // Assuming you are using React Router
import PropertyHolderType from '../assets/propertyHolderType';
// import SignupBg from '../assets/loginBg.jpg'; // Import your signup background image
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { createUrl } from '../utils/Utils';
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
  const [error] = useState('');
  const [propertyHolderType, setPropertyHolderType] = useState(''); // New state for Property Holder Type
  const [status, ] = useState('inactive');
  // const [createdAt, ] = useState(getFormattedDateTime());
  const [isDeleted, ] = useState(1);
  const [phKey, ] = useState(`PH-${getFormattedDateTime()}`);
  const [ setShowToast] = useState(false);


  const notify = (message, type = 'info') => {
    toast[type](message, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };


  const handlePropertyHolderTypeChange = (event) => {
    setPropertyHolderType(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleContactChange = (event) => {
    setContact(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleCPasswordChange = (event) => {
    setCPassword(event.target.value);
  };

 
  const handleSubmit = async (event) => {
    event.preventDefault();
    const apiUrl = createUrl('/user/signup');
  
    try {
      if (fullName.trim() === '') {
        notify('Full Name cannot be empty', 'error');
        return; // Stop the submission if validation fails
      } else if (email.trim() === '') {
        notify('Email cannot be empty', 'error');
        return;
      } else if (contact.trim() === '') {
        notify('Contact cannot be empty', 'error');
        return;
      } else if (password.trim() === '') {
        notify('Password cannot be empty', 'error');
        return;
      } else if (password !== cpassword) {
        notify('Confirm Password does not match', 'error');
        return;
      } else if (propertyHolderType === '') {
        notify('Property holder type cannot be empty', 'error');
        return;
      }
  
      const response = await axios.post(apiUrl, {
        fname: fullName,
        email: email,
        mobile1: contact,
        status: 'inactive',
        isdeleted: 1,
        propertyholdertype: propertyHolderType,
        phkey: `PH-${getFormattedDateTime()}`,
        username: email,
        pass: password,
      });
  
      // Assuming your API returns a JSON object with a 'status' and 'message' property
      if (response.data.status === 'success') {
        // Successful signup
        notify(response.data.message, 'success');
  
        // Clear form fields after successful submission
        setFullName('');
        setEmail('');
        setContact('');
        setPassword('');
        setPropertyHolderType('');
        setCPassword('');
        // Set showToast to true to display the toast
        setShowToast(true);

        setTimeout(() => {
          navigate('/front/login');
        }, 2000); // Adjust the delay time as needed
      
        
  
        // Navigate to the login page
        
      } else {
        // Failed signup
        notify(response.data.message, 'error');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      notify('Internal Server Error', 'error');
    }
  };
  
  
  

  


  return (
    <div
      className="container-fluid mt-5"
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

      <div className="row justify-content-center align-items-center min-vh-100 container">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center text-white bg-dark">
              <h3 className="fw-bold ">Sign Up</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
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
                </div>
                {/* Full Name */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-bold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name='fname'
                    value={fullName}
                    onChange={handleFullNameChange}
                  />
                </div>
                {/* Full Name */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-bold">
                    Contact
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="contact"
                    name='mobile1'
                    value={contact}
                    onChange={handleContactChange}
                  />
                </div>
                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-bold">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name='email'
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                {/* Password */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label fw-bold">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name='pass'
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label fw-bold">
                    Confirm-Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="cpassword"
                    name='pass'
                    value={cpassword}
                    onChange={handleCPasswordChange}
                  />
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
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
