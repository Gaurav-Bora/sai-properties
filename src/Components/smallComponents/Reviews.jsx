// Review.js
import PropTypes from 'prop-types';
import '../../style/Reviews.css'; // Use a single CSS file for styling

const Review = ({ userName, userProfilePhoto, reviewText, location }) => {
  return (
    <div className="review-container text-center">
      {userProfilePhoto && (
        <img
          src={userProfilePhoto}
          alt={`${userName}'s profile`}
          className="profile-photo rounded-circle"
        />
      )}
      <div className="review-content">
        <h3 className="user-name">{userName}</h3>
        <p className="review-text">{reviewText}</p>
        {location && <p className="review-location">{location}</p>}
      </div>
    </div>
  );
};

Review.propTypes = {
  userName: PropTypes.string.isRequired,
  userProfilePhoto: PropTypes.string,
  reviewText: PropTypes.string.isRequired,
  location: PropTypes.string,
};

export default Review;
