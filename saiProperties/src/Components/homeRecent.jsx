import PropertyCard from "./smallComponents/propertyCard";
// import homeImage1 from '../assets/home1.jpg';
import '../style/HomeRecent.css';


const RecentPropertyCard = () => {
  return (
    <div className="container-fluid text-center border border-dark rounded p-4">
      <div className="">
        <p className="special-offers-text">Recent Posts</p>
        <h1 className=" most-recommended-text">Recent Properties</h1>

        
        
      </div>

      {/* Adjust the margin for the top of this container */}
      <div className="d-flex justify-content-center align-items-center mt-3">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 justify-content-center">
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

export default RecentPropertyCard;
