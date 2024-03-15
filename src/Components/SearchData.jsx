import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import Residential from '../assets/ResidentialDropDown';
import Commertial from '../assets/CommertialDropDoun';
import Category from '../assets/Category';
import { fetchCity, fetchLocation, fetchStates } from '../services/location';
import { toast } from 'react-toastify'
// import { createUrl } from '../utils/Utils';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';


// import '../style/formBg.css'

const SearchDropdowns = () => {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [residential, setResidential] = useState('');
  const [commercial, setCommercial] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const navigate = useNavigate();


  const handleStateChange = (event) => {
    const newState = event.target.value;
    setSelectedState(newState);
    setSelectedCity('');
    setSelectedLocation('');

    // Fetch cities based on the selected state
    loadCities(newState);
  };

  const handleCityChange = async (event) => {
    const newCity = event.target.value;
    setSelectedCity(newCity);

    // Fetch locations based on the selected city
    await loadLocations(newCity);
  };

  const handleLocationChange = (event) => {
    const newLocation = event.target.value;
    setSelectedLocation(newLocation);
  };

  // const handleLocationChange = (event) => {
  //   const selectedOptions = Array.from(event.target.selectedOptions);
  //   const selectedLocations = selectedOptions.map((option) => option.value);
  
  //   setSelectedLocation(selectedLocations);
  // };
  





  const handleTypeChange = (event) => {
    const newType = event.target.value;
    setSelectedType(newType);
    setResidential('');
    setCommercial('');
  };

  const handleResidentialChange = (event) => {
    const type = event.target.value;
    setResidential(type);
  };

  const handleCommercialChange = (event) => {
    const sub = event.target.value;
    setCommercial(sub);
  };

  const handleMinPriceChange = (event) => {
    const price = event.target.value;
    setMinPrice(price);
  };

  const handleMaxPriceChange = (event) => {
    const price = event.target.value;
    setMaxPrice(price);
  };

  const handleCategoryChange = (event) => {
    const newCategory = event.target.value;
    setSelectedCategory(newCategory);
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

  const handleSearch = async (event) => {
    event.preventDefault();

    const payload = {
      selectedState,
      selectedCity,
      selectedLocation,
      selectedType,
      residential,
      commercial,
      minPrice,
      maxPrice,
      selectedCategory,
    };

    console.log('search data: ', payload);

    try {
      setSelectedState('');
      setSelectedCity('');
      setSelectedLocation('');
      setSelectedType('');
      setResidential('');
      setCommercial('');
      setMinPrice('');
      setMaxPrice('');
      setSelectedCategory('');

      navigate('/front/searchProperties', { state: { searchData: payload } });
    } catch (error) {
      console.error('Error executing search API:', error);
      toast.error('Error executing search');
    }
  };


  return (
    <div className='container-fluid bg-transparent' style={{ position: 'absolute', zIndex: 2 }}>
      <form
        className='container-fluid text-start form-bg formbg p-4 d-flex flex-wrap justify-content-center align-items-center'
        onSubmit={handleSearch}
        style={{ backgroundColor: 'transparent', borderRadius: '10px' }}
      >
        <div className=''>
          <select
            id='stateDropdown'
            className='form-select tagbg'
            value={selectedState}
            onChange={handleStateChange}
            style={{ width: '150px', margin: '10px' }}
          >
            <option value=''>State</option>
            {states.map((state) => (
              <option key={state.id} value={state.id} style={{ color: 'black' }}>
                {state.state_name}
              </option>
            ))}
          </select>
        </div>


        <div className=''>
          <select
            id='cityDropdown'
            className='form-select tagbg'
            value={selectedCity}
            onChange={handleCityChange}
            style={{ width: '150px', margin: '10px' }}
          >
            <option value=''>City</option>
            {cities.map((city) => (
              <option key={city.id} value={city.id} style={{ color: 'black' }}>
                {city.city}
              </option>
            ))}
          </select>
        </div>

         <div className=''>
          <select
            id='locationDropdown'
            className='form-select tagbg'
            value={selectedLocation}
            onChange={handleLocationChange}
            style={{ width: '150px', margin: '10px' }}
          >
            <option value=''>Location</option>
            {locations.map((location) => (
              <option key={location.id} value={location.id}>
                {location.location}
              </option>
            ))}
          </select>
        </div> 

{/* <div className=''>
  <select
    id='locationDropdown'
    className='form-select tagbg'
    value={selectedLocation}
    onChange={handleLocationChange} // Make sure to pass handleLocationChange as the onChange handler
    multiple={true} // Enable multiple selection
    style={{ width: '150px', margin: '10px' }}
  >
   
    <option value=''>Location</option>
    
    {locations.map((location) => (
      <option key={location.id} value={location.id}>
        {location.location}
      </option>
    ))}
  </select>
</div> */}





        <div className=''>
          <select
            id='categoryDropdown'
            className='form-select tagbg'
            value={selectedCategory}
            onChange={handleCategoryChange}
            style={{ width: '150px', margin: '10px' }}
          >
            <option value=''>Category</option>
            {Object.values(Category).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className=''>
          <select
            id='typeDropdown'
            className='form-select tagbg'
            value={selectedType}
            onChange={handleTypeChange}
            style={{ width: '150px', margin: '10px' }}
          >
            <option value=''>Property Type</option>
            <option value='Residential'>Residential</option>
            <option value='Commertial'>Commercial</option>
          </select>
        </div>

        {selectedType === 'Residential' && (
          <div className=''>
            <select
              id='residentialDropdown'
              className='form-select tagbg'
              value={residential}
              onChange={handleResidentialChange}
              style={{ width: '150px', margin: '10px' }}
            >
              <option value=''>Residential Type</option>
              {Object.values(Residential).map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        )}

        {selectedType === 'Commertial' && (
          <div className=''>
            <select
              id='commertialDropdown'
              className='form-select tagbg'
              value={commercial}
              onChange={handleCommercialChange}
              style={{ width: '150px', margin: '10px' }}
            >
              <option value=''>Commertial Type</option>
              {Object.values(Commertial).map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Add an empty dropdown when nothing is selected */}
        {selectedType === '' && (
          <div className=''>
            <select
              id='emptyDropdown'
              className='form-select tagbg'
              style={{ width: '150px', margin: '10px' }}
            >
              <option value=''>Select Type First</option>
            </select>
          </div>
        )}

        <div className=''>
          <input
            type='number'
            id='minPriceInput'
            className='form-control tagbg'
            placeholder='Min Price'
            value={minPrice}
            onChange={handleMinPriceChange}
            style={{ width: '150px', margin: '10px' }}
          />
        </div>

        <div className=''>
          <input
            type='number'
            id='maxPriceInput'
            className='form-control tagbg'
            placeholder='Max Price'
            value={maxPrice}
            onChange={handleMaxPriceChange}
            style={{ width: '150px', margin: '10px' }}
          />
        </div>

        <div className='search-btn'>
          <button type='submit' className='btn btn-danger w-100'>
            <FaSearch />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchDropdowns;
