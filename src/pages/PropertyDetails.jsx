import { useState } from 'react';
import Header from '../Components/headerComponent';
import Images from '../assets/ImagesPropertySlider';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/PropertyDetails.css';
import MainFooter from '../Components/MainFooter';

const PropertyDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
  });

  // Placeholder for property details (replace with actual data)
  const PropertyData = {
    Property_Key: '123',
    Category: 'abc',
    Property_Type: 'poi',
    Residential_Type: 'lkj',
    Project_Name: 'asd',
    Available_from: 'llll',
    type: 'Apartment',
    price: '$500,000',
    area: '1200 Sq.Ft.',
    amenities: 'Swimming Pool, Gym, Parking',
    // Add more details as needed
  };

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

  return (
    <div className="container-fluid ">
      <Header Heading={'Property Details'} />

      <div className='p-4 container-fluid'>
        <div className="row">
          {/* Left side with image */}
          <div className="col-md-5">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {Images &&
                  Images.map((image, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                      <img
                        src={image}
                        className="d-block w-100 img-fluid"
                        alt={`Slide ${index + 1}`}
                        style={{ objectFit: 'cover', height: '400px' }}
                      />
                    </div>
                  ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          {/* Right side with property details */}
          <div className="col-md-7">
            <div className="row p-3 right-overview">
              <div className="col-md-3">
                <div className="mb-6"><p className='heading-p'>Property_Key: <span>{PropertyData.Property_Key}</span></p></div>
              </div>
              <div className="col-md-3">
                <div className="mb-6"><p className='heading-p'>Category: <span>{PropertyData.Category}</span></p></div>
              </div>
              <div className="col-md-3">
                <div className="mb-6"><p className='heading-p'>State: <span>{PropertyData.Available_from}</span></p></div>
              </div>
              <div className="col-md-3">
                <div className="mb-6"><p className='heading-p'>City: <span>{PropertyData.Available_from}</span></p></div>
              </div>
              <div className="col-md-3">
                <div className="mb-6"><p className='heading-p'>Location: <span>{PropertyData.Available_from}</span></p></div>
              </div>
              <div className="col-md-3">
                <div className="mb-6"><p className='heading-p'>Property Type: <span>{PropertyData.Property_Type}</span></p></div>
              </div>
              <div className="col-md-3">
                <div className="mb-6"><p className='heading-p'>Residential Type:<span> {PropertyData.Residential_Type}</span></p></div>
              </div>
              <div className="col-md-3">
                <div className="mb-6"><p className='heading-p'>Project Name: <span>{PropertyData.Available_from}</span></p></div>
              </div>
              <div className="col-md-3">
                <div className="mb-6"><p className='heading-p'>Type of project: <span>{PropertyData.Available_from}</span></p></div>
              </div>
              <div className="col-md-3">
                <div className="mb-6"><p className='heading-p'>BHK: <span>{PropertyData.Available_from}</span></p></div>
              </div>
              <div className="col-md-3">
                <div className="mb-6"><p className='heading-p'>Bathroom: <span>{PropertyData.Available_from}</span></p></div>
              </div>
              <div className="col-md-3">
                <div className="mb-6"><p className='heading-p'>Bedroom: <span>{PropertyData.Available_from}</span></p></div>
              </div>
              <div className="col-md-3">
                <div className="mb-6"><p className='heading-p'>Furnishing: <span>{PropertyData.Available_from}</span></p></div>
              </div>
              <div className="col-md-3">
                <div className="mb-6"><p className='heading-p'>Facing: <span>{PropertyData.Available_from}</span></p></div>
              </div>
              <div className="col-md-3">
                <div className="mb-6"><p className='heading-p'>Floor: <span>{PropertyData.Available_from}</span></p></div>
              </div>
              <div className="col-md-3">
                <div className="mb-6"><p className='heading-p'>Total Floor: <span>{PropertyData.Available_from}</span></p></div>
              </div>
              <div className="col-md-3">
                <div className="mb-6"><p className='heading-p'>Carpate Area(Sq. ft.): <span>{PropertyData.Available_from}</span></p></div>
              </div>
              <div className="col-md-3">
                <div className="mb-6"><p className='heading-p'>Coating Price: <span>{PropertyData.Available_from}</span></p></div>
              </div>
              <div className="col-md-3">
                <div className="mb-6"><p className='heading-p'>Covered Price: <span>{PropertyData.Available_from}</span></p></div>
              </div>
              <div className="col-md-3">
                <div className="mb-6"><p className='heading-p'>Open Parking: <span>{PropertyData.Available_from}</span></p></div>
              </div>

              <div className="col-md-3">
                <div className="mb-6"><p className='heading-p'>Available_from: <span>{PropertyData.Available_from}</span></p></div>
              </div>
              <div className="col-md-3">
                <div className="mb-6"><p className='heading-p'>Type of Customer: <span>{PropertyData.Available_from}</span></p></div>
              </div>
              <div className="col-md-3 ">
                <div className="mb-6"><p className='heading-p'>View: <span>{PropertyData.type}</span></p></div>
              </div>
              <div className="col-md-3">
                <div className="mb-6"><p className='heading-p'>price: <span>{PropertyData.price}</span></p></div>
              </div>

              {/* Use the custom button-container class */}
              <div className="button-container">
                <button type="button" className="btn btn-primary" onClick={() => setShowModal(true)}>
                  I am interested
                </button>
              </div>

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
                          <label htmlFor="name" className="form-label">Name</label>
                          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">Email</label>
                          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="mobile" className="form-label">Mobile Number</label>
                          <input type="tel" className="form-control" id="mobile" name="mobile" value={formData.mobile} onChange={handleInputChange} required />
                        </div>
                        <button type="submit" className="btn ms-auto me-2 modal-form-header">Submit</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid  border property-disc">
        <div className="p-3">
          <p className='heading-p'>Property Description</p>
          <p>
            This exquisite property is available for sale in a gated society, making it perfect for families seeking a new home. Conveniently located, this apartment is situated near a wide road, ensuring easy and quick across an area of 550.
          </p>
        </div>
      </div>
      <div className="container-fluid p-4 border amenities-list">
        <div className=''>
          <p className='heading-p amenities'>Amenities</p>
          <p>{PropertyData.amenities}</p>
        </div>
      </div>
      <div className="row ">
        <div className="col-md-6 p-2 text-center">
          <p className='heading-p'>Floor Plan</p>
          <img src="http://stage.saiproperties.co.in/front/front-images/home5.jpg" alt="" className="img-fluid" />
        </div>
        <div className="col-md-6 p-2 text-center">
          <p className='heading-p'>Location Map</p>
          <div className="google-map p-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.149656624174!2d73.77373937496418!3d18.567290482535324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2becb43697f29%3A0x956bce46d29569b8!2sMy%20World!5e0!3m2!1sen!2sin!4v1704353999134!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
      <MainFooter />


    </div>
  );
};

export default PropertyDetails;
