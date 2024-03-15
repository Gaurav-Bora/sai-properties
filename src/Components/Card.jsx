// import InfoCard from "./smallComponents/CardComponent";
// import { SiGooglemaps } from "react-icons/si";
// import { FaHatCowboy } from "react-icons/fa";
// import { IoHomeOutline } from "react-icons/io5";
// import { GiMoneyStack } from "react-icons/gi";
// const Card = () => {
//   return (
//     <div className="container mt-5">
//       <div className="row">
//         <div className="col-md-3">
//           <InfoCard icon={<SiGooglemaps style={{ fontSize: '50px' }} />} heading="Find Places Anywhere In The City" />
//         </div>
//         <div className="col-md-3">
//           <InfoCard icon={<FaHatCowboy style={{ fontSize: '50px' }}/>} heading="We Have Agents With Experience"  />
//         </div>
//         <div className="col-md-3">
//           <InfoCard icon={<IoHomeOutline style={{ fontSize: '50px' }}/>} heading="Buy & Rent Modern Properties"  />
//         </div>
//         <div className="col-md-3">
//           <InfoCard icon={<GiMoneyStack style={{ fontSize: '50px' }}/>} heading="Making Money" />
//         </div>
//                 {/* Add more col-md-3 divs if needed */}
//       </div>
//     </div>
//   );
// };

// export default Card;

import { useState, useEffect } from 'react';
import axios from 'axios';
import InfoCard from "./smallComponents/CardComponent";
import { createUrl } from '../utils/Utils';

const MyComponent = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const apiUrl = createUrl(`/common/services.php`);
      try {
        const response = await axios.get(apiUrl);
        if (response.data.status === 'success') {
          setServices(response.data.data);
        } else {
          console.error('API returned an error:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="row mt-4 px-5">
      {services.map(service => (
        <div key={service.icon_url} className="col-md-3">
          <InfoCard icon={service.icon_path} text={service.text} />
        </div>
      ))}
    </div>
  );
};

export default MyComponent;
