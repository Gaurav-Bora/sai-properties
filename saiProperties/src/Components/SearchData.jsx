import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

import Purpose from '../assets/purpose';

import '../style/formBg.css';
import { FaSearch } from 'react-icons/fa';
import Residential from '../assets/ResidentialDropDown';
import Commertial from '../assets/CommertialDropDoun';

const SearchDropdowns = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [residential, setResidential] = useState('');
  const [purpose, setPurpose] = useState('');
  const [commercial, SetCommercial] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleStateChange = (event) => {
    const newState = event.target.value;
    setSelectedState(newState);
    setSelectedCity('');
    setSelectedLocation('');
  };

  const handleCityChange = (event) => {
    const newCity = event.target.value;
    setSelectedCity(newCity);
  };

  const handleLocationChange = (event) => {
    const newLocation = event.target.value;
    setSelectedLocation(newLocation);
  };

  const handleResidentialChange = (event) => {
    const type = event.target.value;
    setResidential(type);
  };

  const handlePurposeChange = (event) => {
    const purpo = event.target.value;
    setPurpose(purpo);
  };

  const handleCommercialChange = (event) => {
    const sub = event.target.value;
    SetCommercial(sub);
  };

  const handleMinPriceChange = (event) => {
    const price = event.target.value;
    setMinPrice(price);
  };

  const handleMaxPriceChange = (event) => {
    const price = event.target.value;
    setMaxPrice(price);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log({
      selectedState,
      selectedCity,
      selectedLocation,
      residential,
      purpose,
      commercial,
      minPrice,
      maxPrice,
    });
    setSelectedState('');
    setSelectedCity('');
    setSelectedLocation('');
    setResidential('');
    setPurpose('');
    SetCommercial('');
    setMinPrice('');
    setMaxPrice('');
  };

  return (
    <div className='container-fluid '>
      <form
        className='container-fluid text-start form-bg formbg p-4 d-flex flex-wrap d-flex justify-content-center align-items-center'
        onSubmit={handleSearch}
      >
        <div className='col-md-1 m-2'>
          {/* <label htmlFor='stateDropdown' className='form-label text-start labelText'>
            State
          </label> */}
          <select
            id='stateDropdown'
            className='form-select tagbg'
            value={selectedState}
            onChange={handleStateChange}
          >
            <option value=''>State</option>
          </select>
        </div>

        <div className='col-md-1 m-2'>
          {/* <label htmlFor='cityDropdown' className='form-label text-start labelText'>
            City:
          </label> */}
          <select
            id='cityDropdown'
            className='form-select tagbg'
            value={selectedCity}
            onChange={handleCityChange}
          >
            <option value=''>City</option>
          </select>
        </div>

        <div className='col-md-1 m-2'>
          {/* <label htmlFor='locationDropdown' className='form-label text-start labelText'>
            Location:
          </label> */}
          <select
            id='locationDropdown'
            className='form-select tagbg'
            value={selectedLocation}
            onChange={handleLocationChange}
          >
            <option value=''>Location</option>
          </select>
        </div>

        

        <div className='col-md-1 m-2'>
          {/* <label htmlFor='propertyTypeDropdown' className='mb-2 labelText'>
            Residential
          </label> */}
          <select
            id='residentialDropdown'
            className='form-select tagbg'
            value={residential}
            onChange={handleResidentialChange}
          >
            <option value=''>Residential</option>
            {Object.values(Residential).map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className='col-md-1 m-2'>
          
          <select
            id='commercialDropdown'
            className='form-select tagbg'
            value={commercial}
            onChange={handleCommercialChange}
          >
            <option value=''>Commertial</option>
            {Object.values(Commertial).map((sub) => (
              <option key={sub} value={sub}>
                {sub}
              </option>
            ))}
          </select>
        </div>
        <div className='col-md-1 m-2'>
          {/* <label htmlFor='purposeDropdown' className='mb-2 labelText'>
            Purpose
          </label> */}
          <select
            id='purposeDropdown'
            className='form-select tagbg'
            value={purpose}
            onChange={handlePurposeChange}
          >
            <option value=''>Purpose</option>
            {Object.values(Purpose).map((purpo) => (
              <option key={purpo} value={purpo}>
                {purpo}
              </option>
            ))}
          </select>
        </div>

        <div className='col-md-1 m-2'>
          {/* <label htmlFor='minPriceInput' className='mb-2 labelText'>
            Min Price
          </label> */}
          <input
            type='number'
            id='minPriceInput'
            className='form-control tagbg'
            placeholder='Min Price'
            value={minPrice}
            onChange={handleMinPriceChange}
          />
        </div>

        <div className='col-md-1 m-2'>
          {/* <label htmlFor='maxPriceInput' className='mb-2 labelText'>
            Max Price
          </label> */}
          <input
            type='number'
            id='maxPriceInput'
            className='form-control tagbg'
            placeholder='Max Price'
            value={maxPrice}
            onChange={handleMaxPriceChange}
          />
        </div>

        <div className='col-md-1 mx-2  search-btn'>
          <button type='submit' className='btn btn-danger w-100'>
            <FaSearch />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchDropdowns;
