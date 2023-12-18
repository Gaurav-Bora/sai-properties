import PropTypes from 'prop-types';
import '../../style/style.css';

const InfoCard = ({ icon, heading }) => {
  return (
    <div className="card m-5 info-card" style={{ height: '200px' }}>
      <div className="card-body ">
        <div className="text-center">
          {icon} {/* Render the icon directly */}
        </div>
        <p className="card-title mt-3 text-center cardFs">
          <span className="d-inline d-sm-none">{/* Hide on small screens */}
            <small>{heading}</small>
          </span>
          <span className="d-none d-sm-inline">{/* Hide on larger screens */}
            {heading}
          </span>
        </p>
      </div>
    </div>
  );
};

InfoCard.propTypes = {
  icon: PropTypes.element.isRequired, // Use PropTypes.element for React components
  heading: PropTypes.string.isRequired,
};

export default InfoCard;
