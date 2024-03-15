// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../style/searchHomeStyle.css';
// import LocationDropdowns from './SearchData';
import SearchDropdowns from './SearchData';

const SearchHome = () => {
  return (
    <div className='searchStyle'>
        <SearchDropdowns/>
        
    </div>
  )
}

export default SearchHome