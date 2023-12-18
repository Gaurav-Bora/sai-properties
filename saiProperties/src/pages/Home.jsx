// Home.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import HomeImgSlid from '../Components/HomeImgSlid';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SearchHome from '../Components/SearchHome';
import MainFooter from '../Components/MainFooter';
import Card from '../Components/Card';
import NewsLetter from '../Components/NewsLetter';
import MainPropertyCard from '../Components/homePropertyCard';
import RecentPropertyCard from '../Components/homeRecent';
import ReviewsHome from '../Components/ReviewsHome';


const Home = () => {
  return (
    <div className="m-0 p-0">
      <HomeImgSlid />
      <SearchHome />
      
      <Card />
      <RecentPropertyCard /> 
      <MainPropertyCard />
      <ReviewsHome/>
      <NewsLetter />
      <MainFooter />
    </div>
  );
}

export default Home;
