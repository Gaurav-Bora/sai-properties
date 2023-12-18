// Signup.jsx

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router
// import SignupBg from '../assets/loginBg.jpg'; // Import your signup background image

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic form validation
    if (!fullName || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    // Additional validation logic, if needed

    // Your signup logic goes here

    // Reset form and error state after successful signup
    setFullName('');
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <div
      className="container-fluid mt-5"
      style={{
        backgroundImage: `url(http://stage.saiproperties.co.in/front-images/loginBg.jpg)`,
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
                {/* Full Name */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-bold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={fullName}
                    onChange={handleFullNameChange}
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
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
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
    </div>
  );
};

export default Signup;
