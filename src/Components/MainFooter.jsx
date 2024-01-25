// eslint-disable-next-line no-unused-vars
import React from 'react';
import FooterComponent from '../Components/smallComponents/FooterComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaInstagram, FaTwitterSquare, FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { FaRegCopyright } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

const MainFooter = () => {
  return (
    <>
      <div className="container-fluid footer px-5">
        <div className='container'>
    <div className="row justify-content-center p-4 container">
        <div className="col-md-4 mb-4 text-start justify-content-center px-5">
            <FooterComponent
                heading="Sai Properties"
                description="Sai Properties had a vision for the way real estate should work: anticipate and respond to the needs of buyers and sellers, and support the communities you serve."
            />
        </div>
        <div className="col-md-4 mb-4 px-5">
        <FooterComponent
            heading="Contact"
            description="Sai Properties, D-102,
                My World, Baner,                
                Pune,
                +91 860 0177 177
                enquiry@saiproperties.co.in"
          />
        </div>
        <div className="col-md-4 mb-4 text-start px-5">
            <h4 className="mb-3">Company</h4>
            <ul className="navbar-nav">
                <li className="nav-item mx-2">
                    <a className="nav-link" href="/front/enquiry">
                        Enquiry
                    </a>
                </li>
                <li className="mx-2">
                    <a className="nav-link" href="/front/ourTeam">
                        Our Team
                    </a>
                </li>
                <li className="mx-2">
                    <a className="nav-link" href="/front/services">
                        Services
                    </a>
                </li>
                <li className="mx-2">
                    <a className="nav-link" href="/front/policy">
                        Privacy Policy
                    </a>
                </li>
                <li className="mx-2">
                    <a className="nav-link" href="/front/terms">
                        Terms & Conditions
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div className="d-flex justify-content-center align-items-center mb-3">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="mx-2">
            <FaInstagram size={30} />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="mx-2">
            <FaTwitterSquare size={30} />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="mx-2">
            <FaFacebookSquare size={30} />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="mx-2">
            <FaLinkedin size={30} />
        </a>
    </div>
    <div className="text-center mt-2">
        <FaRegCopyright size={20} /> 2019 SAI PROPERTIES. ALL RIGHTS RESERVED
    </div>
    <div className="text-center pb-2">
        Website developed by
        <a href="https://codeferrytech.com/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
            Codeferry Technologies
        </a>
    </div>
    </div>
</div>


    </>
  );
};

export default MainFooter;
