// eslint-disable-next-line no-unused-vars
import React from 'react';
// import homeImage1 from '../assets/home1.jpg';
// import homeImage2 from '../assets/home2.jpg';
// import homeImage3 from '../assets/home3.jpg';
// import homeImage5 from '../assets/home5.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../style/custom-carousel.css'; 
import SearchDropdowns from './SearchData';

const HomeImgSlid = () => {
  
  return (
    
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide m-0 carousel-fade custom-carousel " // Add the custom-carousel class
      data-bs-ride="carousel"
      data-bs-interval="2000"
      data-bs-wrap="true"
      
    >
      <div className="carousel-inner p-0 h-60 px-0" >
        <SearchDropdowns/>
        <div className="carousel-item active">
          <img src='http://stage.saiproperties.co.in/front/front-images/home1.jpg' className="d-block w-100 custom-carousel" alt="img slider" />
        </div>
        <div className="carousel-item">
          <img src='http://stage.saiproperties.co.in/front/front-images/home2.jpg' className="d-block w-100 h-60" alt="img slider" />
        </div>
        <div className="carousel-item">
          <img src='http://stage.saiproperties.co.in/front/front-images/home3.jpg' className="d-block w-100" alt="img slider" />
        </div>
        <div className="carousel-item">
          <img src='http://stage.saiproperties.co.in/front/front-images/home5.jpg' className="d-block w-100" alt="img slider" />
        </div>
      </div>
    </div>
  );
};

export default HomeImgSlid;
