import PropTypes from 'prop-types';

const InfoCard = ({ icon, text }) => {
  return (
    <div className="card info-card" style={{ height: '200px' }}>
      <div className="card-body">
        <div className="text-center">
          <img src={icon} alt="Service Icon" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </div>
        <p className="card-title mt-3 text-center cardFs card-heading-Text">{text}</p>
      </div>
    </div>
  );
};

InfoCard.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default InfoCard;

