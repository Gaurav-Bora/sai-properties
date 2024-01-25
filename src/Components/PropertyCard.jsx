
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import '../style/PropertyCard.css'; // Your existing styles
import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';


const PropertyCard  = ({ images, societyName, propertyKey, propertyType, propertyDetails, type, price, area, amenities }) => {

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '' });
  const navigate = useNavigate();





  useEffect(() => {
    const carousel = new bootstrap.Carousel(document.getElementById(`carousel-${societyName}`), {
      interval: 2000,
    });

    return () => {
      carousel.dispose();
    };
  }, [societyName]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can use formData in your API call or perform any other actions
    console.log('Form submitted:', formData);
    // Close the modal
    setShowModal(false);
  };

  // PropertyCard component
const handlePropertyDetailsClick = () => {
  const navigationObject = {
    pathname: `/front/${propertyKey}`,
    state: {
      images,
      societyName,
      propertyKey,
      propertyType,
      propertyDetails,
      type,
      price,
      area,
      amenities,
    },
  };

  console.log('Navigation Object:', navigationObject);
  navigate(navigationObject);
};
  // Ensure the effect runs when societyName changes
  return (
    <div className="card mb-3 text-start">
      <div className="row g-0">
        <div className="col-lg-5 col-md-12">
          <div id={`carousel-${societyName}`} className="carousel slide" data-bs-ride="carousel" style={{ objectFit: 'cover', height: '100%', width: '100%' }}>
            <div className="carousel-indicators">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target={`#carousel-${societyName}`}
                  data-bs-slide-to={index}
                  className={index === 0 ? 'active' : ''}
                  aria-current={index === 0}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
            <div className="carousel-inner " style={{ objectFit: 'cover', height: '100%', width: '100%' }}>
              {images.map((image, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} style={{ objectFit: 'cover', height: '100%', width: '100%' }}>
                  <img
                    src={image}
                    className="d-block w-100 img-height"
                    alt={`Slide ${index + 1}`}
                    style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-md-12 propertyBg">
          <div className="card-body card-body-custom" >
            <p className="card-title text-start mb-2 text-increase" onClick={handlePropertyDetailsClick} style={{ cursor: 'pointer',color: '#624E80' }}>{propertyDetails}</p>
            <div className='row'>
              <div className='col'>
                <p className='text-increase'>Property Key: <span>{propertyKey}</span></p>
              </div>
              <div className='col'>
                <p className='text-increase'>Property Type: <span>{propertyType}</span></p>
              </div>
            </div>
            <div className="row">
              <div className='col'>
                <p className='text-increase'> {propertyType} Type: <span>{type}</span></p>
              </div>
              <div className='col'>
                <p className='text-increase'>Project Name: <span>{societyName}</span></p>
              </div>
            </div>

            <div className='row'>

              <div className='col'>
                <p className='text-increase'>Price: <span>₹{price}</span></p>
              </div>
              <div className='col'>
                <p className='text-increase'>Carpet Area: <span>{area} Sq.Ft.</span></p>
              </div>
            </div>
            <div>
              <p className='text-increase'>Project Amenities List: <span>{amenities}</span></p>
            </div>

            {/* Use the custom button-container class */}
            <div className="button-container">
              <button type="button" className="btn btn-primary" onClick={() => setShowModal(true)}>
                I am interested
              </button>
            </div>
            {/* Bootstrap Modal */}
            <div className={`modal fade ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }} aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header modal-form-header">
                    <h5 className="modal-title">Fill out the form</h5>
                    <button type="button" className="btn-close" onClick={() => setShowModal(false)} aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                          Name
                        </label>
                        <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="mobile" className="form-label">
                          Mobile Number
                        </label>
                        <input type="tel" className="form-control" id="mobile" name="mobile" value={formData.mobile} onChange={handleInputChange} required />
                      </div>
                      <button type="submit" className="btn  ms-auto me-2 modal-form-header">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            
          </div>


        </div>
      </div>
    </div>

  );
};

PropertyCard.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string), // Assuming images is an array of URL strings
  societyName: PropTypes.string,
  propertyDetails: PropTypes.string,
  rent: PropTypes.number,
  deposit: PropTypes.number,
  area: PropTypes.number,
  noOfBedroom: PropTypes.number,
  bathroom: PropTypes.number,
  landmark: PropTypes.string,
  propertyKey: PropTypes.number,
  propertyType: PropTypes.string,
  type: PropTypes.string,
  price: PropTypes.number,
  amenities: PropTypes.string,
};

export default PropertyCard;
