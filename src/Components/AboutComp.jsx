// AboutComp.js
import '../style/AboutComp.css';

const AboutComp = () => {
  const calculateExperience = () => {
    const establishmentYear = 2007;
    const currentYear = new Date().getFullYear();
    return currentYear - establishmentYear;
  };

  return (
    <div className="about-container p-4">
      <div className='about-heading text-center mb-2'>
        <h1>About Sai Properties</h1>
      </div>
      <div className="row">
        {/* Left Side - Video */}
        {/* <div className="col-lg-6 mb-4">
          <iframe
            src="https://player.vimeo.com/video/45830194?h=2c5541d8bc&color=ffffff&title=0&byline=0&portrait=0&badge=0"
            width="100%"  // Use 100% width to fill the container
            height="360px"
            frameBorder="3"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div> */}

        {/* Right Side - Text */}
        <div className="col-lg-12 text-center">
          {/* <h2 className="mb-3">Learn about the Sai Properties</h2> */}
          <p className='p-justify me-2'>
            SAI REAL ESTATE was established on 16th Sep 2007 as real estate. In 2012 Sai real estate converted into SAI PROPERTIES, Sai properties had a vision for the way real estate should work, anticipate and respond to the needs of buyers and sellers, and support the communities they serve. Sai properties has always focused on three basic principles: hire the best people, give them the best tools, create thriving communities. It`s not rocket science, but it has worked pretty well for us for over {calculateExperience()} years. Sai property has provided various people with their dream homes, whether it`s about bungalows, rent houses, or flats. We`re experts in finding and building houses for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutComp;
