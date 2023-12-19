
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import About from './pages/About';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Contact from './pages/contact';
import Enquiry from './pages/enquiry';
import OurTeam from './pages/ourTeam';
import Property from './pages/property';
import Services from './pages/services';
import Login from './pages/login';
import Signup from './pages/signup';
import Rent from './pages/residential/Rent';
import Pg_CoLiving from './pages/residential/Pg_CoLiving';
import Buy_reSell from './pages/residential/Buy_reSell';
import Buy_newSell from './pages/residential/Buy_newSell';
import PlotLand from './pages/residential/PlotLand';
import RentC from './pages/commertial/RentC';
import Buy_newSellC from './pages/commertial/Buy_newSellC';
import Buy_reSellC from './pages/commertial/Buy_reSellC';
import PlotLandC from './pages/commertial/PlotLandC';

function App() {
  return (
    <div className='container-fluid'>
      <NavigationBar/>
      <Routes>
      <Route path="/front" element={<Home />} />
        <Route path="/front/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/front/about" element={<About />} />
        <Route path="/front/contact" element={<Contact />} />
        <Route path="/front/enquiry" element={<Enquiry />} />
        <Route path="/front/ourTeam" element={<OurTeam />} />
        <Route path="/front/property" element={<Property />} />
        <Route path="/front/services" element={<Services />} />
        <Route path="/front/login" element={<Login />} />
        <Route path="/front/signup" element={<Signup />} />
        {/* Residential Dropdown */}
        <Route path="/front/residential/rent" element={<Rent />} />
        <Route path="/front/residential/pg-co-living" element={<Pg_CoLiving />} />
        <Route path="/front/residential/buy-re-sale" element={<Buy_reSell />} />
        <Route path="/front/residential/buy-new-sale" element={<Buy_newSell />} />
        <Route path="/front/residential/plots-lands" element={<PlotLand />} />
        {/* Commercial dropdown */}
        <Route path="/front/commercial/rent" element={<RentC />} />
        <Route path="/front/commercial/buy-new-sale" element={<Buy_newSellC />} />
        <Route path="/front/commercial/buy-re-sale" element={<Buy_reSellC />} />
        <Route path="/front/commercial/plots-lands" element={<PlotLandC />} />
        

      </Routes>
    </div>
  );
}

export default App;

