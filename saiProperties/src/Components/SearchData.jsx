import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import LocationsData from '../assets/locationData';
import PropertyType from '../assets/propertyType';
import Purpose from '../assets/purpose';
import SubType from '../assets/subType';
import MinBedroom from '../assets/minBedroom';
import MinBalcony from '../assets/minBalcony';
import '../style/formBg.css'

const SearchDropdowns = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [property, setProperty] = useState('');
  const [purpose, setPurpose] = useState('');
  const [subType, SetSubType] = useState('');
  const [minBedroom, SetMinBedroom] = useState('');
  const [minBalcony, SetMinBalcony] = useState('');
  const [minBathroom, SetMinBathroom] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minArea, setMinArea] = useState('');
  const [maxArea, setMaxArea] = useState('');

  const handleStateChange = (event) => {
    const newState = event.target.value;
    setSelectedState(newState);
    // Reset city and location when state changes
    setSelectedCity('');
    setSelectedLocation('');
  };

  const handleCityChange = (event) => {
    const newCity = event.target.value;
    // Check if the selected state is the same as the state of the city being changed
    if (LocationsData[selectedState]?.Cities.includes(newCity)) {
      setSelectedCity(newCity);
      // Reset location when city changes
      setSelectedLocation('');
    } else {
      // Reset city if the selected state is different
      setSelectedCity('');
    }
  };

  const handleLocationChange = (event) => {
    const newLocation = event.target.value;
    // Check if the selected state and city are the same as the state and city of the location being changed
    if (
      LocationsData[selectedState]?.Cities.includes(selectedCity) &&
      LocationsData[selectedState][selectedCity]?.includes(newLocation)
    ) {
      setSelectedLocation(newLocation);
    } else {
      // Reset location if the selected state or city is different
      setSelectedLocation('');
    }
  };

  const handlePropertyTypeChange = (event) => {
    const type = event.target.value;
    setProperty(type);
  };

  const handlePurposeChange = (event) => {
    const purpo = event.target.value;
    setPurpose(purpo);
  };

  const handleSubTypeChange = (event) => {
    const sub = event.target.value;
    SetSubType(sub);
  };

  const handleMinBedroomChange = (event) => {
    const min = event.target.value;
    SetMinBedroom(min);
  };

  const handleMinBalconyChange = (event) => {
    const min = event.target.value;
    SetMinBalcony(min);
  };

  const handleMinBathroomChange = (event) => {
    const min = event.target.value;
    SetMinBathroom(min);
  };

  const handleMinPriceChange = (event) => {
    const price = event.target.value;
    setMinPrice(price);
  };

  const handleMaxPriceChange = (event) => {
    const price = event.target.value;
    setMaxPrice(price);
  };

  const handleMinAreaChange = (event) => {
    const area = event.target.value;
    setMinArea(area);
  };

  const handleMaxAreaChange = (event) => {
    const area = event.target.value;
    setMaxArea(area);
  };

  const handleSearch = (event) => {
    event.preventDefault(); // Prevent the form from submitting (to avoid page reload)
    
    // Implement your search logic here
    // You can access all the selected values and perform the search operation
    console.log({
      selectedState,
      selectedCity,
      selectedLocation,
      property,
      purpose,
      subType,
      minBedroom,
      minBalcony,
      minBathroom,
      minPrice,
      maxPrice,
      minArea,
      maxArea,
    });
    // Clear the input fields after search
    setSelectedState('');
    setSelectedCity('');
    setSelectedLocation('');
    setProperty('');
    setPurpose('');
    SetSubType('');
    SetMinBedroom('');
    SetMinBalcony('');
    SetMinBathroom('');
    setMinPrice('');
    setMaxPrice('');
    setMinArea('');
    setMaxArea('');
  };

  return (
    <div className='m-0'>
    <form
      className="container-fluid text-start  form-bg formbg p-4"
      onSubmit={handleSearch}
      
    >
    <p className='text-center headingSd'>Search Properties similar to your choice</p>
    <div className="row mb-3">
      <div className="col-md-4">
        <label htmlFor="stateDropdown" className="form-label text-start labelText">
          State
        </label>
        <select
          id="stateDropdown"
          className="form-select tagbg"
          value={selectedState}
          onChange={handleStateChange}
        >
          <option value="">Select a State</option>
          {Object.keys(LocationsData).map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      {selectedState && (
        <div className="col-md-4">
          <label htmlFor="cityDropdown" className="form-label text-start labelText">
            City:
          </label>
          <select
            id="cityDropdown"
            className="form-select tagbg"
            value={selectedCity}
            onChange={handleCityChange}
          >
            <option value="">Select a City</option>
            {LocationsData[selectedState]?.Cities &&
              LocationsData[selectedState]?.Cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
          </select>
        </div>
      )}

      {selectedState && selectedCity && (
        <div className="col-md-4">
          <label htmlFor="locationDropdown" className="form-label text-start labelText">
            Location:
          </label>
          <select
            id="locationDropdown"
            className="form-select tagbg"
            value={selectedLocation}
            onChange={handleLocationChange}
          >
            <option value="">Select a Location</option>
            {LocationsData[selectedState][selectedCity]?.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
      <div className="row mt-4">
        {/* Purpose */}
        <div className="col-md-3 mt-auto">
          <label htmlFor="purposeDropdown" className='mb-2 labelText'>Purpose</label>
          <select
            id="purposeDropdown"
            className="form-select tagbg"
            value={purpose}
            onChange={handlePurposeChange}
          >
            <option value="">Select a Purpose</option>
            {Object.values(Purpose).map((purpo) => (
              <option key={purpo} value={purpo}>
                {purpo}
              </option>
            ))}
          </select>
        </div>
        {/* Property Type */}
        <div className="col-md-3 mt-auto">
          <label htmlFor="propertyTypeDropdown" className='mb-2 labelText'>Property</label>
          <select
            id="propertyTypeDropdown"
            className="form-select tagbg"
            value={property}
            onChange={handlePropertyTypeChange}
          >
            <option value="">Select a Property Type</option>
            {Object.values(PropertyType).map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        {/* Sub Type */}
        <div className="col-md-3 mt-auto">
          <label htmlFor="subTypeDropdown" className='mb-2 labelText'>Type</label>
          <select
            id="subTypeDropdown"
            className="form-select tagbg"
            value={subType}
            onChange={handleSubTypeChange}
          >
            <option value="">Select Sub Type</option>
            {Object.values(SubType).map((sub) => (
              <option key={sub} value={sub}>
                {sub}
              </option>
            ))}
          </select>
        </div>
        {/* Min Bedroom */}
        <div className="col-md-3 mt-2">
          <label htmlFor="minBedroomDropdown" className='mb-2 labelText'>Min Bedroom</label>
          <select
            id="minBedroomDropdown"
            className="form-select tagbg"
            value={minBedroom}
            onChange={handleMinBedroomChange}
          >
            <option value="">Select Min Bedroom</option>
            {Object.values(MinBedroom).map((min) => (
              <option key={min} value={min}>
                {min}
              </option>
            ))}
          </select>
        </div>
        {/* Min Balcony */}
        <div className="col-md-3 mt-2">
          <label htmlFor="minBalconyDropdown" className='mb-2 labelText'>Min Balcony</label>
          <select
            id="minBalconyDropdown"
            className="form-select tagbg"
            value={minBalcony}
            onChange={handleMinBalconyChange}
          >
            <option value="">Select Min Balcony</option>
            {Object.values(MinBalcony).map((min) => (
              <option key={min} value={min}>
                {min}
              </option>
            ))}
          </select>
        </div>
        {/* Min Bathroom */}
        <div className="col-md-3 mt-2">
          <label htmlFor="minBathroomDropdown" className='mb-2 labelText'>Min Bathroom</label>
          <select
            id="minBathroomDropdown"
            className="form-select tagbg"
            value={minBathroom}
            onChange={handleMinBathroomChange}
          >
            <option value="">Select Min Bathroom</option>
            {Object.values(MinBalcony).map((min) => (
              <option key={min} value={min}>
                {min}
              </option>
            ))}
          </select>
        </div>
        {/* Min Price */}
        <div className="col-md-3 mt-2">
          <label htmlFor="minPriceInput" className='mb-2 labelText'>Min Price</label>
          <input
            type="number"
            id="minPriceInput"
            className="form-control tagbg"
            value={minPrice}
            onChange={handleMinPriceChange}
          />
        </div>
        {/* Max Price */}
        <div className="col-md-3 mt-2">
          <label htmlFor="maxPriceInput" className='mb-2 labelText'>Max Price</label>
          <input
            type="number"
            id="maxPriceInput"
            className="form-control tagbg"
            value={maxPrice}
            onChange={handleMaxPriceChange}
          />
        </div>
        {/* Min Area */}
        <div className="col-md-3 mt-2">
          <label htmlFor="minAreaInput" className='mb-2 labelText'>Min Area</label>
          <input
            type="number"
            id="minAreaInput"
            className="form-control tagbg"
            value={minArea}
            onChange={handleMinAreaChange}
          />
        </div>
        {/* Max Area */}
        <div className="col-md-3 mt-2">
          <label htmlFor="maxAreaInput" className='mb-2 labelText'>Max Area</label>
          <input
            type="number"
            id="maxAreaInput"
            className="form-control tagbg"
            value={maxArea}
            onChange={handleMaxAreaChange}
          />
        </div>
        {/* Search Button */}
        <div className="row mt-4">
        <div className="col-md-4 mx-auto">
          <button type="submit" className="btn btn-danger w-75 float-end">
            Search
          </button>
        </div>
      </div>
      </div>
    </form>
    </div>
  );
};

export default SearchDropdowns;
