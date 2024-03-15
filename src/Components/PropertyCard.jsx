import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import '../style/PropertyCard.css'; // Your existing styles
import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';

const PropertyCard = ({ photos, society_name, purpose, property_key, main_type, propertyDetails, typeresidential, typecommercial, price, area, amenities, location, city, state_name, title }) => {


  const [carouselInitialized, setCarouselInitialized] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const carouselElement = document.getElementById(`carousel-${society_name}`);
    if (!carouselInitialized && photos && photos.length > 0 && carouselElement) {
      const _carousel = new bootstrap.Carousel(carouselElement, {
        interval: 2000,
      });
      setCarouselInitialized(true);
    }
  }, [carouselInitialized, photos, society_name]);


  // PropertyCard component
  const handlePropertyDetailsClick = () => {
    const navigationObject = {
      pathname: `/front/${property_key}`,
      state: {
        property_key,
        photos,
        society_name,
        main_type,
        propertyDetails,
        typeresidential,
        typecommercial,
        price,
        area,
        amenities,
        purpose,
        location,
        city,
        state_name
      },
    };

    console.log('Navigation Object:', navigationObject);
    navigate(navigationObject);
  };

  // Check if photo is an array and not empty before mapping
  // const renderCarouselItems = () => {
  //   const photoArray = Array.isArray(photos) ? photos : (typeof photos === 'string' && photos.trim() !== '' ? photos.split(',') : []);

  //   if (photoArray.length > 0) {
  //     return photoArray.map((image, index) => (
  //       <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
  //         <img src={image} className="d-block w-100 " alt={`Slide ${index + 1}`} />
  //       </div>
  //     ));
  //   } else {
  //     // Render a placeholder image if no valid photos are available
  //     return (
  //       <div className="carousel-item active">
  //         <img src="http://stage.saiproperties.co.in/front/front-images/home1.jpg" className="d-block w-100 " alt="Placeholder" />
  //       </div>
  //     );
  //   }
  // };

  // const photoArray = typeof photos === 'string' ? [photos] : photos;
  const photoUrls = photos ? photos.split(',') : [];
  // Render the PropertyCard component
  return (
    <div className="card mb-3 text-start" >
      <div className="row g-0">
        <div className="col-lg-5 col-md-12">
          <div id={`carousel-${society_name}`} className="carousel slide" data-bs-ride="carousel" >

            {/* {photoArray && photoArray.length > 0 && (
              <div className="carousel-indicators">
                {photoArray.map((_, index) => (
                  <button
                    key={index}
                    className={`carousel-indicator ${index === 0 ? 'active' : ''}`}// Change the class name to avoid confusion with control buttons
                    type="button"
                    data-bs-target={`#carousel-${society_name}`}
                    data-bs-slide-to={index}
                    aria-current={index === 0}
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))}                
              </div>
            )} */}
            <div className="carousel-inner" >
            {photoUrls.length > 0 ? (
                  photoUrls.map((photoUrl, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                      <img
                        src={photoUrl}
                        className="d-block w-100 img-fluid"
                        alt={`Image ${index + 1}`}
                        style={{ objectFit: 'cover', height: '400px' }}
                      />
                    </div>
                  ))
                ) : (
                  <div className="carousel-item active">
                    <img
                      src="http://stage.saiproperties.co.in/front/front-images/home1.jpg"
                      className="d-block w-100 img-fluid"
                      alt="Default"
                      style={{ objectFit: 'cover', height: '400px' }}
                    />
                  </div>
                )}
            </div>
          </div>
        </div>

        <div className="col-lg-7 col-md-12 propertyBg">
          <div className="card-body card-body-custom" >
            <p className="card-title text-start mb-2 text-increase" onClick={handlePropertyDetailsClick} style={{ cursor: 'pointer', color: '#624E80' }}>
              {title} Flat {main_type === 'Residential' ? typeresidential : typecommercial} for  {purpose} IN  {location} {city} {state_name}
            </p>
            <div className='row'>
              <div className='col'>
                <p className='text-increase'>Property Key: <span>{property_key}</span></p>
              </div>
              <div className='col'>
                <p className='text-increase'>Property Type: <span>{main_type}</span></p>
              </div>
            </div>
            <div className="row">
              <div className='col'>
                <p className='text-increase'>
                  {main_type === 'Residential' ? 'Residential Type:' : 'Commercial Type:'}
                  <span>{main_type === 'Residential' ? typeresidential : typecommercial}</span>
                </p>
              </div>
              <div className='col'>
                <p className='text-increase'>Project Name: <span>{society_name}</span></p>
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
              <button type="button" className="btn btn-primary" onClick={handlePropertyDetailsClick}>
                More details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
  society_name: PropTypes.string.isRequired,
  propertyDetails: PropTypes.string,
  rent: PropTypes.number,
  deposit: PropTypes.number,
  area: PropTypes.number,
  noOfBedroom: PropTypes.number,
  bathroom: PropTypes.number,
  landmark: PropTypes.string,
  property_key: PropTypes.string,
  main_type: PropTypes.string,
  typeresidential: PropTypes.string,
  typecommercial: PropTypes.string,
  price: PropTypes.number,
  amenities: PropTypes.string,
  location: PropTypes.string,
  city: PropTypes.string,
  state_name: PropTypes.string,
  purpose: PropTypes.string,
  title: PropTypes.string,
};

export default PropertyCard;

