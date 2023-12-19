// eslint-disable-next-line no-unused-vars
import React from 'react';
import FooterComponent from '../Components/smallComponents/FooterComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaInstagram, FaTwitterSquare, FaFacebookSquare } from 'react-icons/fa';
import { FaRegCopyright } from 'react-icons/fa';

const MainFooter = () => {
  return (
    <>
      <div className="container-fluid footer px-5">
        <div className="row p-5">
          <FooterComponent
            heading="Sai Properties"
            description="Sai Properties had a vision for the way real estate should work: anticipate and respond to the needs of buyers and sellers, and support the communities you serve."
          />

          <FooterComponent
            heading="Buy"
            description="Home For Sale
                Open Houses
                New Listing
                Recently Reduce
                Off-Market Homes"
          />

          <FooterComponent
            heading="Sell"
            description="Sell Your Home
                 Get A Home Valuation 
                 Local Home Prices 
                 Guides & RulesOthers"
          />

          <FooterComponent
            heading="Contact"
            description="Sai Properties, D-102,
                My World, Baner,                
                Pune,
                +91 860 0177 177
                info@saiproperties.co.in"
          />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} className="mx-2" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitterSquare size={30} className="mx-2" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare size={30} className="mx-2" />
          </a>
        </div>
        <div className="text-center mt-3  ">
          <FaRegCopyright size={20} /> 2019 SAI PROPERTIES. ALL RIGHTS RESERVED
        </div>
        <div className="text-center mt-1  p-5">
          <FaRegCopyright size={20} /> 2018-2023 Codeferry Technologies. All rights reserved.
        </div>
        
      </div>
    </>
  );
};

export default MainFooter;
