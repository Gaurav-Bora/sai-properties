import PropTypes from 'prop-types';
import '../../style/style.css'

const InfoCard = ({ icon, heading }) => {
  return (
    <div className="card m-5 info-card" style={{ height: '200px' }}>
      <div className="card-body ">
        <div className="text-center">
          {icon} {/* Render the icon directly */}
        </div>
        <h5 className="card-title mt-3 text-center">{heading}</h5>
        
      </div>
    </div>
  );
};

InfoCard.propTypes = {
  icon: PropTypes.element.isRequired, // Use PropTypes.element for React components
  heading: PropTypes.string.isRequired,
  
};

export default InfoCard;
