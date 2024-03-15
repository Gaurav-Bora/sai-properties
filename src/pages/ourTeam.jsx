import  { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Components/headerComponent';
import MainFooter from '../Components/MainFooter';
import OurTeamCard from '../Components/smallComponents/OurTeamCard';
import { createUrl } from '../utils/Utils';

const OurTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const apiUrl = createUrl('/common/our-team.php');
    // Fetch team members data from your API endpoint using Axios
    axios.get(apiUrl)
      .then(response => {
        // Assuming your API response has a 'data' field
        setTeamMembers(response.data.data || []);
      })
      .catch(error => {
        console.error('Error fetching team members:', error);
      });
  }, []);

  return (
    <div>
      <div className="container-fluid text-center rounded mb-3">
        <div className="mb-4">
          <Header Heading="Meet Our Team" />
        </div>

        <div className="container d-flex justify-content-center align-items-center mt-3 p-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 justify-content-center">
            {teamMembers.map((member) => (
              <div key={member.admin_id} className="col-10 col-md-6 col-lg-3 mb-4">
                {console.log("Profile image URL:", member.profile_image)}
                {/* Pass necessary props to OurTeamCard */}
                <OurTeamCard
                  image={member.profile_image}
                  
                  fname={member.fname}
                  lname={member.lname}
                  email={member.email}
                  position={member.designation}
                  facebookLink={member.facebookLink}
                  instagramLink={member.instagramLink}
                  twitterLink={member.twitterLink}
                  linkedinLink={member.linkedinLink}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <MainFooter />
    </div>
  );
};

export default OurTeam;
