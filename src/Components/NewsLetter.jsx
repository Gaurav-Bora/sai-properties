import { useState } from 'react';
import axios from 'axios';
import '../style/newsLetter.css';
import { createUrl } from '../utils/Utils';
// import { toast, ToastContainer } from 'react-toastify';
const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  // const notify = (message, type = 'info') => {
  //   toast[type](message, {
  //     position: 'top-right',
  //     autoClose: 3000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //   });
  // };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(newEmail));
  };

  const handleSubscribeClick = () => {
    const apiUrl = createUrl('/common/newsletter.php');
    
    if (!email) {
      console.error('Email cannot be empty. Please enter a valid email address.');
      setIsEmailValid(false)
      // Notify the user about the empty email
      // notify('Email cannot be empty. Please enter a valid email address.', 'error');
      return; // Do not proceed with the API call if the email is empty
    }
  
    if (isEmailValid) {
      // Make API call using Axios
      axios.post(apiUrl, { email })
        .then(response => {
          console.log('API Response:', response.data);
          // notify('Subscribed successfully!', 'success');
          setEmail('');
        })
        .catch(error => {
          console.error('Error making API call:', error);
          // Notify the user about the error
          // notify('Error subscribing. Please try again later.', 'error');
        });
    } else {
      console.error('Invalid email format. Please enter a valid email address.');
      // Notify the user about the invalid email
      // notify('Invalid email format. Please enter a valid email address.', 'error');
    }
  };
  

  return (
    <div className="nlStyle container-fluid text-center p-3">
      <div className="row justify-content-center align-items-center" style={{ height: '100%' }}>
        <div className="col-md-8 col-lg-6">
          <p className="headingNl">Subscribe to our Newsletter</p>
          <p>
            Stay in the loop with our latest updates! Enter your email to receive exclusive newsletters and be the first to know about exciting news and offers.
          </p>
          <div className="row g-3">
            <div className="col px-5">
              <input
                type="text"
                className={`form-control ${isEmailValid ? '' : 'is-invalid'}`}
                placeholder="Email"
                aria-label="Email"
                value={email}
                onChange={handleEmailChange} formNoValidate
              />
              {!isEmailValid && <div className="invalid-feedback">Please enter a valid email address.</div>}
            </div>
            <div className="">
              <button className="btn btn-primary" type="button" onClick={handleSubscribeClick}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default NewsLetter;
