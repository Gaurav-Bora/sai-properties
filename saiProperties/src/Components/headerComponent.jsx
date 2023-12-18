// Header.jsx

// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import ContainerStyle from '../style/Header';

const Header = ({ subHeading, Heading }) => {
  return (
    <div className="text-center p-5 " style={ContainerStyle}>
      <p className="h5 text-warning fw-bold">{subHeading}</p>
      <h1 className="display-4 fw-bold">{Heading}</h1>
    </div>
  );
};

Header.propTypes = {
  subHeading: PropTypes.string.isRequired,
  Heading: PropTypes.string.isRequired,
};

export default Header;
