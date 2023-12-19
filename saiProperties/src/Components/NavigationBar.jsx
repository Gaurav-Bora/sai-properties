

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../features/auth';
import '../style/style.css';
import '../style/navBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoIosMenu } from 'react-icons/io';

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
      <nav className="navbar navbar-expand-lg navbar-dark  fixed-top">  {/* bg-transparent */}
        <div className="container-fluid">
          <Link className="navbar-brand mb-0 h1 text-emphasis px-3" to="/front/home">
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
              <li className="nav-item mx-2 dropdown dropdownn">
                <Link
                  className="nav-link dropdown-toggle dropdownn-button"
                  to="#"
                  id="residentialDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Residential
                </Link>
                <div className="dropdown-menu dropdownn-content" aria-labelledby="residentialDropdown">
                  <Link className="dropdown-item" to="/front/residential/rent">
                    Rent
                  </Link>
                  <Link className="dropdown-item" to="/front/residential/pg-co-living">
                    PG / Co-Living
                  </Link>
                  <Link className="dropdown-item" to="/front/residential/buy-re-sale">
                    Buy Re-Sale
                  </Link>
                  <Link className="dropdown-item" to="/front/residential/buy-new-sale">
                  Buy New-Sale
                  </Link>
                  <Link className="dropdown-item" to="/front/residential/plots-lands">
                    Plots / Lands
                  </Link>
                  
                  {/* Add more dropdown items as needed */}
                </div>
              </li>

              <li className="nav-item mx-2 dropdown dropdownn">
                <Link
                  className="nav-link dropdown-toggle dropdownn-button"
                  to="#"
                  id="commercialDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Commercial
                </Link>
                <div className="dropdown-menu dropdownn-content" aria-labelledby="commercialDropdown">
                  <Link className="dropdown-item" to="/front/commercial/rent">
                    Rent
                  </Link>
                  <Link className="dropdown-item" to="/front/commercial/buy-re-sale">
                    Buy Re-Sale
                  </Link>
                  <Link className="dropdown-item" to="/front/commercial/buy-new-sale">
                    Buy New-Sale
                  </Link>
                  <Link className="dropdown-item" to="/front/commercial/plots-lands">
                    Plots/Lands
                  </Link>
                  {/* Add more dropdown items as needed */}
                </div>
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
