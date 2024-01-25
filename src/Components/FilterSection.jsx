import { useState, useEffect } from 'react';
import { Dropdown, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/filterProp.css';

import FurnishedStatusList from '../assets/filterAssets/furnishedStatus';

import BedroomCountList from '../assets/filterAssets/noOFBedroom';

import FilterDropdown from './smallComponents/FilterDropDown';
import Category from '../assets/Category';
import PropertyType from '../assets/filterAssets/propertyType';
import Residential from '../assets/ResidentialDropDown';
import Commertial from '../assets/CommertialDropDoun';
import CustomerType from '../assets/filterAssets/TypeOfCustomer';
// import State from '../assets/deleteLater/State';
// import City from '../assets/deleteLater/City';
// import Location from '../assets/deleteLater/Location';
import { fetchCity, fetchLocation, fetchStates } from '../services/location';
import { toast } from 'react-toastify'


const FilterSection = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);
  const [selectedRange, setSelectedRange] = useState('');
  const [selectedBedroomCounts, setSelectedBedroomCounts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);

  const [selectedPropertyFeatures, setSelectedPropertyFeatures] = useState([]);

  const [selectedPropertyType, setSelectedPropertyType] = useState(null);
  const [selectedResidential, setSelectedResidential] = useState([]);
  const [selectedCommertial, setSelectedCommertial] = useState([]);
  const [selectedCustomerType, setSelectedCustomerType] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState([]);
  const [states, setStates] = useState([]);

  const [selectedState, setSelectedState] = useState([]);
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [formData, setFormData] = useState({
    // Add any other form data properties you need
    states:'',
    city: '',
    location: '',
  });

  const handleBedroomToggle = () => {
    // Handle any toggle logic if needed
  };

  const handleBedroomSelect = (bedroomCount) => {
    setSelectedBedroomCounts((prevSelected) =>
      prevSelected.includes(bedroomCount)
        ? prevSelected.filter((item) => item !== bedroomCount)
        : [...prevSelected, bedroomCount]
    );
  };
  const handleCategorySelect = (category) => {
    setSelectedCategory((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((item) => item !== category)
        : [...prevSelected, category]
    );
  };
  const handleResidentialSelect = (residential) => {
    setSelectedResidential((prevSelected) =>
      prevSelected.includes(residential)
        ? prevSelected.filter((item) => item !== residential)
        : [...prevSelected, residential]
    );
  };
  const handleCommertialSelect = (commertial) => {
    setSelectedCommertial((prevSelected) =>
      prevSelected.includes(commertial)
        ? prevSelected.filter((item) => item !== commertial)
        : [...prevSelected, commertial]
    );
  };

  const handleCustomerTypeSelect = (customerType) => {
    setSelectedCustomerType((prevSelected) =>
      prevSelected.includes(customerType)
        ? prevSelected.filter((item) => item !== customerType)
        : [...prevSelected, customerType]
    );
  };

  const handleStateChange = (event) => {
    const newStateId = event.target.value;
    const newStateObject = states.find(state => state.id === newStateId);

    setSelectedState(newStateObject);
    setSelectedCity('');
    setSelectedLocation('');

    // Fetch cities based on the selected state
    loadCities(newStateId);
  };


  const handleCityChange = (event) => {
    const newCityId = event.target.value;
    const newCity = cities.find((city) => city.id === newCityId);
  
    setSelectedCity(newCity);
    setFormData({
      ...formData,
      city: newCityId,
      location: '', // Reset location when city changes
    });
  
    // Fetch locations based on the selected city
    loadLocations(newCityId);
  };
  

  const handleLocationChange = (event) => {
    const newLocationId = event.target.value;
    const newLocation = locations.find((location) => location.id === newLocationId);

    setSelectedLocation(newLocation);
    setFormData({
      ...formData,
      location: newLocationId,
    });
  };
  useEffect(() => {
    // Fetch states when the component mounts
    loadStates();
  }, []);
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
  }

  
  const handleFeatureToggle = () => {
    // Handle any toggle logic if needed
  };

  const handleFeatureSelect = (feature) => {
    setSelectedPropertyFeatures((prevSelected) =>
      prevSelected.includes(feature)
        ? prevSelected.filter((item) => item !== feature)
        : [...prevSelected, feature]
    );
  };



  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(+e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(+e.target.value);
  };

  const handleApplyFilter = () => {
    // Add logic to handle the application of the selected range
    const rangeText = `Price Range: ${minPrice} - ${maxPrice}`;
    setSelectedRange(rangeText);
    setIsDropdownOpen(false);

  };
  const handlePropertyTypeSelect = (type) => {
    setSelectedPropertyType(type);
  };
  const handleRemoveFilter = () => {
    setSelectedPropertyType(null);
  };
  const handleRemoveState = () => {
    setSelectedState({});
    setSelectedCity('');
    setSelectedLocation('');
    // Additional logic if needed
  };
  const handleRemoveCity = () => {
    setSelectedCity({}); // Clear the selected city
    setSelectedLocation({});
  };
  
  const handleRemoveLocation = () => {
    setSelectedLocation({}); // Clear the selected location
  };

  const dropdownStyle = {
    width: '250px', // Set your desired width
  };

  return (
    <div className='container-filter-width filter-width border p-4 filterBg'>
      <div className='d-flex justify-content-between align-items-center'>
        <div>
          <h4>Filters</h4>
        </div>

      </div>

      <hr className='my-4' />

      <div className="container mt-3">
        <Dropdown>
          <Dropdown.Toggle
            variant=""
            className='buttonDdBg'
            id="stateDropdown"
            style={{ width: '90%', background: '#624E80', color: 'white' }}
          >
            {selectedState.length > 0 ? `Selected State: ${selectedState.state_name}` : 'State'}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {states.map((state) => (
              <Dropdown.Item
                key={state.id}
                style={{ color: 'black' }}
                onClick={() => handleStateChange({ target: { value: state.id } })}
              >
                {state.state_name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        {Object.keys(selectedState).length > 0 && (
          <div className="mt-2">
            <p className="h6">Selected State:</p>
            <ul className="list-unstyled">
              <li className="d-flex align-items-center m-1">
                {selectedState.state_name}{' '}
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleRemoveState()}
                  className="ms-2"
                >
                  &times;
                </Button>
              </li>
            </ul>
          </div>
        )}

      </div>



      <div className="container mt-3">
  <Dropdown>
    <Dropdown.Toggle
      variant=""
      className='buttonDdBg'
      id="cityDropdown"
      style={{ width: '90%', background: '#624E80', color: 'white' }}
    >
      {selectedCity.length > 0 ? `Selected City: ${selectedCity.city}` : 'City'}
      
    </Dropdown.Toggle>
    <Dropdown.Menu>
      {cities.map((city) => (
        <Dropdown.Item
          key={city.id}
          style={{ color: 'black' }}
          onClick={() => handleCityChange({ target: { value: city.id } })}
          
        >
          {city.city}
        </Dropdown.Item>
      ))}
    </Dropdown.Menu>
  </Dropdown>
  {Object.keys(selectedCity).length > 0 && (
    <div className="mt-2">
      <p className="h6">Selected City:</p>
      <ul className="list-unstyled">
        <li className="d-flex align-items-center m-1">
          {selectedCity.city}{' '}
          <Button
            variant="danger"
            size="sm"
            onClick={handleRemoveCity}
            className="ms-2"
          >
            &times;
          </Button>
        </li>
      </ul>
    </div>
  )}
</div>




<div className="container mt-3">
  <Dropdown>
    <Dropdown.Toggle
      variant=""
      className='buttonDdBg'
      id="locationDropdown"
      style={{ width: '90%', background: '#624E80', color: 'white' }}
    >
      {selectedLocation.length > 0 ? `Selected Location: ${selectedLocation.location}` : 'Location'}
    </Dropdown.Toggle>
    <Dropdown.Menu>
      
      {locations.map((location) => (
        <Dropdown.Item
          key={location.id}
          style={{ color: 'black' }}
          onClick={() => handleLocationChange({ target: { value: location.id } })}
        >
          {location.location}
        </Dropdown.Item>
      ))}
    </Dropdown.Menu>
  </Dropdown>
  {Object.keys(selectedLocation).length > 0 && (
          <div className="mt-2">
            <p className="h6">Selected Location:</p>
            <ul className="list-unstyled">
              <li className="d-flex align-items-center m-1">
                {selectedLocation.location}{' '}
                
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleRemoveLocation()}
                  className="ms-2"
                >
                  &times;
                </Button>
              </li>
            </ul>
          </div>
        )}
</div>




      <FilterDropdown
        options={Category}
        selectedItems={selectedCategory}
        onSelect={handleCategorySelect}

        title="Category"
      />



      {/* Dropdown for Property Type */}
      <div className="container mt-3">
        <Dropdown>
          <Dropdown.Toggle variant="" className='buttonDdBg' id="dropdown-basic" style={{ width: '90%', background: '#624E80', color: 'white' }}>
            {selectedPropertyType || 'Property Type'}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {/* Assuming PropertyType is an array of available property types */}
            {PropertyType.map((item) => (
              <Dropdown.Item
                key={item}
                onClick={() => handlePropertyTypeSelect(item)}
                active={selectedPropertyType === item}
              >
                {item}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>


      {/* Display selected type below the dropdown */}
      {selectedPropertyType && (
        <div className="mt-2 ms-2">
          <p className="h6">Selected Property Type:</p>
          <ul className="list-unstyled d-flex align-items-center">
            <li>{selectedPropertyType}</li>
            <Button
              variant="danger"
              size="sm"
              className="ms-2"
              onClick={handleRemoveFilter}
            >
              &times;
            </Button>
          </ul>
        </div>
      )}

      {/* Conditional rendering based on Property Type */}
      {selectedPropertyType === 'Residential' && (
        <>
          <FilterDropdown
            options={Residential}
            selectedItems={selectedResidential}
            onSelect={handleResidentialSelect}
            title="Residential Type"
          />
          <FilterDropdown
            options={BedroomCountList}
            selectedItems={selectedBedroomCounts}
            onSelect={handleBedroomSelect}
            onToggle={handleBedroomToggle}
            title="BHK"
          />
          <FilterDropdown
            options={CustomerType}
            selectedItems={selectedCustomerType}
            onSelect={handleCustomerTypeSelect}
            title="Type Of Customer"
          />
        </>
      )}

      {selectedPropertyType === 'Commertial' && (
        <>
          {/* Adjust the options and titles based on your requirements */}
          <FilterDropdown
            options={Commertial}
            selectedItems={selectedCommertial}
            onSelect={handleCommertialSelect}
            title="Commercial Type"
          />
          {/* Additional filters for Commercial Type */}
        </>
      )}



      {/* Furnished Status */}
      <FilterDropdown
        options={FurnishedStatusList}
        selectedItems={selectedPropertyFeatures}
        onSelect={handleFeatureSelect}
        onToggle={handleFeatureToggle}
        title="Furnishing"
      />
      {/* Customer Type */}
      {/* <FilterDropdown
        options={CustomerType}
        selectedItems={selectedCustomerType}
        onSelect={handleCustomerTypeSelect}
        title="Type Of Customer"
      /> */}

      <div className='row mt-3 ms-1'>
        <div className='col-md-6' style={{ width: '85%', }}>
          <div className='mb-3  margin-left-button' >
            <button
              className='btn btn-success w-100 buttonDdBg ms-1' // Apply Bootstrap button styles
              type='button'
              style={{ background: '#624E80', color: 'white' }}
              onClick={handleDropdownToggle}
            >
              Budget
            </button>
            <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''} budget-header-range`} style={dropdownStyle}>
              <li>
                <div className='budget-header-range'>
                  <label htmlFor='customRange2' className='form-label p-1'>
                    Price Range
                  </label>
                </div>
                <div className='d-flex justify-content-between'>
                  <input
                    type='number'
                    value={minPrice}
                    onChange={handleMinPriceChange}
                    className='form-control m-1'
                    placeholder='Min Price'
                  />
                  <input
                    type='number'
                    value={maxPrice}
                    onChange={handleMaxPriceChange}
                    className='form-control m-1'
                    placeholder='Max Price'
                  />
                  <button className='btn btn-primary m-1 budget-button' onClick={handleApplyFilter}>
                    Apply
                  </button>
                </div>
              </li>
            </div>
            {selectedRange && <p className='mt-2'>{selectedRange}</p>}
          </div>
        </div>


      </div>


    </div>

  );
};

export default FilterSection;