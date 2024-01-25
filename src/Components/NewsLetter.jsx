import { useState } from 'react';
import axios from 'axios';
import '../style/newsLetter.css';
import { createUrl } from '../utils/Utils';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(newEmail));
  };

  const handleSubscribeClick = () => {
    const apiUrl = createUrl('/news/newsLetter');
    if (isEmailValid) {
      // Make API call using Axios
      axios.post(apiUrl, { email, status: 'active' })
        .then(response => {
          console.log('API Response:', response.data);
          setEmail('');
        })
        .catch(error => {
          console.error('Error making API call:', error);
        });
    } else {
      console.error('Invalid email format. Please enter a valid email address.');
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
                onChange={handleEmailChange}
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
    </div>
  );
};

export default NewsLetter;
