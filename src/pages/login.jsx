// Login.jsx

// ... (import statements)
import  { useState } from 'react';

import axios from 'axios';
import { createUrl } from '../utils/Utils';
import { useDispatch } from 'react-redux';
import { login } from '../../src/features/auth';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [apiError, setApiError] = useState('');
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const apiUrl = createUrl('/user/login');
      const response = await axios.post(apiUrl, {
        email: email,
        password: password,
      });
  
      if (response.data.status === 'success') {
        const {token, name, propertyholdertype, id } = response.data.data; // Access data field
  
        sessionStorage.setItem('name', name);
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('propertyholdertype', propertyholdertype);
        sessionStorage.setItem('id', id);
  
        dispatch(login());
  
        toast.success(`Welcome ${name} to Sai Properties`);
  
        navigate('/front');
      } else {
        setApiError(response.data.message || 'Invalid email or password.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      if (error.response) {
        console.error('Server responded with:', error.response.data);
        setApiError(error.response.data.message || 'Internal Server Error');
      } else {
        setApiError('Internal Server Error');
      }
    }
  };
  
  

  return (
    <div
      className="container-fluid mt-5"
      style={{
        backgroundImage: `url(http://stage.saiproperties.co.in/front/front-images/loginBg.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      }}
    >
      <div className="row justify-content-center align-items-center min-vh-100 container">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center text-white bg-dark">
              <h3 className="fw-bold">Login</h3>
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
                    name='email'
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
                    name='pass'
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
                {apiError && <div className="alert alert-danger">{apiError}</div>}
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
