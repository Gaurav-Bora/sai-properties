import { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/Filter&Property.css';
import Pagination from '../Components/smallComponents/Pagination';
import PropertyCard from '../Components/PropertyCard';
import { createUrl } from '../utils/Utils';
import { Link,useLocation } from 'react-router-dom';
import MainFooter from '../Components/MainFooter';


const SearchProperties = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [propertyData, setPropertyData] = useState([]);
  const location = useLocation();
  

  const propertiesPerPage = 10; // Number of properties to display per page
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const searchData = location.state?.searchData || {};
    const fetchData = async () => {
      try {
        // Fetch data from the API using the payload data
        const apiUrl = createUrl('/user/user-search.php');
        const response = await axios.post(apiUrl, searchData);

        // Update propertyData state with the received data
        setPropertyData(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    // Call fetchData function when the component mounts
    fetchData();
  }, [location.state]); // Include search criteria in the dependency array

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = propertyData ? propertyData.slice(indexOfFirstProperty, indexOfLastProperty) : [];
  const totalPages = propertyData ? Math.ceil(propertyData.length / propertiesPerPage) : 0;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container-fluid mt-5 p-5 full-screen-bg">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-9">
        {currentProperties.length > 0 ? (
            currentProperties.map((property) => (
              <PropertyCard
                key={property.property_key}
                {...property}
              />
            ))
          ) : (
            <div className='no-data-display text-center'>
            <h3 >No exactly matching properties available .</h3>
            <h5 className='mt-2'> <Link to="/front/property">Explore more properties here</Link></h5>
            </div>
          )}
          <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
       </div>
      </div>
      <MainFooter />
    </div>
  );
};

export default SearchProperties;
