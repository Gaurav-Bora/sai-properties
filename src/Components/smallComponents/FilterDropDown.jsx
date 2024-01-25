import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Form, Button } from 'react-bootstrap';

const FilterDropdown = ({ options, selectedItems, onSelect, onToggle, title }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    onToggle && onToggle(showDropdown);
  }, [showDropdown, onToggle]);

  const handleClick = (item) => {
    onSelect && onSelect(item);
    // Toggle dropdown state manually without closing it
    // setShowDropdown((prevShowDropdown) => !prevShowDropdown);
  };

  const handleRemoveItem = (item) => {
    onSelect && onSelect(item);
  };

  const handleHide = () => {
    setShowDropdown(false);
    onToggle && onToggle(false);
  };

  return (
    <div className="container mt-3">
      <Dropdown
        show={showDropdown}
        onToggle={() => setShowDropdown(!showDropdown)}
        ref={dropdownRef}
      >
        <Dropdown.Toggle variant="" id="dropdown-basic" style={{width: '90%', background: '#624E80',color: 'white'}}>
          {title}
        </Dropdown.Toggle>
        <Dropdown.Menu show={showDropdown} onHide={handleHide}>
          <Form className='p-2'>
            {options.map((item) => (
              <Form.Check
                key={item}
                type="checkbox"
                label={item}
                checked={selectedItems.includes(item)}
                onChange={() => {}} // Empty onChange to prevent the warning
                onClick={() => handleClick(item)}
              />
            ))}
          </Form>
        </Dropdown.Menu>
      </Dropdown>
      {selectedItems.length > 0 && (
        <div className="mt-2">
          <p className="h6">Selected {title}:</p>
          <ul className="list-unstyled">
            {selectedItems.map((item) => (
              <li key={item} className="d-flex align-items-center m-1">
                {item}{' '}
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleRemoveItem(item)}
                  className="ms-2"
                >
                  &times;
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

FilterDropdown.propTypes = {
  options: PropTypes.array.isRequired,
  selectedItems: PropTypes.array.isRequired,
  onSelect: PropTypes.func,
  onToggle: PropTypes.func,
  title: PropTypes.string.isRequired,
};

export default FilterDropdown;
