// eslint-disable-next-line no-unused-vars
import React from 'react';
import MainFooter from '../Components/MainFooter';
import Header from '../Components/headerComponent';

const Contact = () => {
  return (
    <>
      <Header Heading='Contact' />

      <div className="container mt-5">
        <div className="row">
          {/* Left half with Google Map */}
          <div className="col-md-9">
            <div className="google-map p-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.149656624174!2d73.77373937496418!3d18.567290482535324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2becb43697f29%3A0x956bce46d29569b8!2sMy%20World!5e0!3m2!1sen!2sin!4v1704353999134!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </div>

          {/* Right half with contact details */}
          <div className="col-md-3 d-flex  ">
            <div className="contact-details text-start">
              <h2>Address</h2>
              <p>Sai Properties, D-102,<br /> My World, Baner,<br /> Pune <br/>+91 860 0177 177</p>
              {/* Add more contact details as needed */}
            </div>
          </div>
        </div>
      </div>

      <MainFooter />
    </>
  );
};

export default Contact;
