

import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../features/auth';
import '../style/style.css';
import '../style/navBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaAlignJustify } from "react-icons/fa";
// import logo from '../../public/logo.jpeg'

const NavigationBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginStatus = useSelector((state) => state.auth.status);
  // State to track user login status
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Set it initially based on your authentication logic

  const logoutUser = () => {
    
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
  useEffect(() => {
    setIsLoggedIn(loginStatus);
  }, [loginStatus]);


  return (
    <div className='mb-5'>
      <nav className="navbar navbar-expand-lg navbar-dark  fixed-top">  {/* bg-transparent */}
        <div className="container-fluid">
          <Link className="navbar-brand mb-0 h1 text-emphasis px-3" to="/front/home">
          <img src='http://stage.saiproperties.co.in/front/front-images/logo.jpeg' alt='Logo' height='40' className='me-2' />
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
            
            <FaAlignJustify />
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
                  Properties
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/front/enquiry">
                  Enquiry
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/front/ourTeam">
                  Our Team
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/front/services">
                  Services
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
                      Register
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
