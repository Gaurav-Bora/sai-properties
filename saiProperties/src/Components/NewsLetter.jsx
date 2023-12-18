import  { useState } from 'react';
// import { motion } from 'framer-motion';
import '../style/newsLetter.css';
const NewsLetter = () => {


  // State to manage the email input
  const [email, setEmail] = useState('');
  // State to track email validity
  const [isEmailValid, setIsEmailValid] = useState(true);

  // Handler for email input change
  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(newEmail));
  };

  // Handler for button click
  const handleSubscribeClick = () => {
    // Check if email is valid
    if (isEmailValid) {
      console.log('Email:', email);
      // You can perform additional actions with the valid email value here
      // Clear the input after processing
      setEmail('');
    } else {
      console.error('Invalid email format. Please enter a valid email address.');
    }
  };

  return (
    <div className="text-center nlStyle" style={{ width: '100%', height: '300px', position: 'relative', overflow: 'hidden' }}>
      
      <div style={{ maxWidth: '600px', margin: '0 auto', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
        <p className='headingNl'>Subscribe to our Newsletter</p>
        <p>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in
        </p>
        <div className="row g-3">
          <div className="col-8">
            <input
              type="text"
              className={`form-control form-control-sm ${isEmailValid ? '' : 'is-invalid'}`}
              placeholder="Email"
              aria-label="Email"
              aria-describedby="button-addon1"
              value={email}
              onChange={handleEmailChange} // Call the handler on input change
            />
            {/* Display error message if email is not valid */}
            {!isEmailValid && <div className="invalid-feedback">Please enter a valid email address.</div>}
          </div>
          <div className="col-4">
            <button className="btn btn-primary btn-sm" type="button" id="button-addon1" onClick={handleSubscribeClick}>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
