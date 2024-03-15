import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../Components/headerComponent';
// import Images from '../assets/ImagesPropertySlider';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/PropertyDetails.css';
import MainFooter from '../Components/MainFooter';
import { createUrl } from '../utils/Utils';
import { toast, ToastContainer } from 'react-toastify';

const PropertyDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile1: '',

  });
  console.log(formData)

  const notify = (message, type = 'info') => {
    toast[type](message, {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };

  const [formErrors, setFormErrors] = useState({
    name: '',
    mobile1: '',
    email: '',
  });

  // Placeholder for property details (replace with actual data)

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "name" && /\d/.test(value)) {
      // If numbers are detected, do not update the state
      return;
    }
    if (name === "mobile1" && value.length > 10) {
      // If mobile number exceeds 10 digits, do not update the state
      return;
    }
    setFormData({ ...formData, [name]: value });
    setFormErrors({
      ...formErrors,
      [name]: '',
    });
  };


  // Get propertyKey from route params
  const { propertyKey } = useParams();

  const [propertyData, setPropertyData] = useState({});
  useEffect(() => {
    const fetchPropertyDetails = async () => {
      const apiUrl = createUrl(`/user/user-property-details.php/${propertyKey}`);

      try {
        console.log('Fetching property details...');
        const response = await axios.get(apiUrl);

        if (response.status === 200) {
          const data = response.data.data;
          console.log('Fetched property details:', data);

          // Check if data is not empty or undefined before setting the state
          if (data && Object.keys(data).length > 0) {
            setPropertyData(data);
          } else {
            console.error('Empty or undefined data received');
          }
        } else {
          console.error('Failed to fetch property details');
        }
      } catch (error) {
        console.error('Error fetching property details:', error);
      }
    };

    fetchPropertyDetails();
  }, [propertyKey]);

  if (!propertyData || Object.keys(propertyData).length === 0) {
    // If data is not available, you can show a loading message or spinner
    return <div>Loading...</div>;
  }

  const {
    property_key,
    main_type,
    typeresidential,
    typecommercial,
    price,
    title,
    purpose,
    area,
    bathroom,
    bedroom,
    furnishing,
    facing,
    floor,
    state_id,
    city_id,
    location_id,
    total_floor,
    coverdparking,
    openparking,
    available_from,
    customer_type,
    view,
    society_name,
    society_id,
    property_id,
    amenities,
    project_type,
    photos,
    // floor_plans,
    location,
    city,
    state_name,
    // name,
    description
  } = propertyData;

  
  // console.log(propertyData.society_id);

  let type = '';
  if (propertyData.main_type === 'Residential') {
    type = propertyData.typeresidential;
  } else if (propertyData.main_type === 'Commercial') {
    type = propertyData.typecommercial;
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); // Always prevent default form submission

    // Validate form fields
    const errors = {};
    if (!formData.name) {
      errors.name = 'Name cannot be empty';
    }
    if (!formData.mobile1) {
      errors.mobile1 = 'Contact cannot be empty';
    } else if (formData.mobile1.length !== 10) {
      errors.mobile1 = 'Enter valid nontact number';
    }
    if (!formData.email) {
      errors.email = 'Email cannot be empty';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }
    

    // If there are errors, update the formErrors state to display them
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return; // Return early if there are errors
    }

    // Proceed with form submission if there are no errors
    const apiUrl = createUrl('/user/user-enquiry-property.php');
    
    const enquiryFormData = {
      ...formData,
      propertyCode: propertyData.property_key,
      main_type: propertyData.main_type,
      category: propertyData.furnishing,
      title: propertyData.title,
      purpose: propertyData.purpose,
      type: type,
      state_id: propertyData.state_id,
      city_id: propertyData.city_id,
      location_id: propertyData.location_id,
      property_id: propertyData.property_id,
      society_id: propertyData.society_id,
    };

    try {
      const response = await axios.post(apiUrl, enquiryFormData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        notify('Enquiry Posted.', 'success');
        // Reset only specific form fields to empty strings
        setFormData({
          name: '',
          mobile1: '',
          email: '',
          // profession: '',
        });
        setShowModal(false);
      } else {
        notify('Form submission failed', 'error');
        throw new Error('Form submission failed');
      }
    } catch (error) {
      notify('Form submission failed', 'error');
      console.error('Error submitting form:', error);
    }
  };
  const photoUrls = photos ? photos.split(',') : [];


  return (
    <div className="container-fluid ">
      <Header Heading={'Property Details'} />

      <div className='p-4 container-fluid'>
        <div className="row">
          {/* Left side with image */}
          <div className="col-md-5">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
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
              <div className="col-md-4">
                <div className="mb-6"><p className='heading-p'>Property_Key: <span >{property_key}</span></p></div>
              </div>
              <div className="col-md-4">
                <div className="mb-6"><p className='heading-p'>Category: <span>{purpose}</span></p></div>
              </div>
              <div className="col-md-4">
                <div className="mb-6"><p className='heading-p'>State: <span>{state_name}</span></p></div>
              </div>
              <div className="col-md-4">
                <div className="mb-6"><p className='heading-p'>City: <span>{city}</span></p></div>
              </div>
              <div className="col-md-4">
                <div className="mb-6"><p className='heading-p'>Location: <span>{location}</span></p></div>
              </div>
              <div className="col-md-4">
                <div className="mb-6"><p className='heading-p'>Property Type: <span>{main_type}</span></p></div>
              </div>
              <div className="col-md-4">
                <div className="mb-6"><p className='heading-p'> {main_type === 'Residential' ? "Residential" : "Commercial"} Type:<span>  {main_type === 'Residential' ? typeresidential : typecommercial}</span></p></div>
              </div>
              <div className="col-md-4">
                <div className="mb-6"><p className='heading-p'>Project Name: <span>{society_name}</span></p></div>
              </div>
              <div className="col-md-4">
                <div className="mb-6"><p className='heading-p'>Type of project: <span>{project_type}</span></p></div>
              </div>
              <div className="col-md-4">
                <div className="mb-6"><p className='heading-p'>BHK: <span>{title}</span></p></div>
              </div>
              <div className="col-md-4">
                <div className="mb-6"><p className='heading-p'>Bathroom: <span>{bathroom}</span></p></div>
              </div>
              <div className="col-md-4">
                <div className="mb-6"><p className='heading-p'>Bedroom: <span>{bedroom}</span></p></div>
              </div>
              <div className="col-md-4">
                <div className="mb-6"><p className='heading-p'>Furnishing: <span>{furnishing}</span></p></div>
              </div>
              <div className="col-md-4">
                <div className="mb-6"><p className='heading-p'>Facing: <span>{facing}</span></p></div>
              </div>
              <div className="col-md-4">
                <div className="mb-6"><p className='heading-p'>Floor: <span>{floor}</span></p></div>
              </div>
              <div className="col-md-4">
                <div className="mb-6"><p className='heading-p'>Total Floor: <span>{total_floor}</span></p></div>
              </div>
              <div className="col-md-4">
                <div className="mb-6"><p className='heading-p'>Carpate Area(Sq. ft.): <span>{area}</span></p></div>
              </div>
              <div className="col-md-4">
                <div className="mb-6"><p className='heading-p'>Coating Price (₹): <span>{price}</span></p></div>
              </div>
              <div className="col-md-4">
                <div className="mb-6"><p className='heading-p'>Covered Parking: <span>{coverdparking}</span></p></div>
              </div>
              <div className="col-md-4">
                <div className="mb-6"><p className='heading-p'>Open Parking: <span>{openparking}</span></p></div>
              </div>

              <div className="col-md-4">
                <div className="mb-6"><p className='heading-p'>Available_from: <span>{available_from}</span></p></div>
              </div>
              <div className="col-md-4">
                <div className="mb-6"><p className='heading-p'>Type of Customer: <span>{customer_type}</span></p></div>
              </div>
              <div className="col-md-4">
                <div className="mb-6"><p className='heading-p'>View: <span>{view}</span></p></div>
              </div>
              <div className="col-md-4">
                <div className="mb-6"><p className='heading-p'>Price (₹): <span>{price}</span></p></div>
              </div>

              {/* Use the custom button-container class */}
              <div className="button-container">
                <button type="button" className="btn btn-primary" onClick={() => setShowModal(true)}>
                  I am interested.
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
                      <form onSubmit={handleSubmit} noValidate>
                        <div className="mb-3">
                          <label htmlFor="name" className="form-label">Name</label>
                          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleInputChange} pattern="[A-Za-z]+" />
                          {formErrors.name && <div className="text-danger">{formErrors.name}</div>}
                        </div>
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">Email</label>
                          <input type="email" className="form-control"  id="email" name="email" value={formData.email} onChange={handleInputChange} />
                          {formErrors.email && <div className="text-danger">{formErrors.email}</div>}
                        </div>
                        <div className="mb-3">
                          <label htmlFor="mobile1" className="form-label">Mobile Number</label>
                          <input type="number" className="form-control" id="mobile1" name="mobile1" value={formData.mobile1} onChange={handleInputChange} maxLength={10}/>
                          {formErrors.mobile1 && <div className="text-danger">{formErrors.mobile1}</div>}
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
            {description}
          </p>
        </div>
      </div>
      <div className="container-fluid p-4 border amenities-list">
        <div className=''>
          <p className='heading-p amenities'>Amenities</p>
          <p>{amenities}</p>
        </div>
      </div>
      <div className="row ">
        <div className="col-md-12 p-2 text-center">
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
      <ToastContainer />
      <MainFooter />


    </div>
  );
};

export default PropertyDetails;
