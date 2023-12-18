// eslint-disable-next-line no-unused-vars
import React from 'react';
import Review from '../Components/smallComponents/Reviews';
// import reviewImage1 from '../assets/review1.jpg';
import '../style/ReviewsHome.css'; // Import the CSS file

const ReviewsHome = () => {
  return (
    <div className="text-center shadingBg" style={{ padding: '20px' }}>
      <h1 className="mb-4">Product Reviews</h1>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000" data-bs-wrap="true">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Review userProfilePhoto='http://stage.saiproperties.co.in/front-images/review1.jpg' location={'Pune,Maharashtra'} reviewText="I recently used this real estate website to find my dream home, and the experience was fantastic! The user-friendly interface made it easy to navigate through listings, and the search filters helped narrow down options based on my preferences. The detailed property descriptions and high-quality images provided a clear picture of each home. I appreciated the timely notifications for new listings that matched my criteria. Overall, a seamless and efficient platform that truly made my home search a breeze." userName='Gaurav' />
          </div>
          <div className="carousel-item">
            <Review userProfilePhoto='http://stage.saiproperties.co.in/front-images/review1.jpg' location={'Pune, Maharashtra'} reviewText="As a first-time homebuyer, I was a bit overwhelmed by the whole process. Thankfully, I stumbled upon this real estate website, and it became my go-to resource. The educational articles and guides in the blog section were incredibly helpful in understanding the buying process. The mortgage calculator provided a quick estimate of monthly payments, which was a game-changer for me. The site also connected me with a reliable local agent who guided me every step of the way. I'm now a proud homeowner, and I owe it in part to this amazing platform." userName='Virat' />
          </div>
          <div className="carousel-item">
            <Review userProfilePhoto='http://stage.saiproperties.co.in/front-images/review1.jpg' location={'Pune,Maharashtra'} reviewText="I've been using various real estate websites for years, and this one stands out for its comprehensive investment tools. The market analysis feature helped me identify lucrative investment opportunities, and the interactive map view made it easy to assess the neighborhood's potential. The website's regular updates on market trends and property value changes are invaluable for making informed investment decisions. The team behind this platform understands the needs of property investors, and I highly recommend it to anyone serious about real estate investment." userName='Mohan' />
          </div>
        </div>
      </div>
    </div>

  );
};

export default ReviewsHome;
