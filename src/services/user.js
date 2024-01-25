import axios from 'axios';
import { createUrl } from '../utils/Utils.jsx';

export async function signupUser(formData) {
    const url = createUrl('/user/signup');
    try {
      const response = await axios.post(url, formData);
  
      if (response.status === 200) {
        // Return the data received from the server
        return response.data;
      } else {
        console.error(`HTTP error! Status: ${response.status}`);
        return { status: 'error', message: 'Failed to register user.' };
      }
    } catch (error) {
      console.error(`Error posting user registration: ${error.message}`);
      return { status: 'error', message: 'An error occurred during user registration.' };
    }
  }
  
  