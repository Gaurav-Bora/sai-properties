// Login.jsx

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router
// import LoginBg from '../assets/loginBg.jpg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic form validation
    if (!email || !password || !userType) {
      setError('Please fill in all fields.');
      return;
    }

    // Your login logic goes here

    // Reset form and error state after successful login
    setEmail('');
    setPassword('');
    setUserType('');
    setError('');
  };

  return (
    <div
      className="container-fluid mt-5"
      style={{
        // backgroundImage: `url(${LoginBg})`,
        backgroundImage: `url(http://stage.saiproperties.co.in/front-images/loginBg.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Ensure the background covers the entire viewport height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark background overlay
      }}
    >
      <div className="row justify-content-center align-items-center min-vh-100 container">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center text-white bg-dark">
              <h3 className="fw-bold ">Login</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {/* User Type Dropdown */}
                <div className="mb-3">
                  <label htmlFor="userTypeDropdown" className="form-label text-black fw-bold">
                    User Type
                  </label>
                  <select
                    id="userTypeDropdown"
                    className="form-select"
                    value={userType}
                    onChange={handleUserTypeChange}
                  >
                    <option value="">Select User Type</option>
                    <option value="owner">Owner</option>
                    <option value="tenant">Tenant</option>
                    <option value="poa">Power of Attorney</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-black fw-bold">
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
                <div className="mb-3">
                  <label htmlFor="password" className="form-label text-black fw-bold">
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
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="rememberMe" />
                  <label className="form-check-label text-black fw-bold" htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                {/* Submit Button */}
                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </form>
            </div>
            <div className="card-footer text-center text-white bg-dark">
              <p className="mb-0">
                Don`t have an account? <Link to="/front/signup">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
