import  { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../style/custom-carousel.css'; 
import SearchDropdowns from './SearchData';
import { createUrl } from '../utils/Utils';

const HomeImgSlid = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const apiUrl = createUrl('/common/home_banner.php');
    axios.get(apiUrl)
      .then(response => {
        const data = response.data;
        console.log(data);
        if (data.success) {
          setBanners(data.banners);
        } else {
          console.error('Error fetching banners:', data.message);
        }
      })
      .catch(error => {
        console.error('Error fetching banners:', error);
      });
  }, []);

  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide m-0 carousel-fade custom-carousel "
      data-bs-ride="carousel"
      data-bs-interval="2000"
      data-bs-wrap="true"
    >
      <div className="carousel-inner p-0 h-60 px-0" >
        <SearchDropdowns/>
        {banners.map((banner, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img src={banner} className="d-block w-100 custom-carousel" alt={`img slider ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeImgSlid;
