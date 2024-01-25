import '../style/SideBAr.css';

import { useState } from 'react';
import { MdVerifiedUser } from 'react-icons/md';
import 'bootstrap/dist/css/bootstrap.min.css';
import RangeSlider from './smallComponents/RangeSlider';

const FilterProperty = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='container-filter-width border'>
      <div className='p-5'>
        <div className='container-space'>
          <p className='inline-block p-1'>Apply Filter</p>
          <p className='inline-block p-1'>Clear All</p>
        </div>

        <div className='form-check form-switch container-space'>
          <label className='form-check-label' htmlFor='flexSwitchCheckChecked'>
            Verified <MdVerifiedUser />
          </label>
          <input className='form-check-input' type='checkbox' id='flexSwitchCheckDefault' />
        </div>

        <div className='dropdown'>
          <button
            className='btn btn-secondary dropdown-toggle'
            type='text'
            onClick={handleDropdownToggle}
          >
            Budget
          </button>
          <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
            <li>
              <label htmlFor='customRange2' className='form-label'>
                Example range
              </label>
              <RangeSlider />
              
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterProperty;
