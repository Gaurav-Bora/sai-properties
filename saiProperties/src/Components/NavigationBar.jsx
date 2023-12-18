// eslint-disable-next-line no-unused-vars
import React from 'react';
import  { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logout } from '../features/auth';
import '../style/style.css';
import '../style/navBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoIosMenu } from "react-icons/io";

const NavigationBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // State to track user login status
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Set it initially based on your authentication logic

  const logoutUser = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('id');
    dispatch(logout());
    setIsLoggedIn(false);
    navigate('/front');
  };

  const handleLoginClick = () => {
    navigate('/front/login');
  };

  const handleSignupClick = () => {
    navigate('/front/signup');
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand mb-0 h1 text-emphasis" to="/front/home">
            Sai Properties
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"> <IoIosMenu /></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/front/home">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/front/property">
                  Property
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/front/services">
                  Services
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/front/about">
                  About
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/front/ourTeam">
                  Our Team
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/front/contact">
                  Contact
                </Link>
              </li>
              {!isLoggedIn && (
                <>
                  <li className="nav-item mx-2">
                  <button className="btn btn-primary nav-link" onClick={handleLoginClick}>
                      Login
                    </button>
                  </li>
                  <li className="nav-item mx-2">
                  <button className="btn btn-primary nav-link" onClick={handleSignupClick}>
                      SignUp
                    </button>
                  </li>
                </>
              )}
              {isLoggedIn && (
                <>
                  <li className="nav-item mx-2">
                    <button onClick={logoutUser} className="btn nav-link">
                      Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
