// Header.jsx

// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import ContainerStyle from '../style/Header';

const Header = ({ subHeading, Heading }) => {
  return (
    <div className="text-center p-2 margin-from-top" style={ContainerStyle}>
      <p className="h5 text-warning fw-bold">{subHeading}</p>
      <p className=" ">{Heading}</p>
    </div>
  );
};

Header.propTypes = {
  subHeading: PropTypes.string,
  Heading: PropTypes.string.isRequired,
};

export default Header;
