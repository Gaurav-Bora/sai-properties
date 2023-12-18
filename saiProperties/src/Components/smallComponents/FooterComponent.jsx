
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const FooterComponent = ({ heading, description }) => {
  const lines = description.split('\n');

  return (
    <div className="col-md-3 mb-4">
      <h4 className="mb-3">{heading}</h4>
      <ul className="list-unstyled">
        {lines.map((line, index) => (
          <li key={index} className="mb-2">{line}</li>
        ))}
      </ul>
    </div>
  );
};

FooterComponent.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FooterComponent;
