import { useState, useEffect } from 'react';
import axios from 'axios';
import FilterSection from './FilterSection';
import PropertyCard from './PropertyCard';
import Pagination from '../Components/smallComponents/Pagination';
import '../style/Filter&Property.css';
import { createUrl } from '../utils/Utils';

const FilterProperty = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [propertyData, setPropertyData] = useState([]);
  const propertiesPerPage = 10; // Number of properties to display per page
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = propertyData.slice(indexOfFirstProperty, indexOfLastProperty);

  const totalPages = Math.ceil(propertyData.length / propertiesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const apiUrl = createUrl('/user/user-properties.php'); // Check that createUrl is correctly defined

    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        console.log('API response:', response.data); // Add this line to check the response structure

        if (response.data.status === 'success') {
          setPropertyData(response.data.data);
        } else {
          setError('Error fetching property data. Please try again later.');
        }
      } catch (error) {
        console.error('Error fetching property data:', error);
        setError('Error fetching property data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container-fluid mt-5 p-5 full-screen-bg">
      <div className="row">
        <div className="col-md-3" style={{ overflowY: 'auto', maxHeight: '80vh', position: 'sticky', top: '0' }}>
          <FilterSection />
        </div>
        <div className="col-md-9">
          {currentProperties && currentProperties.length > 0 ? (
            currentProperties.map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))
          ) : (
            <p>No properties available.</p>
          )}
          <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
        </div>

      </div>
    </div>
  );
};

export default FilterProperty;
