import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const FooterComponent = ({ heading, description, email }) => {
  const lines = description.split('\n');

  return (
    <div className="">
      <h4 className="mb-3">{heading}</h4>
      <ul className="list-unstyled">
        {lines.map((line, index) => (
          <li key={index} className="mb-2">{line}</li>
        ))}
      </ul>
      {email && (
        <p>
          Email: <a href={`mailto:${email}`}>{email}</a>
        </p>
      )}
    </div>
  );
};

FooterComponent.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  email: PropTypes.string,
};

export default FooterComponent;
