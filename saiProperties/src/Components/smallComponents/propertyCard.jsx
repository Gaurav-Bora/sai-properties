import PropTypes from 'prop-types';
import { GiBathtub } from "react-icons/gi";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { FaBed, FaRupeeSign } from "react-icons/fa";
import '../../style/style.css';

const PropertyCard = ({ imageUrl, title, text, purpose, area, bathroom, bed, price }) => {
  return (
    <div className="card info-card text-left" style={{ width: '18rem' }}>
      {imageUrl && <img className="card-img-top" src={imageUrl} alt="Card image cap" />}

      <div className="card-body">
        {title && (
          <p className="card-title">
            <a href="#" className="heading-link-property-card">
              {title}
            </a>
          </p>
        )}
        {text && <p className="card-text">{text}</p>}

        {price && (
          <p className="btn btn-primary btn-lg" style={{ width: '100%' }}>
            <span style={{ marginRight: '1rem' }}>Price :</span> <FaRupeeSign />{price}
          </p>
        )}
      </div>

      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <FaSquareArrowUpRight /> {area} sq. ft
        </li>
        <li className="list-group-item">
          <GiBathtub /> {bathroom} Bathroom
        </li>
        <li className="list-group-item">
          <FaBed /> {bed} Bedroom
        </li>
        <li className="list-group-item">{purpose}</li>
      </ul>
    </div>
  );
};

PropertyCard.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string.isRequired,
  area: PropTypes.number,
  bathroom: PropTypes.number,
  bed: PropTypes.number,
  purpose: PropTypes.string,
  price: PropTypes.number,
};

export default PropertyCard;
