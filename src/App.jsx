
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
import PropertyDetails from './pages/PropertyDetails';
// import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { login } from './features/auth'
import Terms from './pages/terms&policy/Terms';
import Policy from './pages/terms&policy/Policy';


function App() {

  

  useEffect(() => {
    // Check the current sessionStorage to see if the user is logged in
    if (sessionStorage['name'] && sessionStorage['name'].length > 0) {
      // Update the auth slice status to true
      login();
    }
  }, []);


  return (
    <div className='container-fluid'>
      <NavigationBar />
      
      <Routes>
      <Route path="/front" element={<Home />} />
      {/* Navigation Bar */}
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
        <Route path="/front/:propertyKey" element={<PropertyDetails />} />       
        <Route path="/front/terms" element={<Terms />} />       
        <Route path="/front/policy" element={<Policy />} />       

      </Routes>
    </div>
  );
}

export default App;

