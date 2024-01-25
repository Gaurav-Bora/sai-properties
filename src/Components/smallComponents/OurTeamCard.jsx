import PropTypes from 'prop-types';
import '../../style/ourTeam.css';
import { FaInstagram, FaTwitterSquare, FaFacebookSquare, FaLinkedin } from 'react-icons/fa';

const OurTeamCard = ({ image, fname, lname, position, email, instagramLink, facebookLink, twitterLink, linkedinLink }) => {
  const imageUrl = `data:image/jpeg;base64,${image}`;

  const handleImageError = (event) => {
    console.error('Image failed to load:', event.target.src);
    console.error(`Image failed to load: ${imageUrl}`);
  };

  return (
    <div className='team-card my-3'>
      <div className="card">
        <img
          src={imageUrl}
          className="card-img-top rounded-circle mx-auto team-image my-3"
          alt={`Profile of ${fname}`}
          style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          onError={handleImageError}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{fname} {lname}</h5>
          <p className="card-subtitle mb-2 text-muted">{position}</p>
          <p className="card-subtitle mb-2 ">{email}</p>
         
          <div className="social-links">
            <a href={instagramLink} target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} className="mx-2" />
            </a>
            <a href={twitterLink} target="_blank" rel="noopener noreferrer">
              <FaTwitterSquare size={30} className="mx-2" />
            </a>
            <a href={facebookLink} target="_blank" rel="noopener noreferrer">
              <FaFacebookSquare size={30} className="mx-2" />
            </a>
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} className="mx-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

OurTeamCard.propTypes = {
  image: PropTypes.string.isRequired,
  fname: PropTypes.string.isRequired,
  lname: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  email: PropTypes.string,
  facebookLink: PropTypes.string,
  twitterLink: PropTypes.string,
  instagramLink: PropTypes.string,
  linkedinLink: PropTypes.string,
};

export default OurTeamCard;
