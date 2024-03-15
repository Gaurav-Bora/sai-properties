import axios from 'axios';
import { createUrl } from '../utils/Utils.jsx';

export async function postEnquiry(formData) {
    const url = createUrl('/enquiry/postEnquiry');
    try {
      const response = await axios.post(url, formData);
  
      if (response.status === 200) {
        // Return the last inserted ID
        return response.data.lastInsertId;
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      throw new Error(`Error posting enquiry: ${error.message}`);
    }
  }
