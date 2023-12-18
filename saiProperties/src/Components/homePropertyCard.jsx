import PropertyCard from "./smallComponents/propertyCard";
// import homeImage1 from '../assets/home1.jpg';
import '../style/HomePropertyCard.css';

const MainPropertyCard = () => {
  return (
    <div className="container-fluid text-center border border-dark rounded p-4">
      <div className="">
        <p className="special-offers-text">Special Offers</p>
        <h1 className="mb-4 most-recommended-text">Most Recommended Properties</h1>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          <div className="col">
            <PropertyCard imageUrl='http://stage.saiproperties.co.in/front-images/home1.jpg' title={'North Parchmore Street'} price={12222} purpose={'Rent'} text="Far far away, behind the word mountains, far from the countries" area={4565} bathroom={2} bed={3} />
          </div>
          <div className="col">
            <PropertyCard imageUrl='http://stage.saiproperties.co.in/front-images/home1.jpg' title={'North Parchmore Street'} price={12222} purpose={'Rent'} text="Far far away, behind the word mountains, far from the countries" area={4565} bathroom={2} bed={3} />
          </div>
          <div className="col">
            <PropertyCard imageUrl='http://stage.saiproperties.co.in/front-images/home1.jpg' title={'North Parchmore Street'} price={12222} purpose={'Rent'} text="Far far away, behind the word mountains, far from the countries" area={4565} bathroom={2} bed={3} />
          </div>
          <div className="col">
            <PropertyCard imageUrl='http://stage.saiproperties.co.in/front-images/home1.jpg' title={'North Parchmore Street'} price={12222} purpose={'Rent'} text="Far far away, behind the word mountains, far from the countries" area={4565} bathroom={2} bed={3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPropertyCard;
