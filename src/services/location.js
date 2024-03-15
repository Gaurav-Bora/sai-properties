// services/location.js
import axios from 'axios';
import { createUrl } from '../utils/Utils.jsx';

export async function fetchStates() {
  const url = createUrl('/user/user-state.php') ;

  try {
    const response = await axios.get(url);

    if (response.status === 200) {
      const data = response.data;
      return data;
    } else {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    throw new Error(`Error fetching states: ${error.message}`);
  }
}

// Assuming you're passing the stateId as a query parameter
export async function fetchCity(stateId) {
    const url = createUrl('/user/user-city.php');
  
    try {
      const response = await axios.get(url, {
        params: {
          stateId: stateId,
        },
      });
  
      if (response.status === 200) {
        const data = response.data;
        return data;
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      throw new Error(`Error fetching cities: ${error.message}`);
    }
  }

  export async function fetchLocation(cityId) {
    const url = createUrl('/user/user-location.php');
  
    try {
      const response = await axios.get(url, {
        params: {
          cityId: cityId,
        },
      });
  
      if (response.status === 200) {
        const data = response.data;
        return data;
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      throw new Error(`Error fetching cities: ${error.message}`);
    }
  }
  
  

