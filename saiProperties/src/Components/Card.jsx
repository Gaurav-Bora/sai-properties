import InfoCard from "./smallComponents/CardComponent";
import { SiGooglemaps } from "react-icons/si";
import { FaHatCowboy } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { GiMoneyStack } from "react-icons/gi";
const Card = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <InfoCard icon={<SiGooglemaps style={{ fontSize: '50px' }} />} heading="Find Places Anywhere In The City" />
        </div>
        <div className="col-md-3">
          <InfoCard icon={<FaHatCowboy style={{ fontSize: '50px' }}/>} heading="We Have Agents With Experience"  />
        </div>
        <div className="col-md-3">
          <InfoCard icon={<IoHomeOutline style={{ fontSize: '50px' }}/>} heading="Buy & Rent Modern Properties"  />
        </div>
        <div className="col-md-3">
          <InfoCard icon={<GiMoneyStack style={{ fontSize: '50px' }}/>} heading="Making Money" />
        </div>
        {/* Add more col-md-3 divs if needed */}
      </div>
    </div>
  );
};

export default Card;
