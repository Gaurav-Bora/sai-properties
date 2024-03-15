import { useState } from 'react';
import axios from 'axios';
import { createUrl } from '../utils/Utils';
import { useDispatch } from 'react-redux';
import { login } from '../../src/features/auth';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import MainFooter from '../Components/MainFooter';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [apiError, setApiError] = useState('');
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setApiError(''); // Clear apiError when email changes
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setApiError(''); // Clear apiError when password changes
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate form fields
    if (!email || !password) {
      setApiError('Email and password cannot be empty');
      return;
    }

    try {
      const apiUrl = createUrl('/user/signin.php');
      const response = await axios.post(apiUrl, { email, password });

      const { StatusCode, StatusDescription } = response.data;

      if (StatusCode === "200") {
        const { UserId, FullName, propertyholdertype } = StatusDescription;

        sessionStorage.setItem('userId', UserId);
        sessionStorage.setItem('fullName', FullName);
        sessionStorage.setItem('propertyholdertype', propertyholdertype);

        dispatch(login());

        toast.success(`Welcome ${FullName} to Sai Properties`);

        navigate('/front');
      } else {
        setApiError(StatusDescription || 'Unknown error occurred');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        const { data } = error.response;
        setApiError(data.StatusDescription || 'Unknown error occurred');
      } else {
        console.error('Error during request:', error.message);
        setApiError('Unknown error occurred');
      }
    }
  };

  return (
    <div className="container-fluid mt-5 row">
  <div className="row justify-content-center align-items-center min-vh-100 container ">
    <div className="col-md-6 row">
      <div className="card">
        <div className="card-header text-center text-white bg-dark">
          <h3 className="fw-bold">Login</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-black fw-bold">
                Email address
              </label>
              <input
                type="email"
                className={`form-control ${apiError && 'is-invalid'}`}
                id="email"
                name='email'
                value={email}
                onChange={handleEmailChange}
              />
              {apiError && !apiError.email && <div className="invalid-feedback">{apiError}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label text-black fw-bold">
                Password
              </label>
              <input
                type="password"
                className={`form-control ${apiError && 'is-invalid'}`}
                id="password"
                name='password'
                value={password}
                onChange={handlePasswordChange}
              />
              {apiError && !apiError.password && <div className="invalid-feedback">{apiError}</div>}
            </div>
            <div className="mb-3">
              <p className="mb-0">
                <Link to="/front/forgotPassword">Forgot Password</Link>
              </p>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
          {apiError === 'Invalid Details' && (
            <div className="invalid-feedback text-center mt-2">{apiError}</div>
          )}
        </div>
        <div className="card-footer text-center text-white bg-dark">
          <p className="mb-0">
            Don`t have an account? <Link to="/front/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  </div>
  <MainFooter/>
</div>

  );
};

export default Login;
