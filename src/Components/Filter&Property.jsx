// FilterProperty.jsx
import  { useState } from 'react';
import FilterSection from './FilterSection';
import PropertyCard from './PropertyCard';
// import Images from '../assets/ImagesPropertySlider';
import Pagination from '../Components/smallComponents/Pagination'; // Import your Pagination component
import '../style/Filter&Property.css';
import PropertyData from '../assets/deleteLater/PropertyData';

const FilterProperty = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 3; // Number of properties to display per page

 

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = PropertyData.slice(indexOfFirstProperty, indexOfLastProperty);

  const totalPages = Math.ceil(PropertyData.length / propertiesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container-fluid mt-5 p-5 full-screen-bg">
      <div className="row">
        <div className="col-md-3" style={{ overflowY: 'auto', maxHeight: '80vh', position: 'sticky', top: '0' }}>
          <FilterSection />
        </div>
        <div className="col-md-9">
          {currentProperties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
          <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
        </div>
      </div>
    </div>
  );
};

export default FilterProperty;
