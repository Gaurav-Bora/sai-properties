import { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/enquiry.css';
import Header from '../Components/headerComponent';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Category from '../assets/Category';
import Residential from '../assets/ResidentialDropDown';
import Commertial from '../assets/CommertialDropDoun';
import BedroomCountList from '../assets/filterAssets/noOFBedroom';
import FurnishedStatusList from '../assets/filterAssets/furnishedStatus';
import CustomerType from '../assets/filterAssets/TypeOfCustomer';
import PropertyType from '../assets/filterAssets/propertyType';
import { fetchCity, fetchLocation, fetchStates } from '../services/location';
import axios from 'axios';
import { createUrl } from '../utils/Utils';
import MainFooter from '../Components/MainFooter';
import Profession from '../assets/profession';



const Enquiry = () => {
  const formRef = useRef(null);
  // const [newEnquiryKey] = useState('');
  const notify = (message, type = 'info') => {
    toast[type](message, {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };
  // State to manage form data

  const [formData, setFormData] = useState({
    purpose: '',
    main_type: '',
    category: '',
    title: '',
    type: '',
    user_type: '',
    min_budget: '',
    max_budget: '',
    possession_date: '',
    remark: '',
    state_id: '', // Add initial state for state
    city_id: '', // Add initial state for city
    location_id: '', // Add initial state for location
    gender: '', // Add initial state for gender
    name: '',
    mobile1: '',
    email: '',
    profession: '',
    enquiry_status: 'new',
  });

  // Handle form field changes
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [locations, setLocations] = useState([]);
  const [formErrors, setFormErrors] = useState({
    state_id: '',
    city_id: '',
    location_id: '',
    name: '',
    mobile1: '',
    email: '',
    profession: '',
    gender: '',
    possession_date: '',
    main_type: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let errorMessage = '';

    // Clear the error message when the user starts typing in the field
    setFormErrors({
      ...formErrors,
      [name]: '',
    });

    // Check if the entered value is valid for the name field
    if (name === "name" && /\d/.test(value)) {
      // If numbers are detected, return without updating the state
      return;
  }

     // Check if the entered value is valid for the email field
     if (name === 'email') {
      const trimmedValue = value.trim();
      // Regular expression for email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(trimmedValue)) {
          // If the entered value doesn't match the email format, display an error message
          errorMessage = 'Please enter a valid email address';
      }
  }

    // Check if the entered value is valid for the mobile number field
    if (name === 'mobile1') {
        // const trimmedValue = value.trim();
        if (name === "mobile1" && value.length > 10) {
          // If mobile number exceeds 10 digits, do not update the state
          return;
        }
        
        // if (trimmedValue.length > 10) {
        //     // If more than 10 numbers are entered, display an error message
        //     errorMessage = 'Mobile number should not exceed 10 digits';
        // } else if (!/^\d{0,10}$/.test(trimmedValue)) {
        //     // If the entered value contains non-numeric characters, display an error message
        //     errorMessage = 'Mobile number should contain only digits';
        // }
    }

    // Update the form data state with the new value
    setFormData({
        ...formData,
        [name]: value,
    });

    // Update the error message state with the validation result
    setFormErrors({
        ...formErrors,
        [name]: errorMessage,
    });
};



  const handleStateChange = async (event) => {
    const newStateId = event.target.value;
    setFormData({
      ...formData,
      state_id: newStateId,
      city: '', // Reset city when state changes
      location: '', // Reset location when state changes
    });
    setFormErrors({
      ...formErrors,
      state_id: '',
    });
    await loadCities(newStateId);
    console.log(newStateId)
  };

  const handleCityChange = async (event) => {
    const newCityId = event.target.value;
    setFormData({
      ...formData,
      city_id: newCityId,
      location: '', // Reset location when city changes
    });
    setFormErrors({
      ...formErrors,
      city_id: '',
    });
    await loadLocations(newCityId);
    console.log(newCityId)
  };

  const handleLocationChange = (event) => {
    const newLocationId = event.target.value;
    setFormData({
      ...formData,
      location_id: newLocationId,
    });
    console.log(newLocationId)
    setFormErrors({
      ...formErrors,
      location_id: '',
    });
  };

  const loadStates = async () => {
    try {
      const data = await fetchStates();
      setStates(data);
    } catch (error) {
      toast.error('Error while fetching states');
      console.error('Error while fetching states:', error);
    }
  };

  const loadCities = async (stateId) => {
    try {
      const cities = await fetchCity(stateId);
      setCities(cities); // Assuming you have a state variable for cities
    } catch (error) {
      toast.error('Error while fetching cities');
      console.error('Error while fetching cities:', error);
    }
  };

  const loadLocations = async (cityId) => {
    try {
      const location = await fetchLocation(cityId);
      setLocations(location);
    } catch (error) {
      toast.error('Error while fetching cities');
      console.error('Error while fetching cities:', error);
    }
  };

  const resetForm = () => {
    setFormData({
      purpose: '',
      main_type: '',
      category: '',
      title: '',
      type: '',
      user_type: '',
      min_budget: '',
      max_budget: '',
      possession_date: '',
      remark: '',
      state_id: '',
      city_id: '',
      location_id: '',
      gender: '',
      name: '',
      mobile1: '',
      email: '',
      profession: '',
      // enquiry_status: 'new',
      enquiry_key: '',
      // verification_status: '0',
      // source: 'saiProperties.co.in',
    });
  };

  const submitEnquiry = async (e) => {
    e.preventDefault();
    const apiUrl = createUrl('/user/user-enquiry.php');

    console.log(formData);
    const errors = {};
    //validations
    if (!(formData.state_id)) {
      // setStateError('Select State');
      errors.state_id = 'Select State'
    }
    if (!(formData.city_id)) {
      // setCityError('Select City');
      errors.city_id = 'Select City'
    }
    if (!(formData.location_id)) {
      // setLocationError('Select Location');
      errors.location_id = 'Select Location'
    }
    if (!(formData.main_type)) {
      // setStateError('Select State');
      errors.main_type = 'Select Property Type'
    }
    if (!(formData.name)) {
      // setNameError('Full Name cannot be empty');
      errors.name = 'Name cannot be empty'
    }
    if (!formData.mobile1) {
      errors.mobile1 = 'Contact cannot be empty';
    } else if (!/^\d{10}$/.test(formData.mobile1)) {
      errors.mobile1 = 'Enter valid Contact no';
    }
    if (!formData.email) {
      // setEmailError('Email cannot be empty');
      errors.email = 'Email cannot be empty'
    }
    if (!formData.profession) {
      // setProfessionError('Profession cannot be empty');
      errors.profession = 'Profession cannot be empty'
    }
    if (!formData.gender) {
      // setGenderError('Select Gender');
      errors.gender = 'Select Gender'
    }
    if (!formData.possession_date) {
      // setPossessionError('Possession Date cannot be empty');
      errors.possession_date = 'Possession Date cannot be empty'
    }
    if (Object.keys(errors).length > 0) {
      // If there are errors, update the formErrors state to display them
      setFormErrors(errors);
      return;
    }

    try {
      const response = await axios.post(apiUrl, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {

        notify('Enquiry Posted.', 'success');

        // Reset only the user-input values, keeping default values
        setFormData({
          // enquiry_key: newEnquiryKey,
          purpose: '',
          main_type: '',
          category: '',
          title: '',
          type: '',
          user_type: '',
          min_budget: '',
          max_budget: '',
          possession_date: '',
          remark: '',
          state_id: '',
          city_id: '',
          location_id: '',
          gender: '',
          name: '',
          mobile1: '',
          email: '',
          profession: '',
          // enquiry_status: 'new',                
          // verification_status: '0',
          // source: 'saiProperties.co.in',
        });
      } else {
        notify('Form submission failed', 'error');
        throw new Error('Form submission failed');
      }
    } catch (error) {
      notify('Form submission failed', 'error');
      console.error('Error submitting form:', error);
    }
  };

  useEffect(() => {
    loadStates();
  }, []);

  return (
    <><Header Heading='General Enquiry Form' />
      <div className="container-fluid  margin-enquiry p-3">
        <form ref={formRef} onSubmit={submitEnquiry} className='px-5 pb-5 needs-validation' noValidate>
          <div className="row g-3">
            <p className='text-center section-heading'>Enquiry Details</p>
            <div className="col-md-4">
              <label htmlFor="category" className="form-label label-enquiry">Category:</label>
              <select className="form-select" id="category" name="purpose" value={formData.purpose} onChange={handleInputChange}>
                <option value="">Select Category</option>
                {Category.map(type => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-md-4">
              <label htmlFor="propertyType" className="form-label label-enquiry">Property Type: *</label>
              <select className="form-select" id="propertyType" name="main_type" value={formData.main_type} onChange={handleInputChange}>
                <option value="">Select Property Type</option>
                {PropertyType.map(type => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {formErrors.main_type && <div className="text-danger">{formErrors.main_type}</div>}
            </div>

            {formData.main_type === 'Residential' && (
              <div className="col-md-4">
                <label htmlFor="residentialType" className="form-label label-enquiry">Residential Type:</label>
                <select className="form-select" id="residentialType" name="type" value={formData.type} onChange={handleInputChange}>
                  <option value="">Select Residential Type</option>
                  {Residential.map(type => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {formData.main_type === 'Commertial' && (
              <div className="col-md-4">
                <label htmlFor="CommertialType" className="form-label label-enquiry">Commertial Type:</label>
                <select className="form-select" id="CommertialType" name="type" value={formData.type} onChange={handleInputChange}>
                  <option value="">Select Commertial Type</option>
                  {Commertial.map(type => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {formData.main_type === '' && (
              <div className='col-md-4'>
                <label htmlFor="CommertialType" className="form-label label-enquiry">Residential/Commertial Type:</label>
                <select
                  id='emptyDropdown'
                  className='form-select tagbg'
                // style={{ width: '150px', margin: '10px' }}
                >
                  <option value=''>Select Type First</option>
                </select>
              </div>
            )}


            <div className="col-md-4">
              <label htmlFor="state" className="form-label label-enquiry">
                State *
              </label>
              <select
                className="form-select"
                id="state"
                name="state_id"
                value={formData.state_id}
                onChange={handleStateChange}
              >
                <option value="">Select State</option>
                {states.map((state) => (
                  <option key={state.id} value={state.id}>
                    {state.state_name}
                  </option>
                ))}
              </select>
              {/* {stateError && <div className="text-danger">{stateError}</div>} */}
              {formErrors.state_id && <div className="text-danger">{formErrors.state_id}</div>}

            </div>


            <div className="col-md-4">
              <label htmlFor="city" className="form-label label-enquiry">
                City *
              </label>
              <select
                className="form-select"
                id="city"
                name="city_id"
                value={formData.city_id}
                onChange={handleCityChange}
              >
                <option value="">Select City</option>
                {cities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.city}
                  </option>
                ))}
              </select>
              {/* {cityError && <div className="text-danger">{cityError}</div>} */}
              {formErrors.city_id && <div className="text-danger">{formErrors.city_id}</div>}

            </div>

            <div className="col-md-4">
              <label htmlFor="location" className="form-label label-enquiry">
                Location *
              </label>
              <select
                className="form-select"
                id="location"
                name="location_id"
                value={formData.location_id}
                onChange={handleLocationChange}
              >
                <option value="">Select Location</option>
                {locations.map((location) => (
                  <option key={location.id} value={location.id}>
                    {location.location}
                  </option>
                ))}
              </select>
              {/* {locationError && <div className="text-danger">{locationError}</div>} */}
              {formErrors.location_id && <div className="text-danger">{formErrors.location_id}</div>}
            </div>
            {formData.main_type == 'Residential' && (
              <div className="col-md-4">
                <label htmlFor="bhkType" className="form-label label-enquiry">BHK:</label>
                <select className="form-select" id="bhkType" name="title" value={formData.title} onChange={handleInputChange}>
                  <option value="">Select BHK *</option>
                  {BedroomCountList.map(type => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>)}
            {/* for commercialType */}
            {formData.main_type == 'Commertial' && (
              <div className="col-md-4">
                <label htmlFor="reqArea" className="form-label label-enquiry">Required Area (Sq.Ft.) *</label>
                <input type="number" className="form-control" id="reqArea" name="title" value={formData.title} onChange={handleInputChange} />
              </div>
            )}
            <div className="col-md-4">
              <label htmlFor="furnishing" className="form-label label-enquiry">Furnishing: </label>
              <select className="form-select" id="furnishing" name="category" value={formData.category} onChange={handleInputChange}>
                <option value="">Select Furnishing</option>
                {FurnishedStatusList.map(type => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {formData.main_type == 'Residential' && (
              <div className="col-md-4">
                <label htmlFor="Customer" className="form-label label-enquiry">Customer Type:</label>
                <select className="form-select" id="Customer" name="user_type" value={formData.user_type} onChange={handleInputChange}>
                  <option value="">Select Customer Type</option>
                  {CustomerType.map(type => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {formData.main_type === 'Commertial' && (
              <div className="col-md-4">
                <label htmlFor="usePurpose" className="form-label label-enquiry">Use Purpose</label>
                <input type="text" className="form-control" id="usePurpose" name="user_type" value={formData.user_type} onChange={handleInputChange} />
              </div>
            )}

            <div className="col-md-4">
              <label htmlFor="minBudget" className="form-label label-enquiry">Min Budget</label>
              <input type="number" className="form-control" id="minBudget" name="min_budget" value={formData.min_budget} onChange={handleInputChange} />
            </div>

            <div className="col-md-4">
              <label htmlFor="maxBudget" className="form-label label-enquiry">Max Budget</label>
              <input type="number" className="form-control" id="maxBudget" name="max_budget" value={formData.max_budget} onChange={handleInputChange} />
            </div>

            <div className="col-md-9">
              <label htmlFor="remark" className="form-label label-enquiry">Specific Requirement</label>
              <textarea className="form-control" id="remark" name="remark" rows="4" value={formData.remark} onChange={handleInputChange}></textarea>
            </div>
            <p className='text-center section-heading'>Customer Details</p>

            <div className="col-md-4">
              <label htmlFor="name" className="form-label label-enquiry">Name *</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" name="name" value={formData.name} onChange={handleInputChange} />
              {/* {nameError && <div className="text-danger">{nameError}</div>} */}
              {formErrors.name && <div className="text-danger">{formErrors.name}</div>}
            </div>

            <div className="col-md-4">
              <label htmlFor="mobile1" className="form-label label-enquiry">Mobile *</label>
              <input type="number" className="form-control" id="mobile1" placeholder="Enter your mobile number" name="mobile1" value={formData.mobile1} onChange={handleInputChange} />
              {/* {contactError && <div className="text-danger">{contactError}</div>} */}
              {formErrors.mobile1 && <div className="text-danger">{formErrors.mobile1}</div>}
            </div>


            <div className="col-md-4">
              <label htmlFor="email" className="form-label label-enquiry">Email *</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleInputChange} />
              {/* {emailError && <div className="text-danger">{emailError}</div>} */}
              {formErrors.email && <div className="text-danger">{formErrors.email}</div>}
            </div>

            <div className="col-md-4">
              <label htmlFor="profession" className="form-label label-enquiry">Profession *</label>

              <select
                className="form-select"
                id="profession"
                name="profession"
                value={formData.profession}
                onChange={handleInputChange}
            >
                <option value="">Select your profession</option>
                {Profession.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
              {/* {professionError && <div className="text-danger">{professionError}</div>} */}
              {formErrors.profession && <div className="text-danger">{formErrors.profession}</div>}
            </div>

            <div className="col-md-4">
              <label className="form-label label-enquiry">Gender *</label>
              <div className="d-flex">
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="male"
                    name="gender"
                    value="male"
                    checked={formData.gender === 'male'}
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label" htmlFor="male">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input ms-2"
                    id="female"
                    name="gender"
                    value="female"
                    checked={formData.gender === 'female'}
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label ms-2" htmlFor="female">
                    Female
                  </label>
                </div>
              </div>
              {/* {genderError && <div className="text-danger">{genderError}</div>} */}
              {formErrors.gender && <div className="text-danger">{formErrors.gender}</div>}
            </div>

            <div className="col-md-4">
              <label htmlFor="dateOfPossession" className="form-label label-enquiry">Date of Possession *</label>
              <input type="date" className="form-control" id="dateOfPossession" name="possession_date" value={formData.possession_date} onChange={handleInputChange} />
              {/* {possessionError && <div className="text-danger">{possessionError}</div>} */}
              {formErrors.possession_date && <div className="text-danger">{formErrors.possession_date}</div>}
            </div>

            <div className="col-md-12 mt-3 d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">Submit</button>
              <button type="button" className="btn btn-secondary ms-2" onClick={resetForm}>Reset</button>
            </div>

          </div>
        </form>
        <ToastContainer />
        <MainFooter />
      </div>
    </>
  );
}

export default Enquiry;
