// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../features/auth';
import '../style/style.css'
import '../style/navBar.css'


import 'bootstrap/dist/css/bootstrap.min.css';

const NavigationBar = () => {
  const dispatch = useDispatch(); // Add this line to get the dispatch function
  const navigate = useNavigate(); // Add this line to get the navigate function

  // logout the user
  const logoutUser = () => {
    // clear the session storage changes
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('id');

    // hide the navigation bar
    dispatch(logout());

    // redirect to login page
    navigate('/');

  };

  return (
    <div >
      <nav className='navbar navbar-expand-lg bg-body-tertiary fixed-top'>
        <div className='container-fluid'>
          <a className='navbar-brand  mb-0 h1 text-emphasis'>Sai Properties</a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <Link className='nav-link ms-4' to='/front/home'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link ms-4' to='/front/property'>
                  Property
                </Link>
              </li>
              <li className='nav-item ms-4'>
                <Link className='nav-link' to='/front/services'>
                  Services
                </Link>
              </li>
              <li className='nav-item ms-4'>
                <Link className='nav-link' to='/front/about'>
                  About
                </Link>
              </li>
              <li className='nav-item ms-4'>
                <Link className='nav-link' to='/front/ourTeam'>
                  Our Team
                </Link>
              </li>
              <li className='nav-item ms-4'>
                <Link className='nav-link' to='/front/contact'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className='d-flex ms-4'>
            <button onClick={logoutUser} className='btn'>
              Logout
            </button>
          </div>
          <div className='d-flex'>
            <button type='button' className='badge rounded-pill text-bg-primary p-2'>
              <Link className='nav-link' to='/front/login'>
                Login 
              </Link>
            </button>
            <button type='button' className='badge rounded-pill text-bg-primary ms-3 p-2'>
              <Link className='nav-link' to='/front/signup'>
                SignUp
              </Link>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
